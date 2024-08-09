import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Spinner,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IVerifyEmail } from "../../types/auth";
import { useRegenrateOtp, useVerifyEmail } from "../../hooks/authentication";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";

const VerifyEmail = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState<IVerifyEmail>({
    email: "",
    otp: "",
  });

  const navigate = useNavigate();

  const handleCLick = async () => {
    setLoading(true);
    const verify = await useVerifyEmail(user);
    console.log(verify.data.message);
    try {
      toast({
        title: "Verified Successfully",
        description: verify.data.message,
        duration: 2000,
        status: "success",
        position: "top-right",
        isClosable: true,
      });
      navigate("/");
      setLoading(false);
    } catch (error) {
      toast({
        title: "Verifying Email Faliure",
        description: verify.response.data.message,
        duration: 2000,
        status: "error",
        position: "top-right",
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const handleRegenrateOtp = async () => {
    console.log("regenerate otp");
    const verify = await useRegenrateOtp(email);
    console.log(verify.response.data.message);
    console.log(verify.response.status);
    if (verify.response.status != 200) {
      toast({
        title: "Error Regnrating OTP",
        description: verify.response.data.message,
        duration: 2000,
        status: "error",
        position: "top-right",
        isClosable: true,
      });
      setLoading(false);
      onClose();
    } else {
      toast({
        title: "Regeneration Successfully",
        description: verify.response.data.message,
        duration: 2000,
        status: "success",
        position: "top-right",
        isClosable: true,
      });
      onClose();
      navigate("/dashboard");
    }
  };
  return (
    <Box mt={100} width={"100%"}>
      <Flex p={5} width={"100%"} flexWrap={"wrap"} justifyContent={"center"}>
        <Box width={{ lg: 400, md: 400, sm: "100%", base: "100%" }}>
          <Heading textAlign={"center"} fontSize={20}>
            Verify Your Email
          </Heading>

          <Flex mb={5} mt={10} width={"100%"}>
            <Box width={"100%"}>
              <Text>Enter Email</Text>
              <Input
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                mt={2}
                py={6}
                fontSize={12}
                placeholder={"you@gmail.com"}
                width={"100%"}
              />
            </Box>
          </Flex>
          <Text my={5}>Enter OTP</Text>
          <Flex width={"100%"} justifyContent={"center"} fontSize={20}>
            <Input
              type="number"
              fontSize={12}
              py={6}
              onChange={(e) => {
                setUser({ ...user, otp: e.target.value });
              }}
            />
          </Flex>

          <Text
            textAlign={"right"}
            cursor={"pointer"}
            onClick={() => {
              onOpen();
            }}
            mt={10}
          >
            Didn't receive OTP? Regenerate
          </Text>

          <Flex justifyContent={"center"} width={"100%"}>
            <Box width={"100%"}>
              <Button
                width={"100%"}
                py={6}
                isDisabled={
                  user.email.length > 0 && user.otp.length > 0 ? false : true
                }
                bg={"#4CAF50"}
                color={"#fff"}
                onClick={() => {
                  setLoading(!loading);
                  console.log(user);
                  handleCLick();
                }}
                fontSize={12}
                _hover={{ bg: "#4CAF50" }}
                mt={5}
              >
                {loading ? <Spinner /> : "Continue"}
              </Button>
              <Button
                bg={"none"}
                border={"1px solid #ddd"}
                width={"100%"}
                mt={5}
                onClick={() => {
                  navigate("/");
                }}
                py={6}
                fontSize={12}
                _hover={{ bg: "none" }}
                borderRadius={10}
                alignItems={"center"}
                leftIcon={<ArrowLeft size={15} />}
              >
                Back to Login
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt={200}>
            <ModalHeader fontSize={20}>Regerate OTP</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box width={"100%"}>
                <Text>Enter Email</Text>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  mt={2}
                  placeholder={"you@gmail.com"}
                  py={6}
                  fontSize={12}
                  width={"100%"}
                />
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                bg={"#4CAF50"}
                color={"#fff"}
                _hover={{ bg: "#4CAF50" }}
                mr={3}
                fontSize={12}
                height={8}
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                isDisabled={email.length > 2 ? false : true}
                fontSize={12}
                onClick={() => {
                  handleRegenrateOtp();
                }}
                variant="ghost"
              >
                Regenrate OTP
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default VerifyEmail;
