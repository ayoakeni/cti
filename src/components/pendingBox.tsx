import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "./boxHeader";

const PendingBox = () => {
  return (
    <Box>
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
        <BoxHeader onClick={() => {}} name="Pending Issues" />

        <Flex justifyContent={"center"} my={20}>
          <Box>
            <Flex justifyContent={"center"} mb={5}>
              <CloseButton bg={"red"} borderRadius={100} />
            </Flex>
            <Text textAlign={"center"}>No Pending Issues at the moment</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default PendingBox;
