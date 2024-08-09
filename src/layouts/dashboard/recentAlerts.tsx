import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RcAlert from "../../components/rcAlert";
import BoxHeader from "../../components/boxHeader";
import RecentAlertsPopup from "../popups/recentAlertsPopup";
import AlertBox from "../../components/recentAlert/alertBox";

const RecentAlerts = () => {
  const [display, setDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={"#fff"}
      height={400}
      width={"100%"}
      py={5}
      boxShadow={"lg"}
      px={3}
      borderRadius={10}
      mt={5}
    >
      <BoxHeader
        onClick={() => {
          onOpen();
        }}
        name="Recent Alerts"
      />

      <Box mb={5}>
        <Modal
          size={"3xl"}
          motionPreset="slideInBottom"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Alert</ModalHeader>
            <ModalCloseButton />
            <ModalBody mb={6}>
              <Box>
                <AlertBox
                  isButton={false}
                  color="#4CAF50"
                  title="Geofence Setup"
                  description="Swift Logistics sets up geofences around specific delivery zones within the city. One such geofence surrounds the downtown area, defined to ensure that delivery trucks remain within the boundaries for efficient and timely deliveries"
                />
                <AlertBox
                  isButton={false}
                  color="#4CAF50"
                  title="Breach Occurence"
                  description="One of the delivery trucks,Vehicle XYZ, assigned to deliver goods within the downtown area, unexpectedly 
                crosses the geofence boundary and exits the designated delivery zone."
                />
                <AlertBox
                  isButton={true}
                  color="#4CAF50"
                  title="Geofence Setup"
                  description="One of the delivery trucks, Vehicle XYZ, assigned to deliver goods within the downtown area, unexpectedly crosses the geofence boundary and exits the designated delivery zone."
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>

      <Box height={"90%"} overflowY={"scroll"} pb={5} borderRadius={20}>
        <RcAlert />
        <RcAlert />
        <RcAlert />
        <RcAlert />
        <RcAlert />
      </Box>
    </Box>
  );
};

export default RecentAlerts;
