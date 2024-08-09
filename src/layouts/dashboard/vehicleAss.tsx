import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../components/boxHeader";

const VehicleAss = () => {
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
      <BoxHeader onClick={() => {}} name="Vehicle Assignment" />
      <Box>
        <Flex
          justifyContent={"space-between"}
          px={10}
          my={10}
          mt={20}
          textAlign={"center"}
        >
          <Box>
            <Heading color={"#4CAF50"} mt={4} fontSize={100}>
              8
            </Heading>
            <Text>Assigned</Text>
          </Box>
          <Box>
            <Heading color={"#333333"} mt={4} fontSize={100}>
              4
            </Heading>
            <Text>Unassigned</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default VehicleAss;
