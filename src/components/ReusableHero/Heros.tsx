import { Card } from "@/components/@UI/Card";
import { Grid } from "@/components/@UI/Grid";
import { Section } from "@/components/@UI/Section";
import Link from "next/link";
import React from "react";
import { ReusableHeroQuery } from "../CmsQueries/ReusableHero.cms.generated";

export const Heros: React.FC<{
  reusableHeros: ReusableHeroQuery["reusableHeros"];
}> = ({ reusableHeros }) => {
  return (
    <Section>
      <Grid>
        {reusableHeros.map((item, k) => (
          <Link
            legacyBehavior
            key={`mem${k}`}
            href={`/seimehrwegheldin/${item.slug}`}
            passHref={true}
          >
            <Card
              key={k}
              title={item.name ?? ""}
              message={item.abstract ?? ""}
              color={k % 3 === 0 ? "blue" : k % 3 === 1 ? "yellow" : "pink"}
              linkTitle={`Lerne ${item.name} kennen...`}
              linkTo={`/seimehrwegheldin/${item.slug}`}
              img={item?.picture?.url ?? null}
            />
          </Link>
        ))}
      </Grid>
    </Section>
  );
};
