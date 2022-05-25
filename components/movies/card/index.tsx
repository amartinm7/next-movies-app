import { Button, Card, Col, Row, Text } from "@nextui-org/react";

export interface EchCardDef {
  id: string;
  imageSrc: string;
  title: string;
  year: string;
}

const EchCard = ({ id, imageSrc, title, year }: EchCardDef) => (
  <Card cover css={{ w: "100%", h: "max-content" }}>
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
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                watch video
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default EchCard;
