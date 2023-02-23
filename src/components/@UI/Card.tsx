import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CardWrapper, getTextColor } from "./CardWrapper";
import { H2 } from "./Texts";

export const Card: React.FC<
  React.PropsWithChildren<{
    title: string;
    linkTitle: string;
    href: string;
    message?: string;
    color: "pink" | "blue" | "yellow";
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
      <div
        className={classNames(
          "flex-grow flex justify-end flex-col m-2",
          getTextColor(color)
        )}
      >
        {href && <Link href={href ?? ""}>{linkTitle}</Link>}
      </div>
    </CardWrapper>
  );
};
