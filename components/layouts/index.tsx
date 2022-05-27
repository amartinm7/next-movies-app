import EchHeader from "@/components/common/header";
import EchFooter from "@/components/common/footer";
import styles from "./index.module.scss";
import { Spacer } from "@nextui-org/react";

interface EchMainLayout {
  children?: React.ReactNode;
}

const EchMainLayout = ({ children }: EchMainLayout) => {
  return (
    <>
      <div className={styles["container"]}>
        <EchHeader />
        <Spacer />
        <main>{children}</main>
        <EchFooter />
      </div>
    </>
  );
};

export default EchMainLayout;
