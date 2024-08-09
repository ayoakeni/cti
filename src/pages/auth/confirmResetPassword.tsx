import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Eye, EyeSlash, Lock, Lock1, Sms } from "iconsax-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/logo";
import ImageSlider from "../../components/imageSlider";

const ConfirmResetPassword = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const size = 40;
  return (
    <Box>
      <Flex>
        <ImageSlider />
        <Box
          px={{ lg: 20, md: 20, sm: 10, base: 5 }}
          mt={{ lg: 100, md: 100, sm: 100, base: 50 }}
          width={{ lg: "40vw", md: "100vw", sm: "100vw", base: "100vw" }}
        >
          <Logo />

          <Box mt={5}>
            <Heading color={"#4CAF50"} textAlign={"center"}>
              Set A New Password
            </Heading>
            <Flex mt={5} px={5}>
              <ul>
                <li>
                  New password must be different from the previous password.
                </li>
                <li>Password must include alphabet, numbers & characters</li>
              </ul>
            </Flex>
            <FormControl mt={5}>
              <FormLabel color={"#4CAF50"}>New Password</FormLabel>
              <Flex
                alignItems={"center"}
                gap={2}
                bg={"#eee"}
                px={4}
                borderRadius={10}
              >
                <Input
                  border={0}
                  width={"100%"}
                  py={7}
                  _focus={{ boxShadow: "none" }}
                  type={show ? "text" : "password"}
                  placeholder="******************"
                />

                {show ? (
                  <Box
                    cursor={"pointer"}
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Eye />
                  </Box>
                ) : (
                  <Box
                    cursor={"pointer"}
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <EyeSlash />
                  </Box>
                )}
              </Flex>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel color={"#4CAF50"}>Confirm Password</FormLabel>
              <Flex
                alignItems={"center"}
                gap={2}
                bg={"#eee"}
                px={4}
                borderRadius={10}
              >
                <Input
                  border={0}
                  width={"100%"}
                  py={7}
                  _focus={{ boxShadow: "none" }}
                  type={show ? "text" : "password"}
                  placeholder="******************"
                />

                {show ? (
                  <Box
                    cursor={"pointer"}
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Eye />
                  </Box>
                ) : (
                  <Box
                    cursor={"pointer"}
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <EyeSlash />
                  </Box>
                )}
              </Flex>
            </FormControl>

            <Button
              bg={"#4CAF50"}
              width={"100%"}
              py={7}
              mt={5}
              onClick={() => {
                setLoading(!loading);
                navigate("/");
              }}
              borderRadius={10}
              color={"#fff"}
              _hover={{ bg: "#4CAF50" }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ConfirmResetPassword;
