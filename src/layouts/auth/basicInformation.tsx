import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../../hooks/authentication";
import { ISignupUser } from "../../types/auth";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import * as Yup from "yup";

// Validation schema
const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  middleName: Yup.string(),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
  phone: Yup.string().required("Phone Number is required"),
});

const CustomInput = ({ label, ...props }) => {
  //@ts-ignore
  const [field, meta] = useField(props);
  return (
    <FormControl isRequired mt={5}>
      <FormLabel fontSize={12}>{label}</FormLabel>
      <Input
        {...field}
        {...props}
        bg={"#fff"}
        borderColor={meta.touched && meta.error ? "red.500" : "gray.200"}
        _hover={{
          borderColor: meta.touched && meta.error ? "red.500" : "gray.300",
        }}
        fontSize={12}
        _focus={{
          borderColor: meta.touched && meta.error ? "red.500" : "blue.500",
        }}
      />
      <Text mt={2} color={"red"} fontWeight={600}>
        <ErrorMessage name={field.name} component="div" />
      </Text>
    </FormControl>
  );
};

const BasicInformation = () => {
  const { setSignupUser, signupUser, signUp } = useAuth();
  const [message, setMessage] = useState("");

  const initialValues: ISignupUser = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    middleName: "",
    password_confirmation: "",
    phone: "",
  };

  const handleSignUp = async (values: ISignupUser) => {
    setSignupUser(values);
    setLoading(true);
    console.log(signupUser);
    const sign: any = await signUp(values);
    if (sign) {
      setMessage(sign);
      window.location.replace("/verifyEmail");
      setLoading(false);
    } else {
      setMessage(sign);
      setLoading(false);
      console.log(sign);
    }
  };

  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSignUp}
      >
        {({ isSubmitting, handleChange }) => (
          <Form>
            <Flex
              gap={5}
              justifyContent={"center"}
              flexWrap={{
                lg: "nowrap",
                md: "nowrap",
                sm: "wrap",
                base: "wrap",
              }}
              width={"100%"}
            >
              <Box
                width={{ lg: 400, md: "100%", sm: "100%", base: "100%" }}
                p={5}
              >
                <CustomInput
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                />
                <CustomInput
                  label="Middle Name"
                  name="middleName"
                  placeholder="Middle Name"
                />
                <CustomInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                />
                <CustomInput
                  label="Email Address"
                  name="email"
                  placeholder="Email Address"
                />
              </Box>
              <Box
                width={{ lg: 400, md: "100%", sm: "100%", base: "100%" }}
                p={5}
              >
                <CustomInput
                  label="Phone Number"
                  name="phone"
                  placeholder="Phone Number"
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type={!isChecked ? "password" : "text"}
                  placeholder="********************"
                />
                <CustomInput
                  label="Confirm Password"
                  name="password_confirmation"
                  type={!isChecked ? "password" : "text"}
                  placeholder="*********************"
                />
                <FormControl mt={5}>
                  <Button
                    type="submit"
                    width={"100%"}
                    fontSize={12}
                    py={6}
                    bg={"#4CAF50"}
                    color={"#fff"}
                    disabled={isSubmitting || loading}
                    _hover={{ bg: "#4CAF50" }}
                  >
                    {loading ? <Spinner size="sm" /> : "Create Account"}
                  </Button>
                </FormControl>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BasicInformation;
