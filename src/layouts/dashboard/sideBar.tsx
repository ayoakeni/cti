import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ArrowCircleLeft, Category, Location, LoginCurve } from "iconsax-react";
import React, { ReactNode, useState } from "react";
import Logo from "../../components/logo";
import { Link, useNavigate } from "react-router-dom";
import Header from "./header";
import { useAuth } from "../../hooks/authentication";
import NavBar from "../static/navBar";

const Layout = ({
  children,
  needed,
  name,
  vehicle,
}: {
  children: ReactNode;
  name: string;
  needed: boolean;
  vehicle: boolean | null;
}) => {
  const [show, setShow] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <Box overflow={"hidden"} width={"100vw"} height={"100vh"}>
      {/* <Flex width={"100vw"} justifyContent={"space-between"}> */}
      <Flex p={2}>
        {/* <Text>Hello</Text> */}
        <NavBar setShow={setShow} show={show} />
        <Box
          width={{
            lg: show ? "85vw" : "94%",
            md: show ? "85vw" : "94%",
            sm: "100vw",
            base: "100vw",
          }}
          transition={"all .4s"}
        >
          <Box height={"100vh"} width={"100%"} pt={5} overflowY={"scroll"}>
            <Header name={name} vehicle={vehicle} needed={needed} />
            <Box px={5}>{children}</Box>
          </Box>
        </Box>
      </Flex>
      {/* </Flex> */}
    </Box>
  );
};

export default Layout;
