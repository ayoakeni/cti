import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Operator = () => {
  return (
    <Box>
      <Flex alignItems={"center"} gap={5}>
        <Image
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          width={10}
          height={10}
          borderRadius={40}
          objectFit={"cover"}
        />
        <Text>Joseph Cole</Text>
      </Flex>
    </Box>
  );
};

export default Operator;
