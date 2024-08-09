import { Box, Flex, Heading, Radio, Text } from "@chakra-ui/react";
import React from "react";
import AnalysisHeader from "../../components/analysis/analysisHeader";
import TravelDetails from "../../components/analysis/travelDetails";
import { ArrowLeft2, ArrowRight2, NoteRemove } from "iconsax-react";

const Trips = () => {
  return (
    <Box
      p={5}
      bg={"#fff"}
      border={"1px solid #ddd"}
      //   height={"100%"}
      height={1000}
      borderRadius={10}
    >
      <AnalysisHeader title="On Trip vs Off Trip" />

      <Flex justifyContent={"center"} my={5}>
        <Box
          width={400}
          height={400}
          bg={"#4CAF5066"}
          border={"20px solid #ddd"}
          borderRadius={200}
          mb={5}
        >
          <Flex justifyContent={"center"} mt={100}>
            <Box textAlign={"center"}>
              <Heading fontSize={100}>0</Heading>
              <Text>Trips</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex pb={5} justifyContent={"center"} gap={5}>
        <Radio borderColor={"#ddd"}>
          <Text>Successful</Text>
        </Radio>
        <Radio borderColor={"#ddd"}>
          <Text>Unsuccessful</Text>
        </Radio>
        <Radio borderColor={"#ddd"}>
          <Text>Ongoing</Text>
        </Radio>
        <Radio borderColor={"#ddd"}>
          <Text>Delayed</Text>
        </Radio>
      </Flex>

      <hr />

      <Box my={5}>
        <Flex alignItems={"center"} gap={5}>
          <Radio borderColor={"#ddd"}>
            <Text>Delayed</Text>
          </Radio>
        </Flex>

        <Flex justifyContent={"center"} mt={10}>
          <Box>
            <NoteRemove size={250} />
            <Heading textAlign={"center"}>No Data Found</Heading>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Trips;
