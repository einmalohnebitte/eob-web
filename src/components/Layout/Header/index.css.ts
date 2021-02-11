import { COLORS } from "@/constants/colors";
import {
  HEADER_HEIGHT,
  MQ_MOBILE,
  MQ_NOT_MOBILE,
} from "@/constants/MediaQueries";
import { Header, Menu } from "grommet";
import Link from "next/link";
import styled from "styled-components";

export const HeaderStyle = styled(Header)<{
  background: "transparent" | "brand";
}>`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: flex-start;

  background: ${({ background }) =>
    background === "brand" ? COLORS.WHITE : ""};

  z-index: 99999;
  border-bottom: solid 1px
    ${({ background }) =>
      background === "brand" ? COLORS.BRAND : COLORS.WHITE};
`;

export const LinkStyled = styled(Link)<{
  background: "transparent" | "brand";
  isActive: boolean;
}>`
  display: block;
  text-decoration: none;
  color: ${({ background, isActive }) =>
    background === "brand"
      ? isActive
        ? COLORS.BRAND
        : COLORS.ACTIVE
      : COLORS.WHITE};

  font-weight: 800;
  text-transform: uppercase;

  margin: 0 5px;

  :hover {
    text-decoration: none;
  }
  @media ${MQ_NOT_MOBILE} {
    margin: 10px;
  }

  @media ${MQ_NOT_MOBILE} {
    padding-bottom: 5px;
    position: relative;
  }
`;

export const MenuStyle = styled.div`
  display: none;
  @media ${MQ_MOBILE} {
    display: flex;
  }
`;

export const NavStyle = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  @media ${MQ_MOBILE} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
  }
`;

export const DropDownMenuStyle = styled(Menu)`
  div {
    padding: 0;
    margin-left: 10px;
    svg {
      stroke: ${({ color }) => color};
    }
  }
`;

export const HeaderLogo = styled.picture<{
  background: "transparent" | "brand";
}>`
  img {
    height: ${HEADER_HEIGHT - 24}px;
    border: solid 1px
      ${({ background }) =>
        background === "brand" ? COLORS.BRAND : COLORS.WHITE};
    border-radius: 30px;
  }
`;
