import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../logo";
import { IProduct } from "../../types/ecommerce";

const Product = (product: { product: IProduct }) => {
  return (
    <Box
      minW={"100%"}
      textAlign={"center"}
      bg={"#fff"}
      p={3}
      borderRadius={20}
      border={"1px solid #ddd"}
    >
      <Box width={200}>
        <Logo />
      </Box>
      <Flex justifyContent={"center"}>
        {/* <Image src={product.product.image} /> */}
        <Box
          width={"100%"}
          height={200}
          bg={"#ddd"}
          m={5}
          borderRadius={20}
        ></Box>
      </Flex>
      <Heading fontSize={20} fontWeight={400}>
        {product.product.name}
      </Heading>
      <Heading fontSize={20} fontWeight={600} color={"#4CAF50"}>
        {product.product.price}
      </Heading>
    </Box>
  );
};

export default Product;
