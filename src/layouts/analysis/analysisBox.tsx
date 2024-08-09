import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const AnalysisBox = () => {
  return (
    <Box
      bg={"#fff"}
      p={5}
      minW={400}
      cursor={"pointer"}
      borderRadius={10}
      border={"1px solid #ddd"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} mb={2}>
        <Text fontSize={"17px !important"}>Vehicles</Text>
        <Button
          fontSize={12}
          fontWeight={400}
          height={8}
          borderRadius={100}
          bg={"#4CAF50"}
          color={"#fff"}
        >
          See all
        </Button>
      </Flex>
      <Flex gap={5} mt={5}>
        <Box>
          <Text>Vehicles Moving</Text>
          <Text fontSize={"15px !important"}>20 Vehicle</Text>
        </Box>
        <Box
          borderLeft={"1px solid #ddd"}
          borderRight={"1px solid #ddd"}
          px={5}
        >
          <Text>Vehicles Not Moving</Text>
          <Text fontSize={"15px !important"}>80 Vehicle</Text>
        </Box>
        <Box>
          <Text>Active Trips</Text>
          <Text fontSize={"15px !important"}>0 Vehicle</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AnalysisBox;
