import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../../components/logo";

const NotFound = () => {
  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Box mt={100}>
          <Flex justifyContent={"center"}>
            <Logo />
          </Flex>
          <Image
            width={500}
            src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7901.jpg?w=740&t=st=1721039962~exp=1721040562~hmac=d56fcc3aeb0fd89e2d4d3c5c5be61576f125e9651ec2a9104b37ab7d828491ad"
          />
          <Flex justifyContent={"center"} mt={5}>
            <Button
              py={10}
              width={300}
              borderRadius={40}
              bg={"#4CAF50"}
              fontSize={20}
              onClick={() => {
                window.location.href = "/dashboard";
              }}
              _hover={{ bg: "#4CAF50" }}
            >
              Back to Safety
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default NotFound;
