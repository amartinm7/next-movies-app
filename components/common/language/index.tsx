import React, { useContext, useState } from "react";
import { EchLanguageContext } from "@/pages/_app";
import styles from "./index.module.scss";

const EchLanguage = () => {
  const [languages, setLanguages] = useState([
    "en-EN",
    "es-ES",
    "fr-FR",
    "de-DE",
  ]);
  // @ts-ignore
  const { languageSelected, setLanguageSelected } =
    useContext(EchLanguageContext);

  const toggleLanguage = (value: string) => {
    setLanguageSelected(value);
  };

  // @ts-ignore
  const getDivElement = ({ language }) => (
    <div key={language} onClick={toggleLanguage.bind(this, language)} />
  );

  // @ts-ignore
  const getLIElement = ({ language }) => (
    <li key={language} onClick={toggleLanguage.bind(this, language)}>
      <i className={styles[language]} />
    </li>
  );

  const getLIElements = () =>
    languages
      .filter((language) => language !== languageSelected)
      .map((language) => getLIElement({ language }));

  // @ts-ignore
  return (
    <div className="container">
      <div className={styles["lang"]}>
        {getDivElement({ language: languageSelected })}
        <ul className={styles["dropdown"]}>{getLIElements()}</ul>
      </div>
    </div>
  );
};
//
// interface EchLanguageModalProps {
//   title: string;
//   children?: React.ReactNode;
// }
//
// const EchLanguageModal = ({ title, children }: EchLanguageModalProps) => {
//   const [visible, setVisible] = useState(false);
//   const handler = () => setVisible(true);
//
//   const closeHandler = () => {
//     setVisible(false);
//   };
//
//   return (
//     <>
//       <Button flat auto rounded color="secondary" onClick={handler} animated>
//         {children}
//       </Button>
//       <Modal
//         closeButton
//         aria-labelledby="modal-title"
//         open={visible}
//         onClose={closeHandler}
//         width="auto"
//         css={{ "max-width": "550px" }}
//         autoMargin
//         animated
//       >
//         <Modal.Header autoMargin>
//           <Text id="modal-title" size={18}>
//             <Text b size={18}>
//               {title}
//             </Text>
//           </Text>
//         </Modal.Header>
//         <Modal.Body autoMargin>
//           <Row justify="space-between">{children}</Row>
//         </Modal.Body>
//         {/*<Modal.Footer autoMargin>*/}
//         {/*  <Button auto flat color="error" onClick={closeHandler}>*/}
//         {/*    Close*/}
//         {/*  </Button>*/}
//         {/*  <Button auto onClick={closeHandler}>*/}
//         {/*    Sign in*/}
//         {/*  </Button>*/}
//         {/*</Modal.Footer>*/}
//       </Modal>
//     </>
//   );
// };

export default EchLanguage;
