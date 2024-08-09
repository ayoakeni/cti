import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Layout from "../../layouts/dashboard/sideBar";
import { ArrowSquareRight, Export, Login } from "iconsax-react";
import SearchInput from "../../components/searchInput";
import FilterAlert from "../../components/alert/filterAlert";
import Ignition from "../../components/alert/ignition";

const AlertTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <Layout name="Alert Table" needed={false} vehicle={null}>
      <Box mt={5}>
        <Flex mb={2} justifyContent={"flex-end"} gap={5}>
          <Button
            rightIcon={<Export size={15} />}
            fontSize={12}
            bg={"#fff"}
            border={"1px solid #ddd"}
            borderRadius={10}
          >
            Export
          </Button>
          <Text
            px={5}
            borderRadius={10}
            py={2}
            bg={"#fff"}
            border={"1px solid #ddd"}
          >
            Filter
          </Text>
          <Box
            cursor={"pointer"}
            onClick={() => {
              onOpen();
            }}
          >
            <ArrowSquareRight size={40} />
          </Box>
        </Flex>
        <TableContainer borderRadius={10}>
          <Table bg={"#fff"} size={"sm"}>
            <Thead>
              <Tr>
                <Th py={6}>Vehicles No</Th>
                <Th>Driver</Th>
                <Th>Ignition On Time</Th>
                <Th>Ignition Off Time</Th>
                <Th>Ignition Duration</Th>
                <Th>Ignition On Location</Th>
                <Th>Ignition Off Location</Th>
                <Th>Ignition On Lat/Long</Th>
                <Th>Ignition Off Lat/Long</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr bg={"#fff"} cursor={"pointer"}>
                <Td>XYZ12D9</Td>
                <Td>Driver 1</Td>
                <Td>29/07/2024</Td>
                <Td>29/07/2024</Td>
                <Td>3 secs</Td>
                <Td>Central Park, New York City</Td>
                <Td>Central Park, New York City</Td>
                <Td>Latitude: 40.785091 Longitude: -73.968285</Td>
                <Td>Latitude: 40.785091 Longitude: -73.968285</Td>
                <Td>
                  <Login />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Alert Details</DrawerHeader>

              <DrawerBody>
                <SearchInput />
                <Flex
                  gap={5}
                  mt={2}
                  overflowX={"scroll"}
                  py={2}
                  alignItems={"center"}
                >
                  <FilterAlert name="All" numbers={10} />
                  <FilterAlert name="Critical" numbers={10} />
                  <FilterAlert name="Non Critical" numbers={10} />
                </Flex>

                <Text mt={2}>
                  Showing alert from: Jul 1st, 2:05AM - July 29th, 2:05AM
                </Text>

                <Box height={"100%"} overflowY={"scroll"} mt={5}>
                  <Ignition
                    desc="An ignition alert is triggered when the system detects that your 
                          vehicle's ignition has been turned on or off."
                    header="Ignition On/ Off:  001"
                  />
                  <Ignition
                    desc="An ignition alert is triggered when the system detects that your 
                          vehicle's ignition has been turned on or off."
                    header="Ignition On/ Off:  001"
                  />
                  <Ignition
                    desc="An ignition alert is triggered when the system detects that your 
                          vehicle's ignition has been turned on or off."
                    header="Ignition On/ Off:  001"
                  />
                  <Ignition
                    desc="An ignition alert is triggered when the system detects that your 
                          vehicle's ignition has been turned on or off."
                    header="Ignition On/ Off:  001"
                  />
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Box>
    </Layout>
  );
};

export default AlertTable;
