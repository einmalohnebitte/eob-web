import classNames from "classnames";
import styles from "./Grid.module.css";

export const Grid: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <div className={classNames(styles.Grid, className)} {...props}>
    {children}
  </div>
);
