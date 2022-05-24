import { NextPage } from "next";
import styles from "./index.module.css";

// @ts-ignore
const EchGrid = ({ children }) => {
  return <section className={styles["ech-movies"]}>{children}</section>;
};

export default EchGrid;
