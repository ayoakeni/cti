import React from "react";
import { Box, CloseButton, Flex, Heading, Text } from "@chakra-ui/react";
import AlertBox from "../../components/recentAlert/alertBox";

const RecentAlertsPopup = ({
  display,
  onClick,
}: {
  display: string;
  onClick: () => void;
}) => {
  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      transition={"all .4s"}
      zIndex={999}
      display={display}
      width={"100vw"}
      height={"100vh"}
    >
      <Flex justifyContent={"center"} mt={10}>
        <Box
          width={800}
          height={"90vh"}
          bg={"#fff"}
          borderRadius={10}
          boxShadow={"0px 0px 10px #ddd"}
        >
          <Flex
            justifyContent={"space-between"}
            bg={"#F5F5F5"}
            alignItems={"center"}
            p={5}
            borderTopRadius={10}
          >
            <Text>Alert</Text>
            <CloseButton onClick={onClick} />
          </Flex>

          <Box
            mt={5}
            px={10}
            overflowY={"scroll"}
            height={"80%"}
            width={"100%"}
            borderRadius={40}
          >
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
        </Box>
      </Flex>
    </Box>
  );
};

export default RecentAlertsPopup;
