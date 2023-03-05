import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BrandColors, CardWrapper, getTextColor } from "./CardWrapper";
import { Flex } from "./Flex";
import { H2 } from "./Texts";

export const CardMember: React.FC<
  React.PropsWithChildren<{
    title: string;
    linkTitle: string;
    href: string;
    message?: string;
    color: BrandColors;
  }>
> = ({ title, message, href, linkTitle, color, children }) => {
  const router = useRouter();
  return (
    <CardWrapper
      color={color}
      onClick={(e) => {
        router.push(href);
      }}
    >
      {children}
      <div className="p-4">
        <H2>{title}</H2>
        {message && <p className="mt-2 mb-8 text-gray-500">{message}</p>}
      </div>
      <Flex
        justify="end"
        direction="column"
        grow={1}
        className={classNames("m-2", getTextColor(color))}
      >
        {href && <Link href={href ?? ""}>{linkTitle}</Link>}
      </Flex>
    </CardWrapper>
  );
};
