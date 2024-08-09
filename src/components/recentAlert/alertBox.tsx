import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React from "react";

const AlertBox = (props: {
  title: string;
  description: string;
  color: string;
  isButton: boolean;
}) => {
  const toast = useToast();
  return (
    <Box
      border={"1px solid #ddd"}
      width={"100%"}
      p={5}
      mb={5}
      borderRadius={10}
    >
      <Flex gap={3} alignItems={"center"}>
        <Box borderRadius={"50%"} width={5} height={5} bg={props.color}></Box>
        <Text fontWeight={"700 !important"}>{props.title}</Text>
      </Flex>
      <Box py={2} borderRadius={20} fontWeight={700} cursor={"pointer"}>
        <Text fontSize={12}>{props.description}</Text>
        {props.isButton ? (
          <Flex gap={5} mt={5}>
            <Button
              onClick={() => {
                toast({
                  title: "Admin Denied Permission",
                  status: "error",
                  isClosable: true,
                  position: "top",
                });
              }}
              _hover={{ bg: "#F44336" }}
              color={"#fff"}
              fontSize={12}
              fontWeight={400}
              height={8}
              bg={"#F44336"}
            >
              Deny
            </Button>
            <Button
              onClick={() => {
                toast({
                  title: "Admin Granted Permission",
                  status: "info",
                  isClosable: true,
                  position: "top",
                });
              }}
              _hover={{ bg: "#1A73E8" }}
              color={"#fff"}
              fontSize={12}
              fontWeight={400}
              height={8}
              bg={"#1A73E8"}
            >
              Allow
            </Button>
          </Flex>
        ) : null}
      </Box>
    </Box>
  );
};

export default AlertBox;
