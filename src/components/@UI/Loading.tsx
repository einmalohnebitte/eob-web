import styles from "./Loading.module.scss";
export const Loading: React.FC = () => {
  return (
    <div className={`${styles.Spinner} my-8`}>
      <div></div>
      <div></div>
    </div>
  );
};
