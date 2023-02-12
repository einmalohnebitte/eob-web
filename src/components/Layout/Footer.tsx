import { Section } from "@/components/@UI/Section";
import { H3 } from "@/components/@UI/Texts";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import styled from "styled-components";

import { COLORS } from "../../constants/colors";

const HearthStyle = styled.span`
  color: ${COLORS.RED};
`;

const FooterSecion = styled.div`
  flex: 1 1 0px;
`;

export const AppFooter = () => {
  const intl = useTranslations();
  return (
    <footer className="p-4 pt-10 leading-10 bg-gray-100 ">
      <Section className="flex flex-col md:flex-row justify-between">
        <FooterSecion className="flex flex-col items-center my-4 md:my-0 text-center">
          <picture>
            <Image
              className="w-32 h-32 rounded-full border-2 border-gray-300 border-solid cursor-pointer"
              src="/images/logo_start.webp"
              width="128"
              height="128"
              alt="logo"
            />
          </picture>
          <p
            className="m-4 text-base"
            dangerouslySetInnerHTML={{
              __html: intl("FOOTER_LINE_2"),
            }}
          />
          <div className="text-center">
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
              href="https://www.instagram.com/einmal.ohne.bitte/"
              className="ml-4"
            >
              <GrInstagram style={{ display: "inline-block" }} size={30} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/einmal-ohne-bitte/"
              className="ml-4"
            >
              <GrLinkedin style={{ display: "inline-block" }} size={30} />
            </a>
          </div>
        </FooterSecion>
        <FooterSecion>
          <H3 className="pb-2">{intl("FOOTER_ABOUT")}</H3>
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
          <H3 className="pb-2">{intl("FOOTER_INFO")}</H3>
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
            <Link href="/presse">
              <a>{intl("FOOTER_PRESS")}</a>
            </Link>
          </p>
        </FooterSecion>
        <FooterSecion className="flex-1 my-4 md:my-0">
          <H3 className="pb-2">{intl("FOOTER_PARTNER")}</H3>
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

      <hr className="m-4 border-gray-300 border-solid" />
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-lg">
          <Link href="/impressum">
            <a>{intl("FOOTER_IMPRESSUM")}</a>
          </Link>{" "}
          <Link href="/datenschutzerklarung">
            <a>{intl("FOOTER_DATA")}</a>
          </Link>{" "}
        </p>
        <p className="mr-8 text-lg text-right">
          Made with <HearthStyle>♥</HearthStyle> in Munich by{" "}
          <a rel="noopener" href="https://rehab-republic.de/">
            rehab republic
          </a>
        </p>
      </div>
    </footer>
  );
};
