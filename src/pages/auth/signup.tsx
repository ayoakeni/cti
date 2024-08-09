import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import BasicInformation from "../../layouts/auth/basicInformation";
import SecurityPage from "../../layouts/auth/securityPage";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/authentication";

const Signup = () => {
  const { signupUser, signUp } = useAuth();
  const handleSignUp = async (values: typeof signupUser) => {
    const sign: any = await signUp(values);
    if (sign) {
      // window.location.replace("/verifyEmail");
    } else {
      console.log(sign);
    }
  };

  return (
    <Box>
      <Flex justifyContent={"center"} mt={{ lg: 50, md: 50, sm: 5, base: 5 }}>
        <Box p={5}>
          <Heading fontSize={40} fontWeight={400} textAlign={"center"}>
            Create Account
          </Heading>
          <Box>
            <BasicInformation />
          </Box>
          <Text textAlign={"center"} fontSize={20} mt={5}>
            <Link to={"/"}>Already have an account? Login</Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;
