import { AnchorPointer } from "@/components/@UI/AnchorPointer";
import { SplitSection } from "@/components/@UI/Section";
import { dangerouslySetFormattedInnerHTML, H2 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import React from "react";
import Image from "next/image";

export const AboutVisionMission: React.FC<{
  vibrantColor: string;
  pageSections: MembersQuery["pageSections"];
}> = ({ vibrantColor, pageSections }) => {
  const firstPic = pageSections[1].picture[0];
  const secondPic = pageSections[2].picture[0];

  return (
    <div
      css={`
        background-image: linear-gradient(${vibrantColor}, white);
      `}
    >
      <AnchorPointer id="vision" />
      <SplitSection.Section>
        <SplitSection.Main>
          <H2>{pageSections[1].title}</H2>
          <div
            className="py-4 font-gt text-xl leading-8"
            css={`
              ul {
                list-style: disc;
              }
            `}
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[1].content.html ?? ""
            )}
          />
        </SplitSection.Main>
        <SplitSection.Side>
          <Image
            width={firstPic?.width ?? 0 / 10}
            height={firstPic?.height ?? 0 / 10}
            src={firstPic.url}
            alt="uber-uns"
          />
        </SplitSection.Side>
      </SplitSection.Section>

      <AnchorPointer id="mission" />
      <SplitSection.Section id="mission">
        <SplitSection.Side>
          <picture>
            <Image
              width={secondPic?.width ?? 0 / 10}
              height={secondPic?.height ?? 0 / 10}
              src={secondPic.url}
              alt="uber-uns"
            />
          </picture>
        </SplitSection.Side>
        <SplitSection.Main>
          <H2>{pageSections[2].title}</H2>
          <div
            className="py-4 font-gt text-xl leading-8"
            css={`
              ul {
                list-style: disc inside;
                div {
                  display: inline;
                }
              }
            `}
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[2].content.html ?? ""
            )}
          />
        </SplitSection.Main>
      </SplitSection.Section>
    </div>
  );
};
