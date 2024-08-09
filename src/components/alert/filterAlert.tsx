import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FilterAlert = ({ name, numbers }: { name: string; numbers: number }) => {
  return (
    <Flex
      p={2}
      bg={"#fff"}
      borderRadius={100}
      alignItems={"center"}
      gap={2}
      minW={"fit-content"}
      cursor={"pointer"}
      border={"1px solid #ddd"}
    >
      <Text>{name}</Text>
      <Text
        fontSize={"8px !important"}
        p={1}
        px={1.5}
        bg={"#4CAF50"}
        color={"#fff"}
        borderRadius={10}
      >
        {numbers}
      </Text>
    </Flex>
  );
};

export default FilterAlert;
