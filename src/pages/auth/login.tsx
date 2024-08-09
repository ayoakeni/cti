import React, { useState } from "react";
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
import { Eye, EyeSlash, Lock1, Sms } from "iconsax-react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import ImageSlider from "../../components/imageSlider";
import { useAuth } from "../../hooks/authentication";
import { ILoginUser } from "../../types/auth";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
});

const CustomInput = ({ label, toggleVisibility, ...props }) => {
  //@ts-ignore
  const [field, meta] = useField(props);
  return (
    <FormControl mt={5}>
      <FormLabel fontSize={12} color="#4CAF50">
        {label}
      </FormLabel>
      <Flex
        alignItems="center"
        gap={2}
        bg={"#fff"}
        px={4}
        borderRadius={10}
        borderColor={meta.touched && meta.error ? "red.500" : "#ddd"}
        borderWidth={meta.touched && meta.error ? "2px" : "1px"}
      >
        {props.icon}
        <Input
          {...field}
          {...props}
          border={0}
          width="100%"
          bg={"#fff"}
          fontSize={12}
          py={6}
          _focus={{ boxShadow: "none" }}
          _hover={{
            borderColor: meta.touched && meta.error ? "red.500" : "gray.300",
          }}
        />
        {toggleVisibility && (
          <Box cursor="pointer" onClick={toggleVisibility}>
            {props.type === "password" ? (
              <EyeSlash size={20} />
            ) : (
              <Eye size={20} />
            )}
          </Box>
        )}
      </Flex>
      <Text mt={2} color={"red"} fontWeight={600}>
        <ErrorMessage name={field.name} component="div" />
      </Text>
    </FormControl>
  );
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const loginUser = useAuth();
  const [message, setMessage] = useState("");
  const iconSize = 20;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (values, { setSubmitting }) => {
    setMessage("");
    setLoading(true);
    const login: any = await loginUser.login(values);
    if (login === "Login successful") {
      console.log(login);
      window.location.replace("/dashboard");
    } else {
      console.log(login);
      setMessage(login);
    }
    setLoading(false);
    setSubmitting(false);
  };

  const initialValues: ILoginUser = {
    email: "",
    password: "",
  };

  return (
    <Box>
      <Flex>
        <ImageSlider />
        <Box
          px={{ lg: "100px", md: "100px", sm: 10, base: 5 }}
          mt={{ lg: 100, md: 100, sm: 50, base: 50 }}
          width={{ lg: "40vw", md: "100vw", sm: "100vw", base: "100vw" }}
        >
          <Box width={200}>
            <Logo />
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* //@ts-ignore */}
                <CustomInput
                  label="Username or Email"
                  name="email"
                  type="email"
                  placeholder="you@gmail.com"
                  icon={<Sms size={iconSize} color="#4CAF50" variant="Bold" />}
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="******************"
                  icon={
                    <Lock1 size={iconSize} color="#4CAF50" variant="Bold" />
                  }
                  toggleVisibility={togglePasswordVisibility}
                />

                <Flex width="100%" justifyContent="space-between" py={5}>
                  <Checkbox>
                    <Text fontSize={12}>Remember Me</Text>
                  </Checkbox>
                  <Text>
                    <Link to="/reset-password">Forgotten Password?</Link>
                  </Text>
                </Flex>
                <Text fontWeight={700} textAlign={"left"} color={"red"} mb={5}>
                  {message}
                </Text>

                <Button
                  bg="#4CAF50"
                  width="100%"
                  py={6}
                  type="submit"
                  fontSize={12}
                  disabled={isSubmitting || loading}
                  borderRadius={10}
                  color="#fff"
                  _hover={{ bg: "#4CAF50" }}
                >
                  {loading ? <Spinner size="sm" /> : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
          <Text textAlign={"center"} mt={5}>
            <Link to={"/signup"}>Don't have an account? Create One</Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
