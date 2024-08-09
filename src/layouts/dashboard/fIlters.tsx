import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ArrowDown2, Calendar, Export, Setting4 } from "iconsax-react";
import React, { useState } from "react";

const FIlters = () => {
  return (
    <Box>
      <Flex
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        gap={5}
      >
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ArrowDown2 size={15} />}
              fontWeight={400}
              fontSize={12}
              bg={"#fff"}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
            >
              All Trips
            </MenuButton>
            <MenuList fontSize={12}>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ArrowDown2 size={15} />}
              fontWeight={400}
              bg={"#fff"}
              fontSize={12}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
            >
              Search Vehicles
            </MenuButton>
            <MenuList fontSize={12}>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ArrowDown2 size={15} />}
              fontWeight={400}
              bg={"#fff"}
              fontSize={12}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
            >
              Status
            </MenuButton>
            <MenuList fontSize={12}>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Input bg={"#fff"} fontSize={12} type="date" placeholder="Today" />
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<Setting4 size={15} />}
              fontWeight={400}
              bg={"#fff"}
              fontSize={12}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
            >
              Filter
            </MenuButton>
            <MenuList fontSize={12}>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Button
            rightIcon={<Export size={15} />}
            fontWeight={400}
            bg={"#fff"}
            fontSize={12}
            leftIcon={<Calendar size={15} />}
            border={"1px solid #ddd"}
            _hover={{ bg: "none" }}
          >
            Export
          </Button>
        </Box>
        <Box>
          <Button
            fontWeight={400}
            fontSize={12}
            bg={"#fff"}
            border={"1px solid #ddd"}
            _hover={{ bg: "none" }}
          >
            {new Date().toDateString()} English
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default FIlters;
