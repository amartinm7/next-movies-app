// @ts-ignore
import { MovieCredit, MovieCredits } from "@/components/credits/index.d";
import { Col, Row, Table, Text, User } from "@nextui-org/react";

const getURL = (key: string) => `https://image.tmdb.org/t/p/w500/${key}`;

const EchCardCredits = (credits: MovieCredits) => {
  const columns = [{ name: "NAME", uid: "name" }];

  const filteredCredits = credits.cast.filter((user) => user.profile_path);

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
            <Table.Cell>
              <User
                squared
                src={getURL(user.profile_path)}
                name={user.name}
                css={{ p: 0 }}
                size="xl"
              >
                {`as ${user.character}`}
              </User>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={5}
        onPageChange={(page) => console.log({ page })}
      />
    </Table>
  );
};

export default EchCardCredits;
