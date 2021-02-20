import { H2 } from "@/components/@UI/Texts";
import { withLayout } from "@/components/Layout";
import {
  MemberDocument,
  MemberQuery,
  MembersDocument,
} from "@/components/Members/Members.generated";
import { TeamPhoto } from "@/components/Members/TeamPhoto";
import { graphCmsRequest } from "@/graphql/graphcms";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import tw from "twin.macro";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphCmsRequest(MembersDocument);

  return {
    paths: data.members.map((item) => ({ params: { slug: item?.slug ?? "" } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await graphCmsRequest(MemberDocument, {
    slug: context?.params?.slug ?? "",
  });
  return {
    props: data,
  };
};

const TeamPage: React.FC<MemberQuery> = ({ members }) => (
  <div css={tw`p-4`}>
    <TeamPhoto src={members[0]?.picture?.url} />
    <H2>{members[0]?.name}</H2>
    <div
      dangerouslySetInnerHTML={{
        __html: members[0]?.bio?.html ?? "",
      }}
    />
  </div>
);

export default withLayout()(TeamPage);
