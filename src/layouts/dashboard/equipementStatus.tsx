import { Box } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../components/boxHeader";
import StatusBox from "../../components/statusBox";

const EquipementStatus = () => {
  return (
    <Box
      height={400}
      width={"100%"}
      py={5}
      boxShadow={"lg"}
      px={3}
      bg={"#fff"}
      borderRadius={10}
      mt={5}
    >
      <BoxHeader name="Equipement Status" onClick={() => {}} />
      <Box height={"90%"} overflowY={"scroll"} borderRadius={20}>
        <StatusBox name="Device Connection" />
        <StatusBox name="Power Status" />
        <StatusBox name="Device Health" />
        <StatusBox name="Location" />
        <StatusBox name="Geofence" />
      </Box>
    </Box>
  );
};

export default EquipementStatus;
