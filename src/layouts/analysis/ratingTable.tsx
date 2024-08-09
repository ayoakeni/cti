import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import AnalysisHeader from "../../components/analysis/analysisHeader";

const RatingTable = () => {
  const data = [
    {
      rank: 1,
      vehicle: "Vehicle A",
      distance: 300,
      overSpeeding: 20,
      idling: 5,
      braking: 15,
      acceleration: 25,
      sharpTurn: 10,
      overallScore: 395,
    },
    {
      rank: 2,
      vehicle: "Vehicle B",
      distance: 280,
      overSpeeding: 30,
      idling: 10,
      braking: 20,
      acceleration: 22,
      sharpTurn: 8,
      overallScore: 370,
    },
    {
      rank: 3,
      vehicle: "Vehicle C",
      distance: 310,
      overSpeeding: 25,
      idling: 8,
      braking: 18,
      acceleration: 28,
      sharpTurn: 12,
      overallScore: 401,
    },
    {
      rank: 4,
      vehicle: "Vehicle D",
      distance: 290,
      overSpeeding: 22,
      idling: 6,
      braking: 14,
      acceleration: 20,
      sharpTurn: 9,
      overallScore: 361,
    },
    {
      rank: 5,
      vehicle: "Vehicle E",
      distance: 270,
      overSpeeding: 28,
      idling: 12,
      braking: 19,
      acceleration: 24,
      sharpTurn: 11,
      overallScore: 364,
    },
  ];

  return (
    <Box bg={"#fff"} border={"1px solid #ddd"} p={5} mt={5} borderRadius={10}>
      <AnalysisHeader title="Top performing vehicles by scores" />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Top performing vehicles by scores</TableCaption>
          <Thead>
            <Tr>
              <Th>Ranks</Th>
              <Th>Vehicles</Th>
              <Th>Distance Travelled km/hr</Th>
              <Th>Over Speeding</Th>
              <Th>Idiling km/hr</Th>
              <Th>Braking km/hr</Th>
              <Th>Acceleration km/hr</Th>
              <Th>Sharp Turn km/hr</Th>
              <Th>Over Score km.hr</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d, key) => (
              <Tr>
                <Td>{d.rank}</Td>
                <Td>{d.vehicle}</Td>
                <Td>{d.distance} km/hr</Td>
                <Td>{d.overSpeeding} km/hr</Td>
                <Td>{d.idling} km/hr</Td>
                <Td>{d.braking} km/hr</Td>
                <Td>{d.acceleration} km/hr</Td>
                <Td>{d.sharpTurn} km/hr</Td>
                <Td>{d.overallScore} km/hr</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RatingTable;
