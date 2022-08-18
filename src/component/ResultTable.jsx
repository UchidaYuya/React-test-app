import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text
} from "@chakra-ui/react";

export default function ResultTable(props) {
  const table = props.table;
  let arr = [];
  Object.keys(table[0]).map((key) => arr.push(key));

  return (
    <>
      <Text fontSize="2xl">データを読み込みました</Text>
      <TableContainer>
        <Table size="md">
          <Thead>
            <Tr>
              {arr.map((key, index) => {
                return <Th>{key}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {table.map((test, index) => {
              return (
                <Tr>
                  {Object.values(test).map((value) => {
                    return <Td>{value}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
