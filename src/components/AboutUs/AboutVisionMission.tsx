import { AnchorPointer } from "@/components/@UI/AnchorPointer";
import { SplitSectionClass } from "@/components/@UI/Section";
import { dangerouslySetFormattedInnerHTML, H2 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import React from "react";
import Image from "next/image";
import { BackgroundWrapper } from "../@UI/BackgroundWrapper";
import classnames from "classnames";
import styles from "./AboutVisionMission.module.css";

export const AboutVisionMission: React.FC<{
  vibrantColor: string;
  pageSections: MembersQuery["pageSections"];
}> = ({ vibrantColor, pageSections }) => {
  const firstPic = pageSections[1].picture[0];
  const secondPic = pageSections[2].picture[0];

  return (
    <BackgroundWrapper vibrantColor={vibrantColor}>
      <AnchorPointer id="vision" />
      <div className={SplitSectionClass}>
        <div className="basis-2/3">
          <H2>{pageSections[1].title}</H2>
          <div
            className="py-4 font-gt text-xl leading-8"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[1].content.html ?? ""
            )}
          />
        </div>
        <div className="basis-1/3">
          <Image
            width={firstPic?.width ?? 0 / 10}
            height={firstPic?.height ?? 0 / 10}
            src={firstPic.url}
            alt="uber-uns"
          />
        </div>
      </div>

      <AnchorPointer id="mission" />
      <div className={SplitSectionClass} id="mission">
        <div className="basis-1/3">
          <picture>
            <Image
              width={secondPic?.width ?? 0 / 10}
              height={secondPic?.height ?? 0 / 10}
              src={secondPic.url}
              alt="uber-uns"
            />
          </picture>
        </div>
        <div className="basis-2/3">
          <H2>{pageSections[2].title}</H2>
          <div
            className={classnames(
              "py-4 font-gt text-xl leading-8",
              styles.mission
            )}
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[2].content.html ?? ""
            )}
          />
        </div>
      </div>
    </BackgroundWrapper>
  );
};
