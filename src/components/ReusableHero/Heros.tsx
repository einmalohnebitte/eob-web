import { Card } from "@/components/@UI/Card";
import { Grid } from "@/components/@UI/Grid";
import { Section } from "@/components/@UI/Section";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ReusableHeroQuery } from "../CmsQueries/ReusableHero.cms.generated";
import userPlaceholder from "../AboutUs/user.jpg";

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
              href={`/seimehrwegheldin/${item.slug}`}
            >
              <Image
                alt={item.name ?? ""}
                src={item?.picture?.url ?? userPlaceholder}
                height={400}
                width={480}
                className="object-cover"
              />
            </Card>
          </Link>
        ))}
      </Grid>
    </Section>
  );
};
