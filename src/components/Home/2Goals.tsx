import { Card } from "@/components/@UI/Card";
import { PageSectionsQuery } from "@/components/PageSections/PageSections.cms.generated";
import { useTranslations } from "@/translate";
import { useRouter } from "next/router";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from "styled-components/cssprop";
import tw from "twin.macro";

// import {
//   BackgroundBlueWrapper,
//   BackgroundPinkWrapper,
//   BackgroundYellowWrapper,
// } from "../@UI/BackgroundWrapper";
// import { ButtonBlue, ButtonPink, ButtonYellow } from "../@UI/Buttons";
import { Section } from "../@UI/Section";

// import { H2 } from "../@UI/Texts";

// enum PageStates {
//   BUY,
//   SELL,
//   SPREAD,
// }

// const BackgroundWrapper: React.FC<{ activeIndex: number }> = ({
//   activeIndex,
//   children,
// }) =>
//   // eslint-disable-next-line no-nested-ternary
//   activeIndex === 1 ? (
//     <BackgroundYellowWrapper>{children}</BackgroundYellowWrapper>
//   ) : activeIndex === 2 ? (
//     <BackgroundPinkWrapper>{children}</BackgroundPinkWrapper>
//   ) : (
//     <BackgroundBlueWrapper>{children}</BackgroundBlueWrapper>
//   );

export const Goals: React.FC<PageSectionsQuery> = ({ pageSections }) => {
  const intl = useTranslations();
  const { push } = useRouter();
  // const [current, setCurrent] = useState(PageStates.BUY);
  const buy = pageSections.find((s) => s.code === "einkaufen");
  const sell = pageSections.find((s) => s.code === "verkaufen");
  const spread = pageSections.find((s) => s.code === "verbreiten");

  return (
    <div
      css={`
        background-image: linear-gradient(#dddddd, white);
      `}
    >
      <Section css={tw` flex`}>
        <Card
          onClick={() => push("/einkaufen")}
          color="blue"
          title={intl("BUY")}
          img={buy?.picture[0].url}
          resize={true}
        />
        <Card
          onClick={() => push("/verkaufen")}
          color="yellow"
          img={sell?.picture[0].url}
          title={intl("SELL")}
          resize={true}
        />
        <Card
          onClick={() => push("/verbreiten")}
          color="pink"
          img={spread?.picture[0].url}
          title={intl("SPREAD")}
          resize={true}
        />
      </Section>
      {/* <SplitSection.Section>
        <SplitSection.Main>
          <div css={tw`p-4`}>
            <H2
              onClick={() => setCurrent(PageStates.BUY)}
              css={[current === PageStates.BUY && tw`text-blue-500`]}
            >
              {intl("BUY")}
            </H2>
            {current === PageStates.BUY && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: buy?.content.html ?? "",
                  }}
                />
                <ButtonBlue
                  css={`
                    ${tw`m-2`}
                  `}
                  onClick={() => push("/einkaufen")}
                >
                  {intl("MORE")}
                </ButtonBlue>
              </>
            )}
          </div>
          <div css={tw`p-4`}>
            <H2
              onClick={() => setCurrent(PageStates.SELL)}
              css={[current === PageStates.SELL && tw`text-yellow-600`]}
            >
              {intl("SELL")}
            </H2>
            {current === PageStates.SELL && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sell?.content.html ?? "",
                  }}
                />
                <ButtonYellow
                  css={`
                    ${tw`m-2`}
                  `}
                  onClick={() => push("/verkaufen")}
                >
                  {intl("MORE")}
                </ButtonYellow>
              </>
            )}
          </div>
          <div css={tw`p-4`}>
            <H2
              onClick={() => setCurrent(PageStates.SPREAD)}
              css={[current === PageStates.SPREAD && tw`text-pink-600`]}
            >
              {intl("SPREAD")}
            </H2>
            {current === PageStates.SPREAD && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      pageSections.find((s) => s.code === "verbreiten")?.content
                        .html ?? "",
                  }}
                />
                <ButtonPink css={tw`m-2`} onClick={() => push("/verbreiten")}>
                  {intl("MORE")}
                </ButtonPink>
              </>
            )}
          </div>
        </SplitSection.Main>
        <SplitSection.Side>
          {current === PageStates.SPREAD ? (
            <img src={spread?.picture[0].url} alt="Verbreiten" />
          ) : current === PageStates.BUY ? (
            <img src={buy?.picture[0].url} alt="Einkaufen" />
          ) : (
            <img src={sell?.picture[0].url} alt="Verkaufen" />
          )}
        </SplitSection.Side>
      </SplitSection.Section> */}
    </div>
  );
};
