import { Section, SplitSectionClass } from "@/components/@UI/Section";
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

      <div className={SplitSectionClass}>
        <div className="basis-1/3">
          <H1>{pageSections[0].title}</H1>
        </div>
        <div className="basis-2/3">
          <div
            className={`py-4`}
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[0].content.html ?? ""
            )}
          />
        </div>
      </div>

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
