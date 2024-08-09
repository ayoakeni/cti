import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SearchInput from "../../components/searchInput";
import UserAvater from "../../components/userAvater";
import FIlters from "./fIlters";
import {
  Add,
  Alarm,
  ArrowSquareLeft,
  Bookmark2,
  Category2,
  Diagram,
  GasStation,
  Graph,
  HambergerMenu,
  Location,
  LoginCurve,
  MessageQuestion,
  PathTool,
  Personalcard,
  Setting,
  TaskSquare,
  UserSquare,
  VideoPlay,
} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo";
import NavLink from "../../components/navLink";
import { useAuth } from "../../hooks/authentication";

const Header = (props: {
  needed: boolean;
  name: string;
  vehicle: boolean | null;
}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const { logout } = useAuth();
  const size = 20;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box px={5} pt={5} width={"100%"}>
      <Flex
        alignItems={"center"}
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "nowrap", base: "nowrap" }}
        gap={5}
        width={"100%"}
        justifyContent={"space-between"}
      >
        {props.needed ? (
          <FIlters />
        ) : (
          <Flex width={"100%"} alignItems={"center"} gap={4}>
            <Box
              display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}
              cursor={"pointer"}
              onClick={onOpen}
            >
              <ArrowSquareLeft size={40} />
            </Box>
            <Heading fontSize={{ lg: 30, md: 30, sm: 20, base: 20 }}>
              {props.name}
            </Heading>
          </Flex>
        )}
        {!props.vehicle ? (
          <UserAvater />
        ) : props.vehicle ? (
          <Button
            bg={"#4CAF5066"}
            leftIcon={<Add size={15} />}
            color={"#fff"}
            fontSize={12}
            onClick={() => {
              navigate("/create-vehicle");
            }}
            _hover={{ bg: "#4CAF5066" }}
          >
            Add Vehicle
          </Button>
        ) : null}
      </Flex>

      <>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody
              bg={"#4CAF5066"}
              p={2}
              pt={5}
              overflowY={"scroll"}
              height={"100%"}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Box width={"100%"}></Box>
              </Flex>
              <Box transition={"all .4s"} width={200}>
                <Logo />
                <NavLink
                  icon={<Category2 variant="Bold" size={size} />}
                  link="/dashboard"
                  name="Dashboard"
                  show={show}
                />
                <NavLink
                  icon={<Location variant="Bold" size={size} />}
                  link="/vehicle-tracking"
                  name="Vehicle Tracking"
                  show={show}
                />
                <NavLink
                  icon={<VideoPlay variant="Bold" size={size} />}
                  link="/dashboard"
                  name="Video Telematics"
                  show={show}
                />
                <NavLink
                  icon={<Personalcard variant="Bold" size={size} />}
                  link="/dashboard"
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
                  link="/dashboard"
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
                  link="/dashboard"
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
                  link="/dashboard"
                  name="Analysis"
                  show={show}
                />
                <NavLink
                  icon={<PathTool variant="Bold" size={size} />}
                  link="/dashboard"
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
                  color: "#4CAF5066",
                }}
                gap={2}
                fontWeight={400}
              >
                {show ? "Logout" : ""}
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default Header;
