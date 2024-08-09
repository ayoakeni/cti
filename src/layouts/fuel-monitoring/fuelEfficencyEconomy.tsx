import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FuelEfficencyEconomy = () => {
  return (
    <Box boxShadow={"lg"} bg={"#fff"} p={5} borderRadius={10} mt={5}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <CircularProgress size={"100%"} value={40} color="green.400">
            <CircularProgressLabel
              fontSize={{ lg: 20, md: 20, sm: 12, base: 12 }}
            >
              40%
            </CircularProgressLabel>
          </CircularProgress>
          <Text textAlign={"center"} fontSize={20}>
            Fuel Effiency
          </Text>
        </Box>
        <Box>
          <CircularProgress size={"100%"} value={40} color="green.400">
            <CircularProgressLabel
              fontSize={{ lg: 20, md: 20, sm: 12, base: 12 }}
            >
              40%
            </CircularProgressLabel>
          </CircularProgress>
          <Text textAlign={"center"} fontSize={20}>
            Fuel Economy
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default FuelEfficencyEconomy;
