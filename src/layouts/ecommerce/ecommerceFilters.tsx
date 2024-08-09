import { Box, Button, Flex } from "@chakra-ui/react";
import { Category } from "iconsax-react";
import React from "react";

const EcommerceFilters = () => {
  const size = 20;
  return (
    <Box mt={5}>
      <Flex gap={{ lg: 10, md: 10, sm: 5, base: 5 }} flexWrap={"wrap"}>
        <Button
          leftIcon={<Category size={size} />}
          bg={"#4CAF50"}
          _hover={{ bg: "#4CAF50" }}
          color={"#fff"}
          borderRadius={100}
        >
          All Categories
        </Button>
        <Button
          leftIcon={<Category size={size} />}
          bg={"#4CAF50"}
          _hover={{ bg: "#4CAF50" }}
          color={"#fff"}
          borderRadius={100}
        >
          All Products
        </Button>
      </Flex>
    </Box>
  );
};

export default EcommerceFilters;
