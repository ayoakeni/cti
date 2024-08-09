import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import React from "react";
import { Box } from "@chakra-ui/react";
import BoxHeader from "../boxHeader";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const BarChartBox = (props: { color: string }) => {
  return (
    <Box
      height={400}
      width={"100%"}
      py={5}
      bg={"#fff"}
      boxShadow={"lg"}
      px={3}
      borderRadius={10}
      mt={5}
    >
      <BoxHeader name="Service Cost" onClick={() => {}} />
      <Box height="100%" width="100%" p={10}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};
