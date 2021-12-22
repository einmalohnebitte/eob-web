import classNames from "classnames";
import React from "react";
import styled from "styled-components";

export const Section: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => (
  <section
    css={`
      font-size: 3rem;
      line-height: 3rem;
    `}
    className={classNames("p-1 mt-5 md:p-8 max-w-screen-lg mx-auto", className)}
    {...props}
  >
    {children}
  </section>
);

const SectionMain: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, ...props }) => (
  <Section
    className={classNames(
      "flex flex-col md:flex-row items-center",
      props.className
    )}
  >
    {children}
  </Section>
);

export const SplitSection = {
  Section: SectionMain,
  Main: styled.div`
    flex: 2;
  `,
  Side: styled.div`
    flex: 1;
  `,
};
