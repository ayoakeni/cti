import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../../hooks/authentication";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signUpSchema } from "../../schema/authSchema.schema";

const SecurityPage = () => {
  const { signupUser, setSignupUser, signUp } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (values: typeof signupUser) => {
    setLoading(true);
    const sign: any = await signUp(values);
    if (sign) {
      setLoading(false);
      window.location.replace("/verifyEmail");
      setLoading(false);
    } else {
      console.log(sign);
      setLoading(false);
    }
  };

  return (
    <Box>
      <Formik
        initialValues={signupUser}
        validationSchema={signUpSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange }) => (
          <Form>
            <Flex gap={5} p={5} flexWrap={"wrap"}>
              <Box width={400}>
                <FormControl isRequired mt={5}>
                  <FormLabel>Password</FormLabel>
                  <Field
                    as={Input}
                    type={!isChecked ? "password" : "text"}
                    name="password"
                    value={signupUser.password}
                    onChange={(e) => {
                      handleChange(e);
                      setSignupUser({
                        ...signupUser,
                        password: e.target.value,
                      });
                    }}
                    py={7}
                    placeholder="********************"
                  />
                  <Text mt={2} color={"red"} fontWeight={600}>
                    <ErrorMessage name="password" component="div" />
                  </Text>
                </FormControl>
              </Box>
              <Box width={400}>
                <FormControl isRequired mt={5}>
                  <FormLabel>Confirm Password</FormLabel>
                  <Field
                    as={Input}
                    type={!isChecked ? "password" : "text"}
                    name="password_confirmation"
                    value={signupUser.password_confirmation}
                    onChange={(e) => {
                      handleChange(e);
                      setSignupUser({
                        ...signupUser,
                        password_confirmation: e.target.value,
                      });
                    }}
                    py={7}
                    placeholder="*********************"
                  />
                  <Text mt={2} color={"red"} fontWeight={600}>
                    <ErrorMessage
                      name="password_confirmation"
                      component="div"
                    />
                  </Text>
                </FormControl>
                <FormControl mt={5}>
                  <Checkbox
                    onChange={() => {
                      setIsChecked(!isChecked);
                    }}
                    size={"lg"}
                  >
                    Show Password
                  </Checkbox>
                  <Button
                    mt={5}
                    bg={"#4CAF50"}
                    py={7}
                    width={"100%"}
                    type="submit"
                    isDisabled={
                      signupUser.password !== signupUser.password_confirmation
                    }
                    color={"#fff"}
                    _hover={{ bg: "#34CAF50" }}
                  >
                    {loading ? <Spinner /> : "Create Account"}
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

export default SecurityPage;
