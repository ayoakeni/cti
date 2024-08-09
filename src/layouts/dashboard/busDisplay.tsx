import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../components/boxHeader";
import { Location } from "iconsax-react";
import AbsoluteBox from "../../components/absoluteBox";

const BusDisplay = () => {
  return (
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
      <BoxHeader onClick={() => {}} name="Car Monitoring" />
      <Box pos={"relative"}>
        <AbsoluteBox />
        <AbsoluteBox />
        <Flex my={20} justifyContent={"center"}>
          <AbsoluteBox />
          <AbsoluteBox />
          <Image src="/bus.png" />
        </Flex>
      </Box>
    </Box>
  );
};

export default BusDisplay;
