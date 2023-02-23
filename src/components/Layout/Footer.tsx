import { Section } from "@/components/@UI/Section";
import { H3 } from "@/components/@UI/Texts";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";

export const AppFooter = () => {
  const intl = useTranslations();
  return (
    <footer className="bg-gray-100 p-4 pt-10 leading-10 ">
      <Section className="flex flex-col justify-between md:flex-row">
        <div className="my-4 flex flex-1 flex-col items-center text-center md:my-0">
          <picture>
            <Image
              className="h-32 w-32 cursor-pointer rounded-full border-2 border-solid border-gray-300"
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
        </div>
        <div className="flex-1">
          <H3 className="pb-2">{intl("FOOTER_ABOUT")}</H3>
          <p>
            <Link legacyBehavior href="/uber-uns#mission">
              <a>{intl("FOOTER_MISSION_VISION")}</a>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/uber-uns#team">
              <a>{intl("FOOTER_ABOUT_TEAM")}</a>
            </Link>
          </p>

          <p>
            <Link legacyBehavior href="/kontakt">
              <a>{intl("KONTAKT")}</a>
            </Link>
          </p>
        </div>
        <div className="flex-1">
          <H3 className="pb-2">{intl("FOOTER_INFO")}</H3>
          <p>
            <Link legacyBehavior href="/blog">
              <a>{intl("Blog")}</a>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/faq">
              <a>{intl("FAQ")}</a>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/newsletter">
              <a>{intl("NEWSLETTER")}</a>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/download">
              <a>{intl("DOWNLOAD")}</a>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/presse">
              <a>{intl("FOOTER_PRESS")}</a>
            </Link>
          </p>
          {/* <p>
            <Link legacyBehavior href="/seimehrwegheldin">
              <a>{intl("FOOTER_REUSABLE_HERO")}</a>
            </Link>
          </p> */}
        </div>
        <div className="my-4 flex-1 md:my-0">
          <H3 className="pb-2">{intl("FOOTER_PARTNER")}</H3>
          <p>
            <Link legacyBehavior href="/verkaufen">
              <a>{intl("FOOTER_PARTNER1")}</a>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/verkaufen">
              <a>{intl("FOOTER_PARTNER2")}</a>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/verkaufen">
              <a>{intl("FOOTER_PARTNER3")}</a>
            </Link>
          </p>
        </div>
      </Section>

      <hr className="m-4 border-solid border-gray-300" />
      <div className="flex flex-col justify-between md:flex-row">
        <p className="text-lg">
          <Link legacyBehavior href="/impressum">
            <a>{intl("FOOTER_IMPRESSUM")}</a>
          </Link>{" "}
          <Link legacyBehavior href="/datenschutzerklarung">
            <a>{intl("FOOTER_DATA")}</a>
          </Link>{" "}
        </p>
        <p className="mr-8 text-right text-lg">
          Made with <span className="text-red-700">♥</span> in Munich by{" "}
          <a rel="noopener" href="https://rehab-republic.de/">
            rehab republic
          </a>
        </p>
      </div>
    </footer>
  );
};
