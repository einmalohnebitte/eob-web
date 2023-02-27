import classNames from "classnames";
import React from "react";

export const SectionClass = "p-1 mt-5 md:p-8 max-w-screen-lg mx-auto";

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <section className={classNames(SectionClass, className)} {...props}>
    {children}
  </section>
);

export const SplitSectionClass = `${SectionClass} flex flex-col md:flex-row items-center gap-2 md:gap-6`;
