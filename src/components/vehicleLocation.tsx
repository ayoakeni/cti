import { Box, Flex, Text } from "@chakra-ui/react";
import { Location, TickCircle, Truck } from "iconsax-react";
import React from "react";

const VehicleLocation = () => {
  return (
    <Box
      bg={"#fff"}
      border={"1px solid #ddd"}
      p={5}
      borderRadius={10}
      mt={5}
      cursor={"pointer"}
    >
      <Flex gap={5}>
        <Box>
          <TickCircle color="#1A73E8" size={30} />
          <Box mt={3}>
            <Truck color="#000000" size={30} />
          </Box>
        </Box>

        <Box width={"100%"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={3}>
              <Box width={5} height={5} bg={"#4CAF50"}></Box>
              <Text fontWeight={700} fontSize={17}>
                Joseph Cole
              </Text>
            </Flex>
            <Flex align={"center"}>
              <Text>01:43:57</Text>
              <Text>20/09/2023 </Text>
            </Flex>
          </Flex>

          <Flex width={"100%"} justifyContent={"space-between"} mt={3}>
            <Box fontSize={12}>
              <Text>Moving - from Sept 18 22:00</Text>
              <Text>5th Street, Royal National Theatre, London</Text>
            </Box>
            <Location size={30} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default VehicleLocation;
