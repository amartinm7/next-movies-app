import React from "react";
import { Button, Modal, Row, Text } from "@nextui-org/react";

const getUrlBy = (key: string = "x7Krla_UxRg") =>
  `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1;allow="fullscreen;`;

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
        allowFullScreen
      />
    </div>
  );
};

type EchVideoProps = {
  title: string;
  movieKey: string;
  children?: React.ReactNode;
};

const EchVideo = ({
  movieKey = "x7Krla_UxRg",
  title,
  children,
}: EchVideoProps) => {
  const [visible, setVisible] = React.useState(false);
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
