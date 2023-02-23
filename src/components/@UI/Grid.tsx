import classNames from "classnames";
import styles from "./Grid.module.css";

export const Grid: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <div
    className={classNames(styles.Grid, "justify-items-center", className)}
    {...props}
  >
    {children}
  </div>
);
