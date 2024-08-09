import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const DriverView = (data: {
  driverView: string;
  img: string;
  id: string;
  text: string;
  date: string;
}) => {
  return (
    <Box mt={5} width={"100%"} cursor={"pointer"}>
      <Image src="/driver.png" width={"100%"} borderRadius={20} />
      <Flex gap={5} mt={5} alignItems={"center"}>
        <Image src="/person.png" width={"20%"} />
        <Box>
          <Heading fontSize={20}>XYZ12D9</Heading>
          <Text>Sharp Turn</Text>
          <Text>30/07/2024; 11:28 AM</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default DriverView;
