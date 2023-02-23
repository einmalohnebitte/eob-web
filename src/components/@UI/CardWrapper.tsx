import classNames from "classnames";
import React, { useState } from "react";
import Image from "next/image";
import { dangerouslySetFormattedInnerHTML, H2 } from "./Texts";

export type BrandColors = "pink" | "blue" | "yellow";

export const getBorderColor = (color?: BrandColors): string =>
  color === "blue"
    ? `border-blue-500`
    : color === "pink"
    ? `border-pink-500`
    : `border-yellow-600`;

export const getTextColor = (color?: BrandColors): string =>
  color === "blue"
    ? `text-blue-500`
    : color === "pink"
    ? `text-pink-500`
    : `text-yellow-600`;

export const CardWrapper: React.FC<
  React.PropsWithChildren<{
    color?: BrandColors;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    className?: string;
  }>
> = ({ color, children, onClick, className }) => {
  const [stateColor] = useState(() => {
    if (!color) {
      const index = Math.round(Math.random() * 100) % 3;
      color = index === 0 ? "blue" : index === 1 ? "pink" : "yellow";
    }
    return color;
  });

  return (
    <div
      role="presentation"
      onClick={onClick}
      className={classNames(
        "flex flex-col content-between cursor-pointer transform scale-100 sm:hover:scale-105 sm:max-w-md mx-auto bg-white border-l-4 border-b-8 border-r-4 border-t-2  mb-4 overflow-hidden sm:m-4  ",
        getBorderColor(stateColor),
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{
  color?: BrandColors;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  title: string;
  message?: string;
  messageHtml?: string;
  subtitle?: string;
}> = ({ color, onClick, className, title, message, messageHtml, subtitle }) => {
  return (
    <CardWrapper
      className={classNames("p-4", className)}
      color={color}
      onClick={onClick}
    >
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
      {subtitle && <i>{subtitle}</i>}
    </CardWrapper>
  );
};

export const CardImage: React.FC<{
  title: string;
  src: string;
  width?: number;
  height?: number;
}> = ({ title, src, width, height }) => {
  return (
    <CardWrapper>
      <Image
        alt={title}
        src={src}
        width={width ?? 300}
        height={height ?? 300}
      />
      <H2 className="p-4">{title}</H2>
    </CardWrapper>
  );
};
