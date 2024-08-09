import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../../components/logo";
import {
  Alarm,
  ArrowCircleLeft,
  ArrowCircleLeft2,
  Bookmark,
  Bookmark2,
  Car,
  Category,
  Category2,
  CloseCircle,
  Diagram,
  GasStation,
  Graph,
  InfoCircle,
  Location,
  LoginCurve,
  MessageQuestion,
  PathTool,
  Personalcard,
  PresentionChart,
  Setting,
  Setting2,
  Task,
  TaskSquare,
  UserSquare,
  VideoPlay,
} from "iconsax-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authentication";
import NavLink from "../../components/navLink";

const NavBar = ({ show, setShow }: { show: boolean; setShow: any }) => {
  // const [show, setShow] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const size = 20;
  return (
    <Box>
      <Box
        transition={"all .2s"}
        width={"100%"}
        bg={"#4CAF5066"}
        height={"100vh"}
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
      >
        <Box
          p={2}
          pt={5}
          overflowY={"scroll"}
          height={"100%"}
          onMouseEnter={() => {
            setShow(true);
          }}
          onMouseLeave={() => {
            setShow(false);
          }}
        >
          <Flex
            alignItems={"center"}
            justifyContent={show ? "space-between" : "center"}
          >
            <Box width={show ? 200 : 20}></Box>
          </Flex>
          <Box transition={"all .4s"} width={show ? 200 : 20}>
            <Logo />
            <NavLink
              icon={<Category2 variant="Bold" size={size} />}
              link="/dashboard"
              name="Dashboard"
              show={show}
            />
            {/* <Box
              onClick={() => {
                window.location.replace("/vehicle-tracking");
              }}
            > */}
            <NavLink
              icon={<Location variant="Bold" size={size} />}
              link="/vehicle-tracking"
              name="Vehicle Tracking"
              show={show}
            />
            {/* </Box> */}
            <NavLink
              icon={<VideoPlay variant="Bold" size={size} />}
              link="/video-telematics"
              name="Video Telematics"
              show={show}
            />
            <NavLink
              icon={<Personalcard variant="Bold" size={size} />}
              link="/ecommerce"
              name="Equipment"
              show={show}
            />
            <NavLink
              icon={<Graph variant="Bold" size={size} />}
              link="/dashboard"
              name="ERP"
              show={show}
            />
            <NavLink
              icon={<Personalcard variant="Bold" size={size} />}
              link="/vehicles"
              name="Vehicles"
              show={show}
            />
            <NavLink
              icon={<TaskSquare variant="Bold" size={size} />}
              link="/tyre"
              name="Fleet Management"
              show={show}
            />
            <NavLink
              icon={<UserSquare variant="Bold" size={size} />}
              link="/dashboard"
              name="Mobile App"
              show={show}
            />
            <NavLink
              icon={<Alarm variant="Bold" size={size} />}
              link="/alert"
              name="100 + alerts"
              show={show}
            />
            <NavLink
              icon={<GasStation variant="Bold" size={size} />}
              link="/fuel-monitoring"
              name="Fuel Monitoring"
              show={show}
            />
            <NavLink
              icon={<Diagram variant="Bold" size={size} />}
              link="/analysis"
              name="Analysis"
              show={show}
            />
            <NavLink
              icon={<PathTool variant="Bold" size={size} />}
              link="/maintainance"
              name="Maintainance"
              show={show}
            />
            <NavLink
              icon={<MessageQuestion variant="Bold" size={size} />}
              link="/dashboard"
              name="Referral"
              show={show}
            />
            <NavLink
              icon={<Setting variant="Bold" size={size} />}
              link="/dashboard"
              name="Settings"
              show={show}
            />
            <NavLink
              icon={<Bookmark2 variant="Bold" size={size} />}
              link="/dashboard"
              name="White Label"
              show={show}
            />
          </Box>
          <Button
            width={"100%"}
            justifyContent={show ? "left" : "center"}
            mt={5}
            leftIcon={<LoginCurve variant="Bold" size={20} />}
            borderRadius={5}
            bg={"none"}
            fontSize={12}
            onClick={() => {
              logout();
              navigate("/");
            }}
            color={show ? "#fff" : "#000"}
            py={6}
            _hover={{
              bg: "#fff",
              color: "#4CAF50",
            }}
            gap={2}
            fontWeight={400}
          >
            {show ? "Logout" : ""}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
