import { Button } from "@/components/@UI/Buttons";
import { DropDown, DropDownItem } from "@/components/@UI/DropDown";
import { useTranslations } from "@/hooks/useTranslations";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import styles from "./Header.module.css";

import { items } from "./MenuItems";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname, asPath, push } = useRouter();
  const intl = useTranslations();
  return (
    <header
      style={{ zIndex: 9999999 }}
      className="fixed inset-x-0 top-0 z-10 h-auto bg-white py-2"
    >
      <div className="mx-auto flex max-w-screen-lg items-start justify-between bg-white md:items-center">
        {!isOpen && (
          <Link href={"/"}>
            <Image
              className="mx-2 h-12 w-12 cursor-pointer rounded-full border-2 border-solid border-gray-300 md:h-16 md:w-16"
              src="/images/logo_start.webp"
              width="64"
              height="64"
              alt="logo"
            />
          </Link>
        )}

        <nav
          className={classNames(
            "w-full px-4 md:px-0 flex-grow   md:items-center md:w-auto md:flex pt-6 md:pt-0 max-h-screen md:max-h-full h-screen md:h-full",
            !isOpen && `hidden`,
            styles.headerNav
          )}
        >
          {items.map((item, k) => (
            <Link
              key={k}
              href={item.href}
              className={classNames(`m-4`, asPath === item.href && `underline`)}
            >
              <p className="my-2 mx-0 border-b-2 border-transparent py-1 font-lemonism text-2xl sm:mx-2 sm:p-0">
                {intl(item.label)}
              </p>
            </Link>
          ))}
        </nav>

        <div className="flex flex-row ">
          <div
            className="inline-flex items-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            role="presentation"
          >
            <MdMenu size={"1.6em"} />
          </div>
          <Button
            color="pink"
            className="mx-2"
            onClick={() => {
              push("/spenden");
            }}
          >
            {intl("Donate")}
          </Button>
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
