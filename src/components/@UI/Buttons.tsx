/* eslint-disable no-nested-ternary */
import classNames from "classnames";

export type Colors = "pink" | "yellow" | "blue";

export const ButtonNoColor =
  "text-xl  font-lemonism tracking-wider py-2 px-6 rounded focus:outline-none";

export const Pink = `text-white bg-pink-600 hover:bg-pink-700`;
export const PinkInverted = `bg-white text-pink-600 border-solid  border-2 border-pink-600 hover:text-pink-700`;

export const Yellow = `text-white bg-yellow-600 hover:bg-yellow-700`;
export const YellowInverted = `bg-white text-yellow-600 border-solid  border-2 border-yellow-600 hover:text-yellow-700`;

export const Blue = `text-white bg-blue-500 hover:bg-blue-700`;
export const BlueInverted = `bg-white text-blue-600 border-solid  border-2 border-blue-600 hover:text-blue-700`;

export const ButtonColor: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { color: Colors }
> = ({ color, className, children, ...props }) => (
  <button
    className={classNames(
      "text-white",
      ButtonNoColor,
      color === "blue" && Blue,
      color === "pink" && Pink,
      color === "yellow" && Yellow,
      className
    )}
    {...props}
  >
    {children}
  </button>
);
