import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import tw from "twin.macro";

import { useTranslate } from "../@hooks/useTranslate";
import { Section } from "../@UI/Section";
import { H1, P } from "../@UI/Texts";

const HeroImg: React.FC<{
  is2Col?: boolean;
  is2Row?: boolean;
  fluid?: Pick<
    GatsbyTypes.ImageSharpFluid,
    | "base64"
    | "aspectRatio"
    | "src"
    | "srcSet"
    | "srcWebp"
    | "srcSetWebp"
    | "sizes"
  > | null;
}> = ({ fluid, is2Row, is2Col }) => (
  <div
    css={`
      div {
        height: 100%;
      }
      ${is2Row && tw`row-span-2`}
      ${is2Col && tw`col-span-2`}
    `}
  >
    {fluid && <Img css={tw`rounded-lg`} fluid={fluid} />}
  </div>
);

export const Hero: React.FC<{
  shops: GatsbyTypes.HomeQuery["allShop"]["edges"];
  aims: GatsbyTypes.HomeQuery["aims"];
}> = ({ shops, aims }) => {
  const intl = useTranslate();
  const { heros } = useStaticQuery<GatsbyTypes.getHerosQuery>(
    graphql`
      query getHeros {
        heros: allFile(filter: { relativePath: { glob: "hero/*" } }) {
          nodes {
            relativePath
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `
  );

  const getByName = (match: string) =>
    heros.nodes.find((f) => new RegExp(match, "i").test(f.relativePath));

  return (
    <div>
      <Section>
        <H1>{intl.formatMessage({ id: "HERO_TITLE" })}</H1>
        <P css={tw`py-4`}> {intl.formatMessage({ id: "HERO_SUB_1" })}</P>
        <P>
          {intl.formatMessage({ id: "HERO_SUB_2" }, { shops: shops.length })}
        </P>
      </Section>
      <div css={tw`overflow-x-scroll`}>
        <div
          css={`
            min-width: 1020px;
            ${tw`gap-4 grid grid-flow-col grid-cols-9 grid-rows-2`}
          `}
        >
          <HeroImg fluid={getByName("bild6")?.childImageSharp?.fluid} />
          <HeroImg fluid={getByName("bild13")?.childImageSharp?.fluid} />
          <HeroImg
            fluid={getByName("bild7")?.childImageSharp?.fluid}
            is2Row={true}
          />
          <HeroImg
            fluid={getByName("bild4")?.childImageSharp?.fluid}
            is2Row={true}
            is2Col={true}
          />

          <HeroImg fluid={getByName("bild1 ")?.childImageSharp?.fluid} />
          <HeroImg fluid={getByName("bild3")?.childImageSharp?.fluid} />

          <HeroImg
            fluid={getByName("bild2")?.childImageSharp?.fluid}
            is2Row={true}
          />
          <HeroImg
            fluid={getByName("bild11")?.childImageSharp?.fluid}
            is2Row={true}
            is2Col={true}
          />

          <HeroImg fluid={getByName("bild8")?.childImageSharp?.fluid} />
          <HeroImg fluid={getByName("bild10")?.childImageSharp?.fluid} />
        </div>
      </div>

      <Section>
        <P
          dangerouslySetInnerHTML={{
            __html: aims.edges[0].node.content ?? "",
          }}
        />
      </Section>
    </div>
  );
};
