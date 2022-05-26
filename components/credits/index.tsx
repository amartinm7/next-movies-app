// @ts-ignore
import { MovieCredit, MovieCredits } from "@/components/credits/index.d";
import { Col, Row, Table, Text, User } from "@nextui-org/react";

const getURL = (key: string) => `https://image.tmdb.org/t/p/w500/${key}`;

const EchCardCredits = (credits: MovieCredits) => {
  const columns = [
    { name: "NAME", uid: "name" },
    // { name: "ROLE", uid: "role" },
    { name: "POPULARITY", uid: "popularity" },
    { name: "CHARACTER", uid: "character" },
  ];

  const filteredCredits = credits.cast.filter((user) => user.profile_path);

  const renderCell = (user: MovieCredit, columnKey: React.Key) => {
    switch (columnKey) {
      case "name":
        return (
          <User
            squared
            src={getURL(user.profile_path)}
            name={user.name}
            css={{ p: 0 }}
            size="xl"
          >
            {/*{user.character}*/}
          </User>
        );
      // case "role":
      //   return (
      //     <Col>
      //       <Row>
      //         <Text b size={14} css={{ tt: "capitalize" }}>
      //           {user.known_for_department}
      //         </Text>
      //       </Row>
      //       <Row>
      //         <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
      //           {user.credit_id}
      //         </Text>
      //       </Row>
      //     </Col>
      //   );
      case "popularity":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize", alignText: "right" }}>
                {user.popularity}
              </Text>
            </Row>
          </Col>
        );
      case "character":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {user.character}
              </Text>
            </Row>
          </Col>
        );
      default:
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {user.credit_id}
              </Text>
            </Row>
          </Col>
        );
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.uid} align={"start"}>
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={filteredCredits}>
        {(user: MovieCredit) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(user, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export default EchCardCredits;
