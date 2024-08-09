import {
  Box,
  Flex,
  Heading,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import {
  Calendar,
  Car,
  Driver,
  Notification,
  SearchNormal1,
  User,
} from "iconsax-react";
import React from "react";
import VehicleLocation from "../../components/vehicleLocation";

const LiveTrack = (props: { display: string }) => {
  return (
    <Box
      p={7}
      boxShadow={"lg"}
      display={props.display}
      borderRadius={20}
      width={{ lg: "500px", md: "500px", sm: "100%", base: "100%" }}
      height={{ lg: "100vh", md: "100vh", sm: 700, base: 800 }}
    >
      <Heading fontSize={15} fontWeight={500}>
        Route History
      </Heading>

      <Flex
        border={"1px solid #ddd"}
        mt={2}
        alignItems={"center"}
        bg={"#fff"}
        borderRadius={10}
        px={5}
      >
        <SearchNormal1 size={15} />
        <Input
          placeholder="Search..."
          py={6}
          fontSize={12}
          border={"none"}
          _focus={{ boxShadow: "none" }}
        />
        <Box cursor={"pointer"}>
          <Popover>
            <PopoverTrigger>
              <Calendar size={15} variant="Bold" />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select Date!</PopoverHeader>
              <PopoverBody>
                <Text>From</Text>
                <Input py={6} mt={2} type="date" />
                <Text mt={2}>To</Text>
                <Input py={6} my={2} type="date" />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>

      <Flex justifyContent={"space-between"} mt={3}>
        <Flex
          alignItems={"center"}
          gap={2}
          _hover={{ bg: "#fff" }}
          cursor={"pointer"}
          p={3}
          width={"100%"}
          borderRadius={10}
        >
          <Car color="#1A73E8" variant="Bold" size={20} />
          <Text>Vehicles</Text>
        </Flex>
        <Flex
          alignItems={"center"}
          gap={2}
          _hover={{ bg: "#fff" }}
          cursor={"pointer"}
          p={3}
          width={"100%"}
          borderRadius={10}
        >
          <User color="#1A73E8" variant="Bold" size={20} />
          <Text>Drivers</Text>
        </Flex>
        <Flex
          alignItems={"center"}
          gap={2}
          _hover={{ bg: "#fff" }}
          cursor={"pointer"}
          p={3}
          width={"100%"}
          borderRadius={10}
        >
          <Notification color="#1A73E8" variant="Bold" size={20} />
          <Text>Alert</Text>
        </Flex>
      </Flex>

      <Flex alignItems={"center"} mt={5} width={"100%"}>
        <Box
          width={200}
          height={70}
          bg={"#1A73E866"}
          textAlign={"center"}
          fontSize={12}
          pt={5}
          fontWeight={700}
        >
          30 <br /> Vehicles
        </Box>
        <Box
          width={200}
          height={70}
          bg={"#FFEB3B66"}
          textAlign={"center"}
          pt={5}
          fontSize={12}
          fontWeight={700}
        >
          10 <br />
          Idling
        </Box>
        <Box
          width={200}
          height={70}
          bg={"#F4433666"}
          textAlign={"center"}
          pt={5}
          fontSize={12}
          fontWeight={700}
        >
          20 <br />
          Parking
        </Box>
        <Box
          width={200}
          height={70}
          bg={"#4CAF5066"}
          textAlign={"center"}
          pt={5}
          fontSize={12}
          fontWeight={700}
        >
          15 <br />
          Moving
        </Box>
        <Box
          width={200}
          height={70}
          bg={"#ddd"}
          textAlign={"center"}
          pt={5}
          fontSize={12}
          fontWeight={700}
        >
          15 <br />
          Offline
        </Box>
      </Flex>

      <Box
        width={"100%"}
        mt={5}
        borderRadius={10}
        height={"58%"}
        overflowY={"scroll"}
      >
        <VehicleLocation />
        <VehicleLocation />
        <VehicleLocation />
        <VehicleLocation />
        <VehicleLocation />
        <VehicleLocation />
        <VehicleLocation />
        <VehicleLocation />
        <VehicleLocation />
        <VehicleLocation />
      </Box>
    </Box>
  );
};

export default LiveTrack;
