import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from "styled-components/cssprop";
import tw from "twin.macro";

import { navigate, useTranslate } from "../@hooks/useTranslate";
import {
  BackgroundBlueWrapper,
  BackgroundPinkWrapper,
  BackgroundYellowWrapper,
} from "../@UI/BackgroundWrapper";
import { ButtonBlue, ButtonPink, ButtonYellow } from "../@UI/Buttons";
import { SplitSection } from "../@UI/Section";
import { H2, P } from "../@UI/Texts";

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
export const Goals: React.FC<{
  einkaufen: GatsbyTypes.HomeQuery["einkaufen"];
  verkaufen: GatsbyTypes.HomeQuery["verkaufen"];
  verbreiten: GatsbyTypes.HomeQuery["verbreiten"];
}> = ({ einkaufen, verkaufen, verbreiten }) => {
  const intl = useTranslate();
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
              {intl.formatMessage({ id: "BUY" })}
            </H2>
            {current === 1 && (
              <>
                <P
                  dangerouslySetInnerHTML={{
                    __html: einkaufen.edges[0].node.content ?? "",
                  }}
                />
                <ButtonBlue
                  css={`
                    ${tw`m-2`}
                  `}
                  onClick={() => navigate("/einkaufen")}
                >
                  {intl.formatMessage({ id: "MORE" })}
                </ButtonBlue>
              </>
            )}
          </div>
          <div css={tw`p-4`}>
            <H2
              onClick={() => setCurrent(2)}
              css={[current === 2 && tw`text-yellow-600`]}
            >
              {intl.formatMessage({ id: "SELL" })}
            </H2>
            {current === 2 && (
              <>
                <P
                  dangerouslySetInnerHTML={{
                    __html: verkaufen.edges[0].node.content ?? "",
                  }}
                />
                <ButtonYellow
                  css={`
                    ${tw`m-2`}
                  `}
                  onClick={() => navigate("/verkaufen")}
                >
                  {intl.formatMessage({ id: "MORE" })}
                </ButtonYellow>
              </>
            )}
          </div>
          <div css={tw`p-4`}>
            <H2
              onClick={() => setCurrent(3)}
              css={[current === 3 && tw`text-pink-600`]}
            >
              {intl.formatMessage({ id: "SPREAD" })}
            </H2>
            {current === 3 && (
              <>
                <P
                  dangerouslySetInnerHTML={{
                    __html: verbreiten.edges[0].node.content ?? "",
                  }}
                />
                <ButtonPink
                  css={tw`m-2`}
                  onClick={() => navigate("/verbreiten")}
                >
                  {intl.formatMessage({ id: "MORE" })}
                </ButtonPink>
              </>
            )}
          </div>
        </SplitSection.Main>
        <SplitSection.Side>
          {current === 2 ? (
            <img src="/images/Verbreiten_Small.svg" />
          ) : (
            <img src="/images/Verkaufen_Small.svg" />
          )}
        </SplitSection.Side>
      </SplitSection.Section>
    </BackgroundWrapper>
  );
};
