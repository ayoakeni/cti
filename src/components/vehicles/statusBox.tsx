import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const StatusBox = (props: { status: string; statusText: string }) => {
  return (
    <Box>
      <Flex gap={2} alignItems={"center"}>
        <Box
          width={5}
          bg={props.status === "online" ? "#4CAF50" : "red"}
          height={5}
          borderRadius={100}
        ></Box>
        <Text textTransform={"capitalize"}>{props.statusText}</Text>
      </Flex>
    </Box>
  );
};

export default StatusBox;
