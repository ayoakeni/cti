import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  Button,
  useDisclosure,
  Text,
  Heading,
} from "@chakra-ui/react";
import { More } from "iconsax-react";
import React from "react";

const MaintainanceTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={5} bg={"#fff"} p={5} borderRadius={10} border={"1px solid #ddd"}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Maintenace Table</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Vehicle Number</Th>
              <Th>Service Tasks</Th>
              <Th>Status</Th>
              <Th>Completed</Th>
              <Th>Date</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr cursor={"pointer"}>
              <Td>Routine Service</Td>
              <Td>XYZ90P</Td>
              <Td>3</Td>
              <Td>Overdue</Td>
              <Td>4 Months</Td>
              <Td>July 1st, 2024</Td>
              <Td textAlign={"center"}>
                <Popover>
                  <PopoverTrigger>
                    <Flex justifyContent={"center"}>
                      <Box
                        cursor={"pointer"}
                        bg={"#4CAF50"}
                        px={3}
                        borderRadius={40}
                        py={1}
                      >
                        <More values="Bold" color="#fff" />
                      </Box>
                    </Flex>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Actions</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Flex flexDir={"column"} gap={2}>
                          <Button>Mark as complete</Button>
                          <Button onClick={onOpen}>View Details</Button>
                          <Button>View Schedule</Button>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Td>
            </Tr>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Reminder Details:</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>
                    <Flex justifyContent={"space-between"}>
                      <Text>Routine Service</Text>
                      <Flex alignItems={"center"} gap={1}>
                        <Box
                          width={3}
                          height={3}
                          bg={"red"}
                          borderRadius={100}
                        ></Box>
                        <Text>Overdue</Text>
                      </Flex>
                    </Flex>

                    <Heading my={5}>XYZ90P</Heading>
                    <Box>
                      <Heading fontSize={20}>Service Tasks</Heading>
                      <Flex alignItems={"center"} mt={2}>
                        <Text p={2} borderRadius={100} bg={"#4CAF5066"} px={4}>
                          Task: Oil Change
                        </Text>
                      </Flex>
                    </Box>
                    <Box mt={5}>
                      <Heading fontSize={20}>Reminder</Heading>
                      <Flex alignItems={"center"} mt={2}>
                        <Text p={2} borderRadius={100} bg={"#4CAF5066"} px={4}>
                          Task: Oil Change
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </ModalBody>
                <ModalFooter justifyContent={"space-between"}>
                  <Button
                    fontSize={12}
                    borderRadius={100}
                    border={"1px solid #ddd"}
                    bg={"none"}
                    _hover={{
                      bg: "none",
                    }}
                  >
                    View Schedule
                  </Button>
                  <Button
                    fontSize={12}
                    borderRadius={100}
                    bg={"#4CAF50"}
                    _hover={{ bg: "#4CAF50" }}
                  >
                    Mark as Complete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MaintainanceTable;
