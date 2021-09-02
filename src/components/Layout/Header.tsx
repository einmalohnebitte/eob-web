import { ButtonPink } from "@/components/@UI/Buttons";
import { DropDown, DropDownItem } from "@/components/@UI/DropDown";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import tw from "twin.macro";

import { items } from "./MenuItems";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname, asPath, push } = useRouter();
  const intl = useTranslations();
  return (
    <header
      style={{ zIndex: 9999999 }}
      css={tw`py-2 bg-white h-16 md:h-20 fixed  z-10 inset-x-0 top-0`}
    >
      <div
        css={tw`bg-white items-start md:items-center max-w-screen-lg mx-auto flex justify-between`}
      >
        {!isOpen && (
          <Link href={"/"}>
            <picture>
              <Image
                css={tw`cursor-pointer mx-2 h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-solid border-gray-300`}
                src="/images/logo_start.webp"
                width="64"
                height="64"
                alt="logo"
              />
            </picture>
          </Link>
        )}

        <nav
          css={[
            tw`w-full px-4 md:px-0 flex-grow md:flex md:items-center md:w-auto md:flex pt-6 md:pt-0 overflow-y-visible max-h-screen md:max-h-full h-screen md:h-full overflow-y-scroll`,
            !isOpen && tw`hidden`,
            `-webkit-overflow-scrolling:touch;`,
          ]}
        >
          {items.map((item, k) => (
            <Link key={k} href={item.href}>
              <a css={[tw`m-4`, asPath === item.href && tw`underline`]}>
                <p
                  css={tw`text-2xl font-lemonism mx-0 sm:mx-2 my-2 border-b-2 border-transparent py-1 sm:p-0`}
                >
                  {intl(item.label)}
                </p>
              </a>
            </Link>
          ))}
        </nav>

        <div css={tw`flex flex-row `}>
          <div
            css={tw` md:hidden inline-flex items-center`}
            onClick={() => setIsOpen(!isOpen)}
            role="presentation"
          >
            <MdMenu size={"1.6em"} />
          </div>
          <ButtonPink
            css={tw`mx-2`}
            onClick={() => {
              push("/spenden");
            }}
          >
            {intl("Donate")}
          </ButtonPink>
          <DropDown>
            <DropDownItem
              text="Deutsch"
              onClick={() => push(pathname, asPath, { locale: "de" })}
            />
            <DropDownItem
              text="English"
              onClick={() => push(pathname, asPath, { locale: "en" })}
            />
          </DropDown>
        </div>
      </div>
    </header>
  );
};
