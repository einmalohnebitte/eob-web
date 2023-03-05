import { Section, SplitSection } from "@/components/@UI/Section";
import { dangerouslySetFormattedInnerHTML, H1 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { AboutNav } from "@/components/AboutUs/AboutNav";
import { AboutMembers } from "@/components/AboutUs/AboutMembers";
import { AboutNetwork } from "@/components/AboutUs/AboutNetwork";
import { AboutVisionMission } from "@/components/AboutUs/AboutVisionMission";
import { AnchorPointer } from "@/components/@UI/AnchorPointer";
import React from "react";
import Image from "next/image";
import { Flex } from "../@UI/Flex";

export const AboutUs: React.FC<MembersQuery> = ({
  members,
  pageSections,
  pages,
  networks,
}) => {
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

      <SplitSection>
        <Flex basis="1/3">
          <H1>{pageSections[0].title}</H1>
        </Flex>
        <Flex basis="2/3" className="basis-2/3">
          <div
            className={`py-4`}
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[0].content.html ?? ""
            )}
          />
        </Flex>
      </SplitSection>

      <AboutVisionMission pageSections={pageSections} />
      <AnchorPointer id="team" />
      <AboutMembers members={members} />

      <AboutNetwork networks={networks} />
    </>
  );
};
