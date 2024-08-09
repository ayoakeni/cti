import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../dashboard/sideBar";

const NewVehicle = () => {
  const navigate = useNavigate();
  return (
    <Layout name="Add New Vehicle" needed={false} vehicle={null}>
      <Box width={"100%"} borderRadius={40} height={"100%"} mt={5} px={5}>
        <Flex
          alignItems={"center"}
          gap={{ lg: 0, md: 0, sm: 10, base: 10 }}
          flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
          justifyContent={"space-between"}
        >
          <Heading fontSize={20}>New Vehicle</Heading>
          <Flex gap={5}>
            <Button
              bg={"none"}
              _hover={{ bg: "none" }}
              px={10}
              color={"#4CAF50"}
              onClick={() => {
                window.history.back();
              }}
              fontSize={12}
              border={"2px solid #4CAF50"}
            >
              Cancel
            </Button>
            <Button
              border={"2px solid #4CAF50"}
              _hover={{ bg: "#4CAF50" }}
              px={10}
              color={"#fff"}
              fontSize={12}
              bg={"#4CAF50"}
            >
              Save
            </Button>
          </Flex>
        </Flex>

        <Flex
          mt={5}
          flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
          gap={5}
        >
          <Box
            borderRadius={20}
            bg={"#fff"}
            width={{ lg: "50%", md: "50%", sm: "100%", base: "100%" }}
            p={5}
          >
            <Heading pt={5} fontSize={20}>
              Vehicle Details
            </Heading>
            <FormControl mt={5}>
              <FormLabel>Vehicle Name</FormLabel>
              <Text fontSize={12}>
                Enter a nickname to differentiate your vehicle
              </Text>
              <Input
                mt={3}
                width={"100%"}
                placeholder="Vehicle Name"
                fontSize={12}
                py={6}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Vehicle Number</FormLabel>
              <Text fontSize={12}>
                Vehicle Identification number or serial number
              </Text>
              <Input
                mt={3}
                width={"100%"}
                placeholder="Vehicle Name"
                fontSize={12}
                py={6}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>License Plate</FormLabel>
              <Text fontSize={12}></Text>
              <Input
                mt={3}
                width={"100%"}
                placeholder="Vehicle Name"
                fontSize={12}
                py={6}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Vehicle Type</FormLabel>
              <Text fontSize={12}>Categorize this vehicle</Text>
              <Select py={6} mt={3} bg={"#F5F5F5"} width={"100%"}>
                <option value="Car">Car</option>
              </Select>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Vehicle Year</FormLabel>
              <Text fontSize={12}>e.g 2020, 2002, 1999</Text>
              <Input type="year" py={6} mt={3} bg={"#F5F5F5"} width={"100%"} />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Vehicle Brand</FormLabel>
              <Text fontSize={12}>e.g Toyota, Chevrolet, Honda</Text>
              <Input
                mt={3}
                width={"100%"}
                placeholder="Vehicle Name"
                fontSize={12}
                py={6}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Vehicle Model</FormLabel>
              <Text fontSize={12}>e.g SUV</Text>
              <Input
                mt={3}
                width={"100%"}
                placeholder="Vehicle Name"
                fontSize={12}
                py={6}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Registration State</FormLabel>
              <Text fontSize={12}>e.g SUV</Text>
              <Input
                mt={3}
                width={"100%"}
                placeholder="Vehicle Name"
                fontSize={12}
                py={6}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Photo</FormLabel>
              <Text fontSize={12}>Add a picture of the vehice</Text>
              <Button
                mt={5}
                bg={"#4CAF50"}
                _hover={{ bg: "#4CAF50" }}
                px={7}
                fontSize={12}
                color={"#fff"}
              >
                Add a Photo
              </Button>
            </FormControl>
          </Box>
          <Box
            borderRadius={20}
            bg={"#fff"}
            width={{ lg: "50%", md: "50%", sm: "100%", base: "100%" }}
            p={5}
          >
            <FormControl mt={5}>
              <FormLabel>Vehicle Status</FormLabel>
              <Select py={6} mt={3} bg={"#F5F5F5"} width={"100%"}>
                <option value="Car">Car</option>
              </Select>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Vehicle Group</FormLabel>
              <Select py={6} mt={3} bg={"#F5F5F5"} width={"100%"}>
                <option value="Car">Car</option>
              </Select>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Ownership</FormLabel>
              <Input
                mt={3}
                width={"100%"}
                placeholder="Vehicle Name"
                fontSize={12}
                py={6}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Operation</FormLabel>
              <Select py={6} mt={3} bg={"#F5F5F5"} width={"100%"}>
                <option value="Car">Car</option>
              </Select>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Color</FormLabel>
              <Input type="year" py={6} mt={3} bg={"#F5F5F5"} width={"100%"} />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Color</FormLabel>
              <Input
                mt={3}
                width={"100%"}
                placeholder="Vehicle Name"
                fontSize={12}
                py={6}
              />
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default NewVehicle;
