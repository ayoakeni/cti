import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import BoxHeader from "../boxHeader";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const PieChartBox = () => {
  const navigate = useNavigate();
  return (
    <Box
      height={400}
      width={"100%"}
      py={5}
      boxShadow={"lg"}
      bg={"#fff"}
      px={3}
      borderRadius={10}
      mt={5}
    >
      <BoxHeader
        onClick={() => {
          navigate("/vehicles");
        }}
        name="Service Cost"
      />
      <Box height="100%" width="100%">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};
