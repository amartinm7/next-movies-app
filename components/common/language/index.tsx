import { Button, Modal, Row, Text } from "@nextui-org/react";
import React, { useState } from "react";
import styles from "./index.module.scss";

const EchLanguage = () => {
  // const { language, setLanguage } = useState("es-ES");

  return (
    <div className="container">
      <ul>
        <li>
          <i className="ech-lang-globe-icon" />
        </li>
        <li>
          <i className={styles["ech-lang-globe-icon"]} />
        </li>
        <li>
          <i className={styles["ech-lang-globe-icon"]} />
        </li>
        <li>
          <i className={styles["ech-lang-globe-icon"]} />
        </li>
      </ul>
    </div>
  );
};

interface EchLanguageModalProps {
  title: string;
  children?: React.ReactNode;
}

const EchLanguageModal = ({ title, children }: EchLanguageModalProps) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <Button flat auto rounded color="secondary" onClick={handler} animated>
        {children}
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="auto"
        css={{ "max-width": "550px" }}
        autoMargin
        animated
      >
        <Modal.Header autoMargin>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              {title}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body autoMargin>
          <Row justify="space-between">{children}</Row>
        </Modal.Body>
        {/*<Modal.Footer autoMargin>*/}
        {/*  <Button auto flat color="error" onClick={closeHandler}>*/}
        {/*    Close*/}
        {/*  </Button>*/}
        {/*  <Button auto onClick={closeHandler}>*/}
        {/*    Sign in*/}
        {/*  </Button>*/}
        {/*</Modal.Footer>*/}
      </Modal>
    </>
  );
};

export default EchLanguage;
