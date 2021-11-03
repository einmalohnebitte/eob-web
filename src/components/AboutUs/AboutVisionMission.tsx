import { SplitSection } from "@/components/@UI/Section";
import { H2 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import React from "react";
import tw from "twin.macro";

export const AboutVisionMission: React.FC<{
  vibrantColor: string;
  pageSections: MembersQuery["pageSections"];
}> = ({ vibrantColor, pageSections }) => {
  return (
    <div
      css={`
        background-image: linear-gradient(${vibrantColor}, white);
      `}
    >
      <SplitSection.Section id="vision">
        <SplitSection.Main>
          <H2>{pageSections[1].title}</H2>
          <div
            css={`
              ${tw`py-4 text-xl leading-8 font-gt`}
              ul {
                list-style: disc;
              }
            `}
            dangerouslySetInnerHTML={{
              __html: pageSections[1].content.html ?? "",
            }}
          />
        </SplitSection.Main>
        <SplitSection.Side>
          <picture>
            <img src={pageSections[1].picture[0].url} alt="uber-uns" />
          </picture>
        </SplitSection.Side>
      </SplitSection.Section>

      <SplitSection.Section id="mission">
        <SplitSection.Side>
          <picture>
            <img src={pageSections[2].picture[0].url} alt="uber-uns" />
          </picture>
        </SplitSection.Side>
        <SplitSection.Main>
          <H2>{pageSections[2].title}</H2>
          <div
            css={`
              ${tw`py-4 text-xl leading-8 font-gt`}
              ul {
                list-style: disc inside;
                div {
                  display: inline;
                }
              }
            `}
            dangerouslySetInnerHTML={{
              __html: pageSections[2].content.html ?? "",
            }}
          />
        </SplitSection.Main>
      </SplitSection.Section>
    </div>
  );
};
