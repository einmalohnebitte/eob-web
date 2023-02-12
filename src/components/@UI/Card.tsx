import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { dangerouslySetFormattedInnerHTML, H2 } from "./Texts";

export const getBorderColor = (color?: "pink" | "blue" | "yellow"): string =>
  color === "blue"
    ? `border-blue-500`
    : color === "pink"
    ? `border-pink-500`
    : `border-yellow-600`;

export const getTextColor = (color?: "pink" | "blue" | "yellow"): string =>
  color === "blue"
    ? `text-blue-500`
    : color === "pink"
    ? `text-pink-500`
    : `text-yellow-600`;

export const Card: React.FC<{
  img?: string;
  title: string;
  linkTitle?: string;
  linkTo?: string;
  message?: string;
  messageHtml?: string;
  resize?: boolean;
  color?: "pink" | "blue" | "yellow";
  onClick?: (event: any) => void;
  subtitle?: string;
}> = ({
  img,
  title,
  message,
  linkTo,
  linkTitle,
  color,
  resize,
  onClick,
  messageHtml,
  subtitle,
  children,
}) => {
  if (!color) {
    const index = Math.round(Math.random() * 100) % 3;
    // eslint-disable-next-line no-nested-ternary
    color = index === 0 ? "blue" : index === 1 ? "pink" : "yellow";
  }
  const router = useRouter();
  return (
    <div
      role="presentation"
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else if (linkTo) {
          router.push(linkTo);
        }
      }}
      className={classNames(
        "flex flex-col content-between cursor-pointer transform scale-100 sm:hover:scale-105 sm:max-w-md mx-auto bg-white border-l-4  border-b-8 border-r-4 border-t-2  mb-4 overflow-hidden sm:m-4  ",
        getBorderColor(color)
      )}
    >
      {children}
      {img && (
        <img
          className={classNames("h-52", !resize && "w-full object-cover")}
          src={img}
          alt=""
        />
      )}
      <div className="p-4">
        <H2>{title}</H2>
        {message && <p className="mt-2 mb-8 text-gray-500">{message}</p>}
        {messageHtml && (
          <div
            className="mt-2 text-gray-500"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              messageHtml
            )}
          />
        )}
      </div>
      <div
        className={classNames(
          "flex-grow flex justify-end flex-col m-2",
          getTextColor(color)
        )}
      >
        {linkTo && (
          <Link href={linkTo ?? ""}>
            <a className="hover:underline">{linkTitle}</a>
          </Link>
        )}
        {subtitle && <i>{subtitle}</i>}
      </div>
    </div>
  );
};
