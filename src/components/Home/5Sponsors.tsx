import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import tw from "twin.macro";

import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";

const SponsorCard: React.FC<{
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
}> = ({ fluid }) =>
  fluid ? (
    <div
      css={`
        width: 10rem;
        height: 10rem;
        ${tw`shadow-xl rounded-lg p-2 m-2 flex-shrink-0`}
        div {
          top: 50%;
          transform: translateY(-50%);
        }
      `}
    >
      <Img fluid={fluid} />
    </div>
  ) : null;

export const Sponsors: React.FC = () => {
  const { sponsors } = useStaticQuery<GatsbyTypes.getSponsorsQuery>(
    graphql`
      query getSponsors {
        sponsors: allFile(filter: { relativePath: { glob: "sponsors/*" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 125) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `
  );

  return (
    <div>
      <Section css={tw` text-center`}>
        <H2>USERE FORDERER</H2>
        <div css={tw`px-2 py-6  flex overflow-x-auto`}>
          {sponsors.nodes.map((file, k) => (
            <SponsorCard key={k} fluid={file.childImageSharp?.fluid} />
          ))}
        </div>
      </Section>
    </div>
  );
};
