import { AnchorPointer } from "@/components/@UI/AnchorPointer";
import { Section } from "@/components/@UI/Section";
import {
  dangerouslySetFormattedInnerHTML,
  H1,
  H2,
  H3,
} from "@/components/@UI/Texts";
import {
  PressDocument,
  PressQuery,
} from "@/components/CmsQueries/Press.cms.generated";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { useTranslations } from "@/hooks/useTranslations";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import Image from "next/legacy/image";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import styles from "@/components/Layout/Blog.module.css";
import classNames from "classnames";
import { CardTitle } from "@/components/@UI/CardWrapper";

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
          dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
            props.pages[0]?.content?.html ?? ""
          )}
        />
      </Section>
      <Section>
        <div className={`grid grid-cols-2 text-center md:grid-cols-3`}>
          {props.pressArticles?.length !== 0 && (
            <CardTitle
              onClick={() => {
                window.location.hash = "#announcements";
              }}
              title={intl("PRESS_ANNOUNCEMENTS")}
              color={"yellow"}
            />
          )}
          <CardTitle
            onClick={() => {
              window.location.hash = "#photos";
            }}
            title={intl("PRESS_PHOTOS")}
            color={"pink"}
          />
          <CardTitle
            onClick={() => {
              window.location.hash = "#report";
            }}
            title={intl("PRESS_REPORT")}
            color={"blue"}
          />
        </div>
      </Section>
      {props.pressArticles?.length !== 0 && (
        <Section>
          <AnchorPointer id="announcements" />
          <H2 className={`pb-4`}>{intl("PRESS_ANNOUNCEMENTS")}</H2>
          <div className={`grid grid-cols-2 gap-x-2 md:grid-cols-3`}>
            {props.pressArticles.map((article, k) => (
              <div key={`ar${k}`} className={`py-4`}>
                <H3>{article.title}</H3>
                <div
                  dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                    article.abstract?.html ?? ""
                  )}
                />
                <Link
                  legacyBehavior
                  href={`/presse/${article.slug}`}
                  passHref={true}
                >
                  <a>{intl("READ_MORE")}</a>
                </Link>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <AnchorPointer id="photos" />
        <H2 className={`pb-4`}>{intl("PRESS_PHOTOS")}</H2>
        <div className={`grid grid-cols-2 gap-x-2 md:grid-cols-3`}>
          {props.pressPhotos.map((pic, k) => (
            <div key={`ar${k}`} className={`py-4`}>
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
        <H2 className={`pb-4`}>{intl("PRESS_REPORT")}</H2>
        <div className={`grid grid-cols-2 gap-x-3 md:grid-cols-3`}>
          {props.pressReports.map((report, k) => (
            <div key={`ar${k}`} className={`py-4`}>
              <H3 className={classNames("pb-2 h-20", styles.description)}>
                {report.title}
              </H3>
              <Image
                src={report.photo?.url ?? ""}
                width={report.photo?.width ?? 0}
                height={report.photo?.height ?? 0}
                alt={"report"}
              />
              <div
                dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                  report.description?.html ?? ""
                )}
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
