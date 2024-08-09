import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  Radio,
  Switch,
} from "@chakra-ui/react";
import { Calendar, CloseCircle, Filter } from "iconsax-react";
import React from "react";

const MaintenanceFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={5}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap={5} alignItems={"center"}>
          <Text
            p={2}
            px={3}
            cursor={"pointer"}
            borderRadius={100}
            bg={"#fff"}
            border={"1px solid #ddd"}
          >
            All
          </Text>
          <Text
            p={2}
            px={3}
            cursor={"pointer"}
            borderRadius={100}
            bg={"#F44336"}
            color={"#fff"}
          >
            Upcoming
          </Text>
          <Text
            p={2}
            px={3}
            cursor={"pointer"}
            borderRadius={100}
            bg={"#FFEB3B"}
            color={"#fff"}
          >
            Overdue
          </Text>
          <Text
            p={2}
            px={3}
            cursor={"pointer"}
            borderRadius={100}
            bg={"#4CAF50"}
            color={"#fff"}
          >
            Upcoming
          </Text>
        </Flex>
        <Flex gap={5} alignItems={"center"}>
          <Text
            bg={"#fff"}
            p={2}
            px={3}
            borderRadius={100}
            cursor={"pointer"}
            border={"1px solid #ddd"}
          >
            Search by Vehicle
          </Text>
          <Button
            rightIcon={<Filter size={15} />}
            _hover={{ bg: "#fff" }}
            borderRadius={100}
            bg={"#fff"}
            fontWeight={400}
            fontSize={12}
            border={"1px solid #ddd"}
          >
            Filters
          </Button>
          <Button
            _hover={{ bg: "#4CAF50" }}
            borderRadius={100}
            bg={"#4CAF50"}
            color={"#fff"}
            fontWeight={400}
            fontSize={12}
          >
            Add Services
          </Button>
          <Button
            _hover={{ bg: "#fff" }}
            borderRadius={100}
            bg={"#fff"}
            fontWeight={400}
            border={"1px solid #ddd"}
            fontSize={12}
          >
            Create Schedule
          </Button>
          <Button
            rightIcon={<Calendar size={15} />}
            _hover={{ bg: "#fff" }}
            borderRadius={100}
            onClick={onOpen}
            bg={"#fff"}
            fontWeight={400}
            fontSize={12}
            border={"1px solid #ddd"}
          >
            View Service Schedule
          </Button>
        </Flex>
      </Flex>
      <Modal size={"5xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Schedule</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Routine Service"
                  type="text"
                  fontSize={12}
                />
              </FormControl>
              <Flex gap={5} mt={5}>
                <FormControl>
                  <FormLabel>Choose Vehicle</FormLabel>
                  <Select>
                    <option value="">Routine Service</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Service Tasks</FormLabel>
                  <Flex
                    p={2}
                    bg={"#ddd"}
                    alignItems={"center"}
                    borderRadius={100}
                  >
                    <Button
                      border={"1px solid #ddd"}
                      bg={"#fff"}
                      _hover={{ bg: "#fff" }}
                      alignItems={"center"}
                      borderRadius={100}
                      fontSize={12}
                      fontWeight={400}
                      px={2}
                      height={8}
                      rightIcon={
                        <CloseCircle variant="Bold" color="red" size={18} />
                      }
                    >
                      Oil Change
                    </Button>
                  </Flex>
                </FormControl>
              </Flex>

              <Box my={5}>
                <Heading fontWeight={500} fontSize={20}>
                  Schedule
                </Heading>
                <Flex gap={5} mt={2}>
                  <Radio>Routine Service</Radio>
                  <Radio>Custom</Radio>
                </Flex>
                <Text color={"#FFEB3B"} fontSize={"15px !important"}>
                  Recurring service will be due either by time, by mileage, or
                  by engine running hours whichever comes first
                </Text>
              </Box>

              <Flex gap={5}>
                <Box
                  border={"1px solid #ddd"}
                  p={5}
                  borderRadius={10}
                  width={"50%"}
                >
                  <Flex gap={5} alignItems={"cen"}>
                    <Text>By Time</Text>
                    <Switch />
                  </Flex>

                  <Box>
                    <Text>Every</Text>
                    <Flex gap={5}>
                      <Input placeholder="3" />
                      <Select>
                        <option value="">Months</option>
                      </Select>
                    </Flex>
                  </Box>
                  <Box mt={2}>
                    <Text>Reminder in advance (Optional)</Text>
                    <Flex gap={5}>
                      <Input placeholder="3" />
                      <Select>
                        <option value="">Days</option>
                      </Select>
                    </Flex>
                  </Box>
                  <Flex gap={5} alignItems={"center"} mt={5}>
                    <Text>By Mileage</Text>
                    <Switch />
                  </Flex>
                  <Box mt={2}>
                    <Text>Every</Text>
                    <Flex gap={5}>
                      <Input placeholder="10,000 kilometer" />
                    </Flex>
                  </Box>
                  <Box mt={2}>
                    <Text>Reminder in advance (Optional)</Text>
                    <Flex gap={5}>
                      <Input placeholder="8,000 kilometer" />
                    </Flex>
                  </Box>

                  <Flex gap={5} alignItems={"center"} mt={5}>
                    <Text>By Engine Hours</Text>
                    <Switch />
                  </Flex>
                  <Box mt={2}>
                    <Text>Every</Text>
                    <Flex gap={5}>
                      <Input placeholder="10,000 Hours" />
                    </Flex>
                  </Box>
                  <Box mt={2}>
                    <Text>Reminder in advance (Optional)</Text>
                    <Flex gap={5}>
                      <Input placeholder="8,000 Hours" />
                    </Flex>
                  </Box>
                  {/* Edn of 1 */}
                </Box>
                <Box
                  border={"1px solid #ddd"}
                  p={5}
                  borderRadius={10}
                  width={"50%"}
                >
                  <Heading fontWeight={500} fontSize={20}>
                    Notification
                  </Heading>

                  <Flex mt={5} gap={5} alignItems={"center"}>
                    <Text>System Notification</Text>
                    <Switch />
                  </Flex>
                  <Box py={2}>
                    <hr />
                  </Box>
                  <Flex gap={5} alignItems={"center"}>
                    <Text>Email Notification</Text>
                    <Switch />
                  </Flex>

                  <Box>
                    <Text>Email</Text>
                    <Box>
                      <Flex p={2} bg={"#ddd"} borderRadius={100} mt={2}>
                        <Text
                          p={2}
                          border={"1px solid #ddd"}
                          borderRadius={100}
                          bg={"#fff"}
                        >
                          Fransicjoe@gmail.com
                        </Text>
                      </Flex>
                    </Box>
                  </Box>

                  <Flex mt={5} gap={5} justifyContent={"flex-end"}>
                    <Button
                      fontSize={12}
                      fontWeight={400}
                      bg={"#fff"}
                      border={"1px solid #ddd"}
                    >
                      Cancel
                    </Button>
                    <Button
                      fontSize={12}
                      fontWeight={400}
                      bg={"#4CAF50"}
                      _hover={{ bg: "#4CAF50" }}
                    >
                      Done
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MaintenanceFilter;
