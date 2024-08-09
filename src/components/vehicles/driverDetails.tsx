import { Box, CloseButton, Flex, Heading } from "@chakra-ui/react";
import { Notification, Pause, Share } from "iconsax-react";
import React from "react";

const DriverDetails = (details: {
  vname: string;
  status: string;
  driverName: string;
  phone: string;
  image: string;
  lastUpdate: string;
}) => {
  const size = 20;
  return (
    <Box width={300}>
      <Flex justifyContent={"space-between"}>
        <Heading>{details.vname}</Heading>
        <CloseButton />
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Heading>Status</Heading>
        <Heading>{details.status}</Heading>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Heading>Driver</Heading>
        <Heading>{details.driverName}</Heading>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Heading>Phone</Heading>
        <Heading>{details.phone}</Heading>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Heading>Last Update</Heading>
        <Heading>{details.lastUpdate}</Heading>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Notification size={size} />
        <Share size={size} />
        <Pause size={size} />
      </Flex>
    </Box>
  );
};

export default DriverDetails;
