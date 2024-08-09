import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../components/boxHeader";

const DueBox = () => {
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
      <BoxHeader onClick={() => {}} name="Overdue Inspection" />
      <Box>
        <Flex
          justifyContent={"space-between"}
          px={10}
          alignItems={"center"}
          my={10}
          textAlign={"center"}
          mt={20}
        >
          <Box>
            <Heading
              color={"#F44336"}
              mt={4}
              fontSize={{ lg: 80, md: 70, sm: 40, base: 40 }}
            >
              20
            </Heading>
            <Text>Overdue</Text>
          </Box>
          <Box>
            <Heading
              color={"#FFEB3B"}
              mt={4}
              fontSize={{ lg: 80, md: 70, sm: 40, base: 40 }}
            >
              75.5%
            </Heading>
            <Text>Total Schedule</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DueBox;
