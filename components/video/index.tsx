import React from "react";
import { Button, Modal, Row, Text } from "@nextui-org/react";

const key = "x7Krla_UxRg";
const getUrlBy = (key: string) =>
  `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`;

type VideoPlayerProps = {
  url: string;
};
const Videoplayer = ({ url }: VideoPlayerProps) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
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
  key: string;
  children: JSX.Element;
};

const EchVideo = ({ key = "x7Krla_UxRg", children }: Props) => {
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
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row justify="space-between">
            <Videoplayer url={getUrlBy(key)}></Videoplayer>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EchVideo;
