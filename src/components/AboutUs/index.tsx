import { Section, SplitSection } from "@/components/@UI/Section";
import { H1 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { AboutNav } from "@/components/AboutUs/AboutNav";
import { AboutMembers } from "@/components/AboutUs/AboutMembers";
import { AboutNetwork } from "@/components/AboutUs/AboutNetwork";
import { AboutVisionMission } from "@/components/AboutUs/AboutVisionMission";
import { AnchorPointer } from "@/components/@UI/AnchorPointer";
import React from "react";
import Image from "next/image";

export const AboutUs: React.FC<MembersQuery> = ({
  members,
  pageSections,
  pages,
  networks,
}) => {
  const vibrantColor = pages?.[0]?.vibrantColor?.hex;
  return (
    <>
      <HeadMeta />
      <AboutNav />
      <Section>
        <Image
          width={960}
          height={640}
          src={pageSections[0].picture[0].url}
          alt="uber-uns"
        />
      </Section>

      <SplitSection.Section>
        <SplitSection.Side>
          <H1>{pageSections[0].title}</H1>
        </SplitSection.Side>
        <SplitSection.Main>
          <div
            className={`py-4`}
            dangerouslySetInnerHTML={{
              __html: pageSections[0].content.html ?? "",
            }}
          />
        </SplitSection.Main>
      </SplitSection.Section>

      <AboutVisionMission
        vibrantColor={vibrantColor}
        pageSections={pageSections}
      />
      <AnchorPointer id="team" />
      <AboutMembers members={members} vibrantColor={vibrantColor} />

      <AboutNetwork networks={networks} vibrantColor={vibrantColor} />
    </>
  );
};
