import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";

const MonthlyFuelBudget = () => {
  return (
    <Box
      bg={"#fff"}
      mt={5}
      boxShadow={"lg"}
      width={"100%"}
      p={5}
      borderRadius={10}
    >
      <Text fontSize={20}>Monthly Fuel Budget</Text>

      <Box mt={5}>
        <Flex justifyContent={"space-between"} py={2}>
          <Text>This Month</Text>
          <Text>$500/50Ltrs</Text>
        </Flex>
        <Progress borderRadius={40} colorScheme="green" size="md" value={90} />
      </Box>
      <Box mt={5}>
        <Flex justifyContent={"space-between"} py={2}>
          <Text>May</Text>
          <Text>$500/50Ltrs</Text>
        </Flex>
        <Progress borderRadius={40} colorScheme="green" size="md" value={30} />
      </Box>
      <Box mt={5}>
        <Flex justifyContent={"space-between"} py={2}>
          <Text>April</Text>
          <Text>$500/50Ltrs</Text>
        </Flex>
        <Progress borderRadius={40} colorScheme="green" size="md" value={80} />
      </Box>
      <Box mt={5}>
        <Flex justifyContent={"space-between"} py={2}>
          <Text>April</Text>
          <Text>$500/50Ltrs</Text>
        </Flex>
        <Progress borderRadius={40} colorScheme="green" size="md" value={60} />
      </Box>
    </Box>
  );
};

export default MonthlyFuelBudget;
