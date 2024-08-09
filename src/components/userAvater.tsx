import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { LoginCurve, Logout, Notification, Profile, User } from "iconsax-react";
import React from "react";
import { useAuth } from "../hooks/authentication";
import { useNavigate } from "react-router-dom";

const UserAvater = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <Box>
      <Flex gap={5} alignItems={"center"}>
        <Box>
          <Popover closeDelay={1}>
            <PopoverTrigger>
              <Button
                bg={"#fff"}
                boxShadow={"lg"}
                p={1}
                py={6}
                color={"#fff"}
                borderRadius={40}
                _hover={{ bg: "#fff" }}
              >
                <Box p={2} bg={"#4CAF50"} borderRadius={100}>
                  <Notification variant="Bold" size={20} />
                </Box>
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <Box p={5}>
                  <Flex>
                    <Heading fontSize={15} fontWeight={500}>
                      Notifications
                    </Heading>
                    <Box></Box>
                  </Flex>
                  <Box mt={2}>
                    <UnorderedList fontSize={12}>
                      <ListItem py={2}>New Vehicles Incoming</ListItem>
                      <ListItem py={2}>Vehicle AE2Z just left Abuja</ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </PopoverContent>
            </Portal>
          </Popover>
        </Box>
        <Box>
          <Popover>
            <PopoverTrigger>
              <Box boxShadow={"lg"} bg={"#fff"} p={2} borderRadius={100}>
                <Avatar
                  name={localStorage.fName}
                  cursor={"pointer"}
                  bg={"#4CAF50"}
                  color={"#fff"}
                  fontSize={"12px !important"}
                  size={"sm"}
                />
              </Box>
            </PopoverTrigger>
            <Portal>
              <PopoverContent width={200} boxShadow={"lg"} border={0}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Flex gap={2} alignItems={"center"}>
                    <Profile size={20} variant="Bold" color="#4CAF50" />
                    <Text textTransform={"capitalize"}>
                      Welcome, {localStorage.getItem("fName")}
                    </Text>
                  </Flex>
                </PopoverBody>
                <PopoverFooter
                  color={"red"}
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  cursor={"pointer"}
                >
                  <Flex gap={2} alignItems={"center"}>
                    <Logout />
                    <Text>Logout</Text>
                  </Flex>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserAvater;
