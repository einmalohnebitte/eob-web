import { Section } from "@/components/@UI/Section";
import { H3 } from "@/components/@UI/Texts";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import styled from "styled-components";
import tw from "twin.macro";

import { COLORS } from "../../constants/colors";

const HearthStyle = styled.span`
  color: ${COLORS.RED};
`;

const FooterSecion = styled.div`
  flex: 1 1 0px;
  ${tw`my-4 md:my-0`}
`;

export const AppFooter = () => {
  const intl = useTranslations();
  return (
    <footer css={tw`p-4 pt-10 leading-10 bg-gray-100 `}>
      <Section css={tw`flex flex-col justify-between md:flex-row `}>
        <FooterSecion css={tw`flex flex-col items-center text-center`}>
          <picture>
            <Image
              css={tw`w-32 h-32 border-2 border-gray-300 border-solid rounded-full cursor-pointer`}
              src="/images/logo_start.webp"
              width="128"
              height="128"
              alt="logo"
            />
          </picture>
          <p
            css={tw`m-4 text-base`}
            dangerouslySetInnerHTML={{
              __html: intl("FOOTER_LINE_2"),
            }}
          />
          <div css={tw`text-center`}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/einmalohnebitte/"
            >
              <GrFacebook style={{ display: "inline-block" }} size={30} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/einmalohnebitte/"
              css={tw`ml-4`}
            >
              <GrInstagram style={{ display: "inline-block" }} size={30} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/einmal-ohne-bitte/"
              css={tw`ml-4`}
            >
              <GrLinkedin style={{ display: "inline-block" }} size={30} />
            </a>
          </div>
        </FooterSecion>
        <FooterSecion>
          <H3 css={tw`pb-2`}>{intl("FOOTER_ABOUT")}</H3>
          <p>
            <Link href="/uber-uns#mission">
              <a>{intl("FOOTER_MISSION_VISION")}</a>
            </Link>
          </p>
          <p>
            <Link href="/uber-uns#team">
              <a>{intl("FOOTER_ABOUT_TEAM")}</a>
            </Link>
          </p>

          <p>
            <Link href="/kontakt">
              <a>{intl("KONTAKT")}</a>
            </Link>
          </p>
        </FooterSecion>
        <FooterSecion>
          <H3 css={tw`pb-2`}>{intl("FOOTER_INFO")}</H3>
          <p>
            <Link href="/blog">
              <a>{intl("Blog")}</a>
            </Link>
          </p>
          <p>
            <Link href="/faq">
              <a>{intl("FAQ")}</a>
            </Link>
          </p>
          <p>
            <Link href="/newsletter">
              <a>{intl("NEWSLETTER")}</a>
            </Link>
          </p>
          <p>
            <Link href="/download">
              <a>{intl("DOWNLOAD")}</a>
            </Link>
          </p>
          <p>
            <Link href="/press">
              <a>{intl("FOOTER_PRESS")}</a>
            </Link>
          </p>
        </FooterSecion>
        <FooterSecion
          css={`
            flex: 1 1 0px;
            ${tw`my-4 md:my-0`}
          `}
        >
          <H3 css={tw`pb-2`}>{intl("FOOTER_PARTNER")}</H3>
          <p>
            <Link href="/verkaufen">
              <a>{intl("FOOTER_PARTNER1")}</a>
            </Link>
          </p>
          <p>
            <Link href="/verkaufen">
              <a>{intl("FOOTER_PARTNER2")}</a>
            </Link>
          </p>
          <p>
            <Link href="/verkaufen">
              <a>{intl("FOOTER_PARTNER3")}</a>
            </Link>
          </p>
        </FooterSecion>
      </Section>

      <hr
        css={`
          ${tw`m-4 `}
          border: rgba(209,213,219) solid 1px;
        `}
      />
      <div css={tw`flex flex-col justify-between md:flex-row `}>
        <p css={tw`text-lg`}>
          <Link href="/impressum">
            <a>{intl("FOOTER_IMPRESSUM")}</a>
          </Link>{" "}
          <Link href="/datenschutzerklarung">
            <a>{intl("FOOTER_DATA")}</a>
          </Link>{" "}
        </p>
        <p css={tw`mr-8 text-lg text-right`}>
          Made with <HearthStyle>♥</HearthStyle> in Munich by{" "}
          <a rel="noopener" href="https://rehab-republic.de/">
            rehab republic
          </a>
        </p>
      </div>
    </footer>
  );
};
