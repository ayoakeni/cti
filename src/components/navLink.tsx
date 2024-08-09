import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props: {
  show: boolean;
  icon: any;
  name: string;
  link: string;
}) => {
  return (
    <Link to={props.link}>
      <Button
        width={"100%"}
        justifyContent={props.show ? "left" : "center"}
        mt={5}
        leftIcon={props.icon}
        borderRadius={5}
        // transition={"all .4s"}
        bg={"none"}
        py={6}
        fontSize={15}
        color={props.show ? "#fff" : "#000"}
        _hover={{
          bg: "#4CAF50",
          color: "#fff",
        }}
        gap={2}
        pr={props.show ? 0 : 3}
        fontWeight={400}
      >
        {props.show ? props.name : ""}
      </Button>
    </Link>
  );
};

export default NavLink;
