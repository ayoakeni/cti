import { Box, Flex, Text } from "@chakra-ui/react";
import { Location } from "iconsax-react";
import React from "react";

const AbsoluteBox = () => {
  return (
    <Box
      width={120}
      pos={"absolute"}
      textAlign={"center"}
      p={5}
      bg={"#fff"}
      cursor={"pointer"}
      borderRadius={200}
    >
      <Flex justifyContent={"center"}>
        <Location />
      </Flex>
      <Text fontWeight={700} fontSize={12}>
        Total Distance
      </Text>
      <Text fontSize={20}>42km</Text>
    </Box>
  );
};

export default AbsoluteBox;
