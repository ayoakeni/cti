import { Box, Heading, Text } from "@chakra-ui/react";
import { GasStation } from "iconsax-react";
import React from "react";

const FuelBox = (props: { icon: any; dataTitle: string; desc: string }) => {
  return (
    <Box
      cursor={"pointer"}
      p={10}
      bg={"#fff"}
      boxShadow={"lg"}
      borderRadius={10}
      // width={"400px !important"}
      width={"100%"}
      height={200}
    >
      <Box bg={"#fff"} width={"fit-content"} p={2} borderRadius={10}>
        {props.icon}
      </Box>
      <Heading fontSize={20} fontWeight={600} mt={2}>
        {props.dataTitle}
      </Heading>
      <Text fontSize={24} color={"#757575"} fontWeight={600}>
        {props.desc}
      </Text>
    </Box>
  );
};

export default FuelBox;
