/* eslint-disable react/display-name */
import React from "react";

export const BackgroundBlueWrapper = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  >
>(({ children }, ref) => (
  <div ref={ref} className="bg-gradient-to-b from-blue-200 to-white">
    {children}
  </div>
));

export const BackgroundPinkWrapper = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  >
>(({ children }, ref) => (
  <div ref={ref} className="bg-gradient-to-b from-pink-200 to-white">
    {children}
  </div>
));

export const BackgroundYellowWrapper = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  >
>(({ children }, ref) => (
  <div ref={ref} className="bg-gradient-to-b from-yellow-200 to-white">
    {children}
  </div>
));
