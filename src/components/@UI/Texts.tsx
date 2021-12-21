import React from "react";
import styled from "styled-components";

export const H1: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, ...props }) => (
  <h1
    className={`font-lemonism text-5xl leading-10 pt-2  ${
      props.className ?? ""
    }`}
    {...props}
  >
    {children}
  </h1>
);

export const H2: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, ...props }) => (
  <h2
    css={`
      font-size: 3rem;
      line-height: 3rem;
    `}
    className={`font-lemonism  ${props.className ?? ""}`}
    {...props}
  >
    {children}
  </h2>
);
export const H3: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, ...props }) => (
  <h3
    className={`font-lemonism text-4xl leading-10 ${props.className ?? ""}`}
    {...props}
  >
    {children}
  </h3>
);

export const PFont = `text-xl leading-8 font-gt`;
