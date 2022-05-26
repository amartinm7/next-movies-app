import React from "react";
import { Button, Modal, Row, Text } from "@nextui-org/react";

const key = "x7Krla_UxRg";
const getUrlBy = (key: string) =>
  `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`;

type EchVideoPlayerProps = {
  url: string;
};
const EchVideoplayer = ({ url }: EchVideoPlayerProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <iframe
        src={url}
        frameBorder="0"
        style={{ width: "480px", height: "370px" }}
        width="480px"
        height="370px"
      />
    </div>
  );
};

type Props = {
  title: string;
  movieKey: string;
  children: JSX.Element;
};

const EchVideo = ({ movieKey = "x7Krla_UxRg", title, children }: Props) => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      <Button flat auto rounded color="secondary" onClick={handler}>
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
      >
        {/*<Modal.Header autoMargin>*/}
        {/*  <Text id="modal-title" size={18}>*/}
        {/*    <Text b size={18}>*/}
        {/*      {title}*/}
        {/*    </Text>*/}
        {/*  </Text>*/}
        {/*</Modal.Header>*/}
        <Modal.Body autoMargin>
          <Row justify="space-between">
            <EchVideoplayer url={getUrlBy(movieKey)}></EchVideoplayer>
          </Row>
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

export default EchVideo;
