import { Box, Flex, Radio, Text } from "@chakra-ui/react";
import React from "react";
import AnalysisHeader from "../../components/analysis/analysisHeader";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TravelDetails from "../../components/analysis/travelDetails";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

const OnTrip = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <Box
      p={5}
      bg={"#fff"}
      border={"1px solid #ddd"}
      //   height={"100%"}
      height={1000}
      borderRadius={10}
    >
      <AnalysisHeader title="On Trip vs Off Trip" />

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#4CAF50" />
          <Bar dataKey="uv" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>

      <hr />

      <Box my={5}>
        <Flex alignItems={"center"} gap={5}>
          <Text>Vehicle Trips</Text>
          <Radio borderColor={"#ddd"}>
            <Text>Delayed</Text>
          </Radio>
        </Flex>

        <Box>
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
        </Box>

        <Flex gap={2} mt={5} justifyContent={"flex-end"}>
          <Text>1 of 20</Text>
          <Flex gap={2}>
            <Box cursor={"pointer"}>
              <ArrowLeft2 size={15} />
            </Box>
            <Box cursor={"pointer"}>
              <ArrowRight2 size={15} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default OnTrip;
