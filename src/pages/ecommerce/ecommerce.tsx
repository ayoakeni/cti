import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../../layouts/dashboard/sideBar";
import Hero from "../../layouts/ecommerce/hero";
import EcommerceFilters from "../../layouts/ecommerce/ecommerceFilters";
import ProductSection from "../../layouts/ecommerce/productSection";
import { IProduct } from "../../types/ecommerce";

const Ecommerce = () => {
  const products: IProduct[] = [
    {
      image: "https://example.com/oil-change.jpg",
      name: "Oil Change",
      price: "$29.99",
    },
    {
      image: "https://example.com/air-filter.jpg",
      name: "Air Filter Replacement",
      price: "$19.99",
    },
    {
      image: "https://example.com/tire-rotation.jpg",
      name: "Tire Rotation",
      price: "$24.99",
    },
    {
      image: "https://example.com/brake-pads.jpg",
      name: "Brake Pads Replacement",
      price: "$99.99",
    },
    {
      image: "https://example.com/battery.jpg",
      name: "Car Battery",
      price: "$89.99",
    },
    {
      image: "https://example.com/spark-plugs.jpg",
      name: "Spark Plugs",
      price: "$49.99",
    },
    {
      image: "https://example.com/coolant.jpg",
      name: "Coolant Flush",
      price: "$59.99",
    },
    {
      image: "https://example.com/transmission-fluid.jpg",
      name: "Transmission Fluid Change",
      price: "$79.99",
    },
    {
      image: "https://example.com/wiper-blades.jpg",
      name: "Wiper Blades",
      price: "$14.99",
    },
    {
      image: "https://example.com/alignment.jpg",
      name: "Wheel Alignment",
      price: "$89.99",
    },
  ];
  return (
    <Layout name="Ecommerce" needed={false} vehicle={null}>
      <Box mt={10} pb={10}>
        <Hero />
        <EcommerceFilters />
        <ProductSection cartigoryName="Engine Oil" products={products} />
        <ProductSection cartigoryName="Air Filter" products={products} />
        <ProductSection cartigoryName="Oil Filter" products={products} />
        <ProductSection cartigoryName="Head Lights" products={products} />
        <ProductSection cartigoryName="Maintenance" products={products} />
        <ProductSection cartigoryName="Tires And Wheels" products={products} />
        <ProductSection cartigoryName="Brake Pad" products={products} />
      </Box>
    </Layout>
  );
};

export default Ecommerce;
