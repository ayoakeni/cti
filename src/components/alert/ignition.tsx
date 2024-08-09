import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Message, Send } from "iconsax-react";
import React from "react";

const Ignition = (data: { header: string; desc: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box border={"1px solid #ddd"} px={5} py={5} borderRadius={10} mt={5}>
        <Heading fontSize={20}>{data.header}</Heading>
        <Text mt={2}>{data.desc}</Text>
        <Button
          bg={"#4CAF50"}
          _hover={{ bg: "#4CAF50" }}
          color={"#fff"}
          fontSize={10}
          height={7}
          onClick={onOpen}
          borderRadius={100}
          fontWeight={400}
          my={2}
        >
          Auto Generated
        </Button>
        <Flex gap={1}>
          <Text color={"red"}>See Alert</Text>
          <Text>to receive notification</Text>
        </Flex>
      </Box>
      <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comments</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Vehicle No</Heading>
                  <Text>XYZ12D9</Text>
                </Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Ignition On Time</Heading>
                  <Text>27/07/2024, 11:31AM</Text>
                </Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Ignition Duration</Heading>
                  <Text>5 Secs</Text>
                </Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Ignition Off Location</Heading>
                  <Text>Central Park, New York City</Text>
                </Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Ignition Off Lat/Long</Heading>
                  <Text>Latitude: 40.785091 Longitude: -73.968285</Text>
                </Box>
              </Box>
              <Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Vehicle No</Heading>
                  <Text>XYZ12D9</Text>
                </Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Ignition On Time</Heading>
                  <Text>27/07/2024, 11:31AM</Text>
                </Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Ignition Duration</Heading>
                  <Text>5 Secs</Text>
                </Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Ignition Off Location</Heading>
                  <Text>Central Park, New York City</Text>
                </Box>
                <Box mt={2}>
                  <Heading fontSize={20}>Ignition Off Lat/Long</Heading>
                  <Text>Latitude: 40.785091 Longitude: -73.968285</Text>
                </Box>
              </Box>
            </Flex>

            <hr style={{ margin: "10px 0px" }} />

            <Flex justifyContent={"center"}>
              <Box>
                <Flex justifyContent={"center"}>
                  <Message variant="Bold" size={150} />
                </Flex>
                <Text textAlign={"center"}>No Comments Found</Text>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex
              border={"1px solid #ddd"}
              px={2}
              borderRadius={10}
              width={"100%"}
              alignItems={"center"}
            >
              <Input
                border={0}
                _focus={{ boxShadow: "none" }}
                placeholder="Enter Comments"
                width={"100%"}
              />
              <Send variant="Bold" color="#4CAF50" />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Ignition;
