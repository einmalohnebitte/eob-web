import { AnchorPointer } from "@/components/@UI/AnchorPointer";
import { Card } from "@/components/@UI/Card";
import { Section } from "@/components/@UI/Section";
import { H1, H2, H3 } from "@/components/@UI/Texts";
import {
  PressDocument,
  PressQuery,
} from "@/components/CmsQueries/Press.cms.generated";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { useTranslations } from "@/hooks/useTranslations";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import Image from "next/image";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PressDocument, {
    locale: contextToLocale(ctx),
  });
  return {
    props: data,
  };
};

const Page: React.FC<PressQuery> = (props) => {
  const intl = useTranslations();
  return (
    <>
      <HeadMeta
        metaDescription={props.pages[0]?.metaDescription}
        metaKeywords={props.pages[0]?.metaKeywords}
      />
      <Section>
        <H1>{props.pages[0].title}</H1>

        <div
          dangerouslySetInnerHTML={{
            __html: props.pages[0]?.content?.html ?? "",
          }}
        />
      </Section>
      <Section>
        <div css={tw`grid grid-cols-2 md:grid-cols-3 text-center`}>
          <Card
            onClick={() => {
              window.location.hash = "#announcements";
            }}
            title={intl("PRESS_ANNOUNCEMENTS")}
            color={"yellow"}
          />
          <Card
            onClick={() => {
              window.location.hash = "#photos";
            }}
            title={intl("PRESS_PHOTOS")}
            color={"pink"}
          />
          <Card
            onClick={() => {
              window.location.hash = "#report";
            }}
            title={intl("PRESS_REPORT")}
            color={"blue"}
          />
        </div>
      </Section>
      <Section>
        <AnchorPointer id="announcements" />
        <H2 css={tw`pb-4`}>{intl("PRESS_ANNOUNCEMENTS")}</H2>
        <div css={tw`grid grid-cols-2 md:grid-cols-3 col-gap-2`}>
          {props.pressArticles.map((article, k) => (
            <div key={`ar${k}`} css={tw`py-4`}>
              <H3>{article.title}</H3>
              <div
                dangerouslySetInnerHTML={{
                  __html: article.abstract?.html ?? "",
                }}
              />
              <Link href={`/presse/${article.slug}`} passHref={true}>
                <a>{intl("READ_MORE")}</a>
              </Link>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <AnchorPointer id="photos" />
        <H2 css={tw`pb-4`}>{intl("PRESS_PHOTOS")}</H2>
        <div css={tw`grid grid-cols-2 md:grid-cols-3 col-gap-2`}>
          {props.pressPhotos.map((pic, k) => (
            <div key={`ar${k}`} css={tw`py-4`}>
              <Image
                src={pic.photo?.url ?? ""}
                width={pic.photo?.width ?? 0}
                height={pic.photo?.height ?? 0}
                alt={pic.description ?? ""}
              />
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <AnchorPointer id="report" />
        <H2 css={tw`pb-4`}>{intl("PRESS_REPORT")}</H2>
        <div css={tw`grid grid-cols-2 md:grid-cols-3 col-gap-3`}>
          {props.pressReports.map((report, k) => (
            <div key={`ar${k}`} css={tw`py-4`}>
              <H3
                css={`
                  ${tw`pb-2 h-20`} display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  white-space: normal;
                `}
              >
                {report.title}
              </H3>
              <Image
                src={report.photo?.url ?? ""}
                width={report.photo?.width ?? 0}
                height={report.photo?.height ?? 0}
                alt={"report"}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: report.description?.html ?? "",
                }}
              />
              <a href={report.link ?? ""} target="_blank" rel="noreferrer">
                {intl("READ_MORE")}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default withLayout()(Page);
