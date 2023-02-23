import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CardWrapper, getTextColor } from "./CardWrapper";
import { dangerouslySetFormattedInnerHTML, H2 } from "./Texts";

export const Card: React.FC<
  React.PropsWithChildren<{
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
  }>
> = ({
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
  const router = useRouter();
  return (
    <CardWrapper
      color={color}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else if (linkTo) {
          router.push(linkTo);
        }
      }}
    >
      {children}
      {img && (
        // eslint-disable-next-line @next/next/no-img-element
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
          <Link legacyBehavior href={linkTo ?? ""}>
            <a className="hover:underline">{linkTitle}</a>
          </Link>
        )}
        {subtitle && <i>{subtitle}</i>}
      </div>
    </CardWrapper>
  );
};
