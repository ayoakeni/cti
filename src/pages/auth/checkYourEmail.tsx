import React, { useEffect, useState } from "react";
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
import { ArrowLeft, Eye, EyeSlash, Lock, Lock1, Sms } from "iconsax-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/logo";
import ImageSlider from "../../components/imageSlider";

const CheckYourEmail = () => {
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
          mt={{ lg: 100, md: 100, sm: 50, base: 50 }}
          width={{ lg: "40vw", md: "100vw", sm: "100vw", base: "100vw" }}
        >
          <Logo />
          <Box mt={10}>
            <Heading color={"#4CAF50"} textAlign={"center"}>
              Forgot Password?
            </Heading>

            <Text textAlign={"center"} mt={5}>
              Unlock your account with a simple password reset. Please enter
              your username or email
            </Text>
            <Button
              bg={"#4CAF50"}
              width={"100%"}
              py={7}
              my={5}
              onClick={() => {
                navigate("/confirm-password");
              }}
              borderRadius={10}
              color={"#fff"}
              _hover={{ bg: "#4CAF50" }}
            >
              Continue
            </Button>
            <Button
              bg={"none"}
              border={"1px solid #ddd"}
              width={"100%"}
              onClick={() => {
                navigate("/");
              }}
              py={7}
              borderRadius={10}
              leftIcon={<ArrowLeft />}
            >
              Back to Login
            </Button>
            <Text textAlign={"center"} mt={5}>
              <Link to={""}>
                Didn't recieve the mail?
                <span
                  style={{ marginLeft: 10, fontWeight: 800, color: "#4CAF50" }}
                >
                  Click to resend
                </span>
              </Link>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CheckYourEmail;
