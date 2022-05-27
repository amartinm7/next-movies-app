import styles from "./index.module.scss";

// @ts-ignore
const EchGrid = ({ children }) => {
  return <section className={styles["ech-movies"]}>{children}</section>;
};

export default EchGrid;
