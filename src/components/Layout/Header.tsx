import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import tw from "twin.macro";

import { Link, changeLocale, useTranslate } from "../@hooks/useTranslate";
import { ButtonPink } from "../@UI/Buttons";
import { DropDown, DropDownItem } from "../@UI/DropDown";
import { items } from "./MenuItems";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const intl = useTranslate();
  return (
    <header
      style={{ zIndex: 9999999 }}
      css={tw`py-2 bg-white h-16 md:h-20 fixed  z-10 inset-x-0 top-0`}
    >
      <div
        css={tw`bg-white items-start md:items-center max-w-screen-lg mx-auto flex justify-between`}
      >
        {!isOpen && (
          <picture>
            <img
              css={tw`mx-2 h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-solid border-gray-300`}
              src="/images/logo_header.webp"
            />
          </picture>
        )}

        <nav
          css={[
            tw`w-full px-4 md:px-0 flex-grow md:flex md:items-center md:w-auto md:flex pt-6 md:pt-0 overflow-y-visible max-h-screen md:max-h-full h-screen md:h-full overflow-y-scroll`,
            !isOpen && tw`hidden`,
            `-webkit-overflow-scrolling:touch;`,
          ]}
        >
          {items.map((item, k) => (
            <Link
              css={tw`m-4`}
              key={k}
              to={item.href}
              activeStyle={{
                textDecoration: "underline",
              }}
            >
              <p
                css={tw`text-3xl font-lemonism mx-0 sm:mx-2 my-2 border-b-2 border-transparent py-1 sm:p-0`}
              >
                {intl.formatMessage({ id: item.label })}
              </p>
            </Link>
          ))}
        </nav>

        <div css={tw`flex flex-row `}>
          <div
            css={tw` md:hidden inline-flex items-center`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu size={"1.6em"} />
          </div>
          <ButtonPink css={tw`mx-2`}>{"Spenden"}</ButtonPink>
          <DropDown>
            <DropDownItem text="Deutsch" onClick={() => changeLocale("de")} />
            <DropDownItem text="English" onClick={() => changeLocale("en")} />
          </DropDown>
        </div>
      </div>
    </header>
  );
};
