import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex
      justifyContent={{
        lg: "space-between",
        md: "space-between",
        sm: "center",
        base: "center",
      }}
      alignItems={"center"}
    >
      <Box>
        <Heading fontSize={{ lg: 70, md: 50, sm: 60, base: 50 }}>
          Multi-Tool Kit
        </Heading>
        <Text fontSize={"20px !important"}>
          Everything you need for on-the-go repairs and adjustments.
        </Text>
        <Button
          p={6}
          fontWeight={400}
          bg={"#4CAF50"}
          mt={5}
          color={"#fff"}
          _hover={{ bg: "#4CAF50" }}
        >
          Explore Now
        </Button>
      </Box>
      <Image
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
        src="/oli.png"
        width={"40%"}
      />
    </Flex>
  );
};

export default Hero;
