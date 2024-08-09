import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AnalysisHeader from "../../components/analysis/analysisHeader";
import { ArrowLeft, ArrowLeft2, ArrowRight2 } from "iconsax-react";
import TravelDetails from "../../components/analysis/travelDetails";

const DistanceTravel = () => {
  return (
    <Box
      bg={"#fff"}
      p={5}
      height={400}
      border={"1px solid #ddd"}
      borderRadius={10}
    >
      <AnalysisHeader title="Distance Travel Header" />
      <Box>
        <Flex
          justifyContent={"space-between"}
          border={"1px solid #ddd"}
          py={2}
          px={5}
          borderRadius={40}
        >
          <Text>Vehicles</Text>
          <Text>Distance (km/hr)</Text>
        </Flex>

        <Box>
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
          <TravelDetails name="xyz" number="355525" />
        </Box>

        <Flex gap={2} mt={5} justifyContent={"flex-end"}>
          <Text>1 of 20</Text>
          <Flex gap={2}>
            <Box cursor={"pointer"}>
              <ArrowLeft2 size={15} />
            </Box>
            <Box cursor={"pointer"}>
              <ArrowRight2 size={15} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default DistanceTravel;
