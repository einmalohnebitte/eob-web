import { HomePageQuery } from "@/components/Home/Home.generated";
import { useTranslations } from "@/translations";
import { useRouter } from "next/router";
import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from "styled-components/cssprop";
import tw from "twin.macro";

import {
  BackgroundBlueWrapper,
  BackgroundPinkWrapper,
  BackgroundYellowWrapper,
} from "../@UI/BackgroundWrapper";
import { ButtonBlue, ButtonPink, ButtonYellow } from "../@UI/Buttons";
import { SplitSection } from "../@UI/Section";
import { H2 } from "../@UI/Texts";

const BackgroundWrapper: React.FC<{ activeIndex: number }> = ({
  activeIndex,
  children,
}) =>
  // eslint-disable-next-line no-nested-ternary
  activeIndex === 2 ? (
    <BackgroundYellowWrapper>{children}</BackgroundYellowWrapper>
  ) : activeIndex === 3 ? (
    <BackgroundPinkWrapper>{children}</BackgroundPinkWrapper>
  ) : (
    <BackgroundBlueWrapper>{children}</BackgroundBlueWrapper>
  );
export const Goals: React.FC<HomePageQuery> = ({ pageSections }) => {
  const intl = useTranslations();
  const { push } = useRouter();
  const [current, setCurrent] = useState(1);

  return (
    <BackgroundWrapper activeIndex={current}>
      <SplitSection.Section>
        <SplitSection.Main>
          <div css={tw`p-4`}>
            <H2
              onClick={() => setCurrent(1)}
              css={[current === 1 && tw`text-blue-500`]}
            >
              {intl("BUY")}
            </H2>
            {current === 1 && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      pageSections.find((s) => s.code === "einkaufen")?.content
                        .html ?? "",
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
              onClick={() => setCurrent(2)}
              css={[current === 2 && tw`text-yellow-600`]}
            >
              {intl("SELL")}
            </H2>
            {current === 2 && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      pageSections.find((s) => s.code === "verkaufen")?.content
                        .html ?? "",
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
              onClick={() => setCurrent(3)}
              css={[current === 3 && tw`text-pink-600`]}
            >
              {intl("SPREAD")}
            </H2>
            {current === 3 && (
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
          {current === 2 ? (
            <img src="/images/Verbreiten_Small.svg" alt="Verbreiten_Small" />
          ) : (
            <img src="/images/Verkaufen_Small.svg" alt="Verbreiten_Small" />
          )}
        </SplitSection.Side>
      </SplitSection.Section>
    </BackgroundWrapper>
  );
};
