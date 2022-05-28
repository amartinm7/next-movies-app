// @ts-ignore
import { PeopleCredit, PeopleCredits } from "./index.d";
import { Link, Table, User } from "@nextui-org/react";
import NextLink from "next/link";

const getURL = (key: string) => `https://image.tmdb.org/t/p/w500/${key}`;

interface EchCardCreditsProps {
  credits: PeopleCredits;
  contextPath: string;
  labelColumn: string;
}

const EchCardCredits = ({
  credits,
  contextPath,
  labelColumn,
}: EchCardCreditsProps) => {
  const columns = [{ name: labelColumn, uid: "name" }];
  const filteredCredits = credits.cast.filter(
    (user) => user.profile_path || user.poster_path
  );
  return (
    <Table
      aria-label={labelColumn}
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
      bordered
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.uid} align={"start"}>
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={filteredCredits}>
        {(user: PeopleCredit) => (
          <Table.Row>
            <Table.Cell>
              <NextLink href={`/${contextPath}/${user.id}`}>
                <Link color="secondary">
                  <User
                    squared
                    src={getURL(user.profile_path || user.poster_path)}
                    name={user.name || user.title}
                    css={{ p: 0 }}
                    size="xl"
                  >
                    {`as ${
                      user.character.length > 30
                        ? user.character.substring(0, 30)
                        : user.character
                    }`}
                  </User>
                </Link>
              </NextLink>
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
