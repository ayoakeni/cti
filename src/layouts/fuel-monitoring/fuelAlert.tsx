import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Alarm } from "iconsax-react";
import React from "react";

const FuelAlert = () => {
  return (
    <Box
      boxShadow={"lg"}
      bg={"#fff"}
      p={5}
      mt={5}
      borderRadius={10}
      width={"100%"}
    >
      <Text fontSize={20}>Fuel Alert</Text>
      <Box
        border={"1px solid #ddd"}
        cursor={"pointer"}
        bg={"#fff"}
        p={7}
        borderRadius={10}
        mt={5}
      >
        <Flex alignItems={"center"} gap={5}>
          <Alarm variant="Bold" color="#F44336" size={30} />
          <Text mt={2} fontSize={"15px !important"}>
            Fuel Theft
          </Text>
        </Flex>
        <Text my={2} fontSize={"15px !important"}>
          Alert: Sudden drop in fuel levels detected, indicating possible fuel
          theft.
        </Text>
        <Flex gap={5}>
          <Button
            fontWeight={400}
            _hover={{ bg: "#F44336" }}
            color={"#fff"}
            bg={"#F44336"}
            height={8}
            fontSize={12}
          >
            Deny
          </Button>
          <Button
            fontWeight={400}
            _hover={{ bg: "#1A73E8" }}
            color={"#fff"}
            bg={"#1A73E8"}
            height={8}
            fontSize={12}
          >
            Allow
          </Button>
        </Flex>
      </Box>
      <Box
        border={"1px solid #ddd"}
        cursor={"pointer"}
        bg={"#fff"}
        p={7}
        borderRadius={10}
        mt={5}
      >
        <Flex alignItems={"center"} gap={5}>
          <Alarm variant="Bold" color="#F44336" size={30} />
          <Text mt={2} fontSize={"15px !important"}>
            Fuel Theft
          </Text>
        </Flex>
        <Text my={2} fontSize={"15px !important"}>
          Alert: Sudden drop in fuel levels detected, indicating possible fuel
          theft.
        </Text>
        <Flex gap={5}>
          <Button
            fontWeight={400}
            _hover={{ bg: "#F44336" }}
            color={"#fff"}
            bg={"#F44336"}
            height={8}
            fontSize={12}
          >
            Deny
          </Button>
          <Button
            fontWeight={400}
            _hover={{ bg: "#1A73E8" }}
            color={"#fff"}
            bg={"#1A73E8"}
            height={8}
            fontSize={12}
          >
            Allow
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default FuelAlert;
