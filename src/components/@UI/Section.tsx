import classNames from "classnames";
import React from "react";
import styles from "./Section.module.scss";

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <section
    className={classNames(
      styles.Section,
      "p-1 mt-5 md:p-8 max-w-screen-lg mx-auto",
      className
    )}
    {...props}
  >
    {children}
  </section>
);

const SectionMain: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
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

const Div: (
  className: string
) => React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> =
  (className: string) =>
  // eslint-disable-next-line react/display-name
  ({ children, className: _, ...props }) =>
    (
      <div className={classNames(className)} {...props}>
        {children}
      </div>
    );

export const SplitSection = {
  Section: SectionMain,
  Main: Div(styles.Main),
  Side: Div(styles.Side),
};
