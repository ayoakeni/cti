import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../components/boxHeader";

const OpenIssues = () => {
  return (
    <Box
      height={400}
      width={"100%"}
      py={5}
      boxShadow={"lg"}
      px={3}
      borderRadius={10}
      bg={"#fff"}
      mt={5}
    >
      <BoxHeader name="Open Issues" onClick={() => {}} />
      <Box>
        <Flex
          justifyContent={"space-between"}
          px={10}
          my={10}
          mt={20}
          textAlign={"center"}
        >
          <Box>
            <Heading color={"#1A73E8"} mt={4} fontSize={100}>
              8
            </Heading>
            <Text>Overdue</Text>
          </Box>
          <Box>
            <Heading color={"#757575"} mt={4} fontSize={100}>
              4
            </Heading>
            <Text>Overdue</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default OpenIssues;
