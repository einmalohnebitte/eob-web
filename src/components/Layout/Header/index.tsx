import { COLORS } from "@/constants/colors";
import { Box, Heading } from "grommet";
import { Language, Menu as MenuIco } from "grommet-icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslations } from "src/Translations/useTranslations";

import {
  DropDownMenuStyle,
  HeaderLogo,
  HeaderStyle,
  LinkStyled,
  MenuStyle,
  NavStyle,
} from "./index.css";
import { items } from "./MenuItems";

export const TopHeader: React.FC<{
  background: "transparent" | "brand";
}> = ({ background }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [heroScrolled, setHeroScrolled] = useState(false);

  const { pathname, asPath, push } = useRouter();
  const intl = useTranslations();

  useEffect(() => {
    const listener = (): void => {
      if (window.scrollY >= 10) {
        window.requestAnimationFrame(() => {
          setHeroScrolled(true);
        });
      } else {
        window.requestAnimationFrame(() => {
          setHeroScrolled(false);
        });
      }
    };

    if (location.pathname === "/en/" || location.pathname === "/de/") {
      window.addEventListener("scroll", listener);
    }

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  background = heroScrolled ? "brand" : background;

  return (
    <HeaderStyle pad="small" background={background}>
      <Box direction="row">
        <HeaderLogo background={background}>
          {/* <source srcSet="/images/logo_header.webp" type="image/webp" /> */}
          <img src="/images/logo.svg" alt="logo" />
        </HeaderLogo>

        <NavStyle isOpen={isOpen}>
          {items.map((item, k) => (
            <LinkStyled
              isActive={asPath === item.href}
              key={k}
              href={item.href}
              background={background}
            >
              <Heading
                level="3"
                margin={{ horizontal: "medium", vertical: "0" }}
              >
                {intl(item.label)}
              </Heading>
            </LinkStyled>
          ))}
        </NavStyle>
      </Box>
      <Box pad="small" direction="row">
        <MenuStyle onClick={() => setIsOpen(!isOpen)}>
          <MenuIco
            color={background === "brand" ? COLORS.BRAND : COLORS.WHITE}
          />
        </MenuStyle>
        <DropDownMenuStyle
          color={background === "brand" ? COLORS.BRAND : COLORS.WHITE}
          icon={<Language />}
          items={[
            {
              label: "Deutsch",
              onClick: () => push(pathname, asPath, { locale: "de" }),
            },
            {
              label: "English",
              onClick: () => push(pathname, asPath, { locale: "en" }),
            },
          ]}
        ></DropDownMenuStyle>
      </Box>
    </HeaderStyle>
  );
};
