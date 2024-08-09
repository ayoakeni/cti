import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { IProduct } from "../../types/ecommerce";
import Product from "../../components/ecommerce/product";

const ProductSection = (details: {
  cartigoryName: string;
  products: IProduct[];
}) => {
  return (
    <Box mt={10}>
      <Heading>{details.cartigoryName}</Heading>
      <Grid
        gridGap={5}
        mt={5}
        gridTemplateColumns={{
          lg: "1fr 1fr 1fr 1fr",
          md: "1fr 1fr 1fr",
          sm: "1fr",
          base: "1fr",
        }}
      >
        {details.products.map((product: IProduct, key: any) => (
          <Product product={product} key={key} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
