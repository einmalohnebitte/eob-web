import classnames from "classnames";
import React from "react";

export const H1Class = "font-lemonism text-5xl leading-10 pt-2  ";
export const H2Class = "font-lemonism text-4.5xl leading-10 ";
export const H3Class = "font-lemonism text-4xl leading-10  ";

export const H1: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => (
  <h1 className={classnames(H1Class, className)} {...props}>
    {children}
  </h1>
);

export const H2: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => (
  <h2 className={classnames(H2Class, className)} {...props}>
    {children}
  </h2>
);
export const H3: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => (
  <h3 className={classnames(H3Class, className)} {...props}>
    {children}
  </h3>
);

export const PFont = `text-xl leading-8 font-gt`;

export type ExtraClass = Record<"h1" | "h2" | "h3" | "p" | "ul" | "ol", string>;

export const dangerouslySetFormattedInnerHTML = (
  html: string,
  extraClasses?: ExtraClass
) => {
  return {
    __html: html
      .replace(/<h1/g, `<h1 class='${H1Class} ${extraClasses?.h1 ?? ""}'`)
      .replace(/<h2/g, `<h2 class='${H2Class} ${extraClasses?.h2 ?? ""}'`)
      .replace(/<h3/g, `<h3 class='${H3Class} ${extraClasses?.h3 ?? ""}'`)
      .replace(/<p/g, `<p class='${PFont} ${extraClasses?.p ?? ""}'`)
      .replace(/<ul/g, `<ul class='list-disc ${extraClasses?.ul ?? ""}'`)
      .replace(/<ol/g, `<ol class='list-decimal ${extraClasses?.ol ?? ""}'`),
  };
};
