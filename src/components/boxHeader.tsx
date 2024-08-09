import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ArrowRight2 } from "iconsax-react";
import React from "react";

const BoxHeader = (props: { name: string; onClick: () => void }) => {
  return (
    <Box mb={2}>
      <Flex justifyContent={"space-between"}>
        <Heading fontSize={12} fontWeight={500}>
          {props.name}
        </Heading>
        <Flex onClick={props.onClick} alignItems={"center"} cursor={"pointer"}>
          <Text>Details</Text>
          <Box>
            <ArrowRight2 size={15} color="#000" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BoxHeader;
