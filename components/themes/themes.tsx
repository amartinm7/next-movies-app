import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import styles from "./theme.module.css";

const Theme = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div className={styles["ech-topcorner"]}>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
};

export default Theme;
