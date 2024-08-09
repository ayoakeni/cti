import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const AnalysisHeader = ({ title }: { title: string }) => {
  return (
    <Flex pb={5}>
      <Text>{title}</Text>
    </Flex>
  );
};

export default AnalysisHeader;
