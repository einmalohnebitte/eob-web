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
      className="fixed inset-x-0 top-0 z-10 py-2 h-auto bg-white"
    >
      <div className="flex justify-between items-start md:items-center mx-auto max-w-screen-lg bg-white">
        {!isOpen && (
          <Link href={"/"}>
            <picture>
              <Image
                className="mx-2 w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-gray-300 border-solid cursor-pointer"
                src="/images/logo_start.webp"
                width="64"
                height="64"
                alt="logo"
              />
            </picture>
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
            <Link key={k} href={item.href}>
              <a
                className={classNames(
                  `m-4`,
                  asPath === item.href && `underline`
                )}
              >
                <p className="sm:p-0 py-1 my-2 mx-0 sm:mx-2 font-lemonism text-2xl border-b-2 border-transparent">
                  {intl(item.label)}
                </p>
              </a>
            </Link>
          ))}
        </nav>

        <div className="flex flex-row ">
          <div
            className="inline-flex md:hidden items-center"
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
