import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SearchInput from "../../components/searchInput";
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
  Message,
  Refresh,
} from "iconsax-react";
import Layout from "../../layouts/dashboard/sideBar";
import StatusBox from "../../components/vehicles/statusBox";
import Operator from "../../components/vehicles/operator";

const Vehicles = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Layout name="Vehicles" vehicle={true} needed={false}>
      <Box mt={5}>
        <Box>
          <Flex gap={5} mb={5}>
            <Button
              fontSize={12}
              bg={"none"}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
            >
              All
            </Button>
            <Button
              fontSize={12}
              bg={"none"}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
            >
              Assigned
            </Button>
            <Button
              fontSize={12}
              bg={"none"}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
            >
              Unassigned
            </Button>
            <Button
              fontSize={12}
              bg={"none"}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
            >
              Archived
            </Button>
          </Flex>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Flex alignItems={"center"} flexWrap={"wrap"} gap={5}>
              <SearchInput />
              <Button
                fontSize={12}
                bg={"none"}
                border={"1px solid #ddd"}
                _hover={{ bg: "none" }}
              >
                Vehicle Type
              </Button>
              <Button
                fontSize={12}
                bg={"none"}
                border={"1px solid #ddd"}
                _hover={{ bg: "none" }}
              >
                Vehicle Status
              </Button>
              <Button
                fontSize={12}
                bg={"none"}
                border={"1px solid #ddd"}
                _hover={{ bg: "none" }}
              >
                Filter
              </Button>

              <IconButton
                bg={"none"}
                border={"1px solid #ddd"}
                fontSize={12}
                _hover={{ bg: "none" }}
                onClick={() => {
                  setLoading(!loading);
                }}
                icon={loading ? <Spinner size={"sm"} /> : <Refresh size={15} />}
                aria-label="refresh"
              />
            </Flex>
            <Flex flexWrap={"wrap"} gap={5} alignItems={"center"}>
              <Text fontSize={20}>1 of 20</Text>
              <Flex gap={5} align={"center"}>
                <IconButton
                  icon={<ArrowLeft2 color="#4CAF50" />}
                  aria-label="Icon Left"
                />
                <IconButton
                  icon={<ArrowRight2 color="#4CAF50" />}
                  aria-label="Icon Right"
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Box mt={10}>
          <TableContainer borderRadius={10}>
            <Table bg={"#CBC8C8"} size={"sm"}>
              <Thead>
                <Tr>
                  <Th py={6}>Name</Th>
                  <Th>Vehicle Number</Th>
                  <Th>License Plate</Th>
                  <Th>Status</Th>
                  <Th>Group</Th>
                  <Th>Type</Th>
                  <Th>Entry Date</Th>
                  <Th>Operator</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr bg={"#fff"} cursor={"pointer"}>
                  <Td>
                    <Checkbox borderRadius={100}>XYZ</Checkbox>
                  </Td>
                  <Td>MSN02457890PV</Td>
                  <Td>YV024H</Td>
                  <Td>
                    <StatusBox status="online" statusText="online" />
                  </Td>
                  <Td>Group A</Td>
                  <Td>Toyota</Td>
                  <Td>01-07-2024</Td>
                  <Td>
                    <Operator />
                  </Td>
                  <Td>
                    <Message color="#4CAF50" variant="Bold" />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Vehicles;
