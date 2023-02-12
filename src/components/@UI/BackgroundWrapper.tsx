/* eslint-disable react/display-name */
import classNames from "classnames";
import React from "react";

export const BackgroundWrapper = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > & { color?: "blue" | "pink" | "yellow"; vibrantColor?: string }
>(({ children, className, color, vibrantColor, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(
      className,
      color === "blue" && "bg-gradient-to-b from-blue-200 to-white",
      color === "pink" && "bg-gradient-to-b from-pink-200 to-white",
      color === "yellow" && "bg-gradient-to-b from-yellow-200 to-white"
    )}
    {...props}
    style={
      vibrantColor
        ? { backgroundImage: `linear-gradient(${vibrantColor}, white)` }
        : {}
    }
  >
    {children}
  </div>
));
