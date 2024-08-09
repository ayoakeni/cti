import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Location } from "iconsax-react";
import React from "react";

const RcAlert = () => {
  return (
    <Box bg={"#fff"} px={3} mt={2} py={4} borderRadius={10}>
      <Flex gap={2} alignItems={"center"}>
        <Location size={15} variant="Bold" />
        <Text fontWeight={900} fontSize={15}>
          Geofence Breaches
        </Text>
      </Flex>
      <Text my={3} fontSize={12}>
        Alert: Vehicle XYZ has breached the geofence boundary at 3:15 PM,
        exiting the designated area.
      </Text>
      <Flex gap={5}>
        <Button
          fontSize={12}
          fontWeight={400}
          height={8}
          _hover={{ bg: "#F44336" }}
          color={"#fff"}
          bg={"#F44336"}
        >
          Deny
        </Button>
        <Button
          fontSize={12}
          fontWeight={400}
          height={8}
          _hover={{ bg: "#1A73E8" }}
          color={"#fff"}
          bg={"#1A73E8"}
        >
          Allow
        </Button>
      </Flex>
    </Box>
  );
};

export default RcAlert;
