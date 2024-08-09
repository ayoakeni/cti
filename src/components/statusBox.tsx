import { Box, Flex, Switch, Text } from "@chakra-ui/react";
import React from "react";

const StatusBox = (props: { name: string }) => {
  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        width={"100%"}
        bg={"#fff"}
        p={5}
        borderRadius={10}
        mt={5}
      >
        <Text fontWeight={600}>{props.name}</Text>
        <Switch id="email-alerts" size={"lg"} colorScheme="teal" />
      </Flex>
    </Box>
  );
};

export default StatusBox;
