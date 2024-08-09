import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const TravelDetails = ({ name, number }: { name: string; number: string }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      my={3}
      borderBottom={"1px solid #ddd"}
      pb={2}
      px={5}
    >
      <Text textTransform={"uppercase"}>{name}</Text>
      <Text>{number}</Text>
    </Flex>
  );
};

export default TravelDetails;
