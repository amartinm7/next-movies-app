import { Card, Col, Row, Text } from "@nextui-org/react";
import EchVideo from "@/components/common/video";
import { MovieVideos } from "./index.d";

const defaultKey = "x7Krla_UxRg";

export type EchCardProps = {
  id: string;
  imageSrc: string;
  title: string;
  year: string;
  videos: MovieVideos;
};

const getVideoKey = (videos: MovieVideos) =>
  videos?.results[0]?.key ?? defaultKey;

const EchCard = ({ id, imageSrc, title, year, videos }: EchCardProps) => {
  return (
    <Card cover hoverable css={{ w: "100%", h: "max-content" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {id}
          </Text>
          <Text h3 color="black"></Text>
        </Col>
      </Card.Header>
      <Card.Body
        css={{
          "border-top-left-radius": "var(--nextui-radii-lg)",
          "border-top-right-radius": "var(--nextui-radii-lg)",
        }}
      >
        <Card.Image src={imageSrc} height="530px" width="100%" alt={title} />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          bgBlur: "#ffffff",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              {year}
            </Text>
            <Text color="#000" size={12}>
              {title?.length > 20 ? `${title?.substring(0, 20)}...` : title}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <EchVideo movieKey={getVideoKey(videos)} title={title}>
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  watch video
                </Text>
              </EchVideo>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default EchCard;
