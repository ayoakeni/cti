// src/components/ImageSlider.js
import React, { useState, useEffect } from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "./logo";

const images = [
  "/tck.png",
  "/tck2.png",
  "/truck.png",
  // Add more images as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayImage = useBreakpointValue({ base: "none", md: "block" });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <Box
      position="relative"
      width={{ lg: "60vw", md: "60vw", sm: "100vw", base: "100vw" }}
      height="100vh"
      display={{ lg: displayImage, md: "none", sm: "none", base: "none" }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            width: "60vw",
            height: "100%",
          }}
        >
          <Box
            position={"fixed"}
            bg={"#fff"}
            borderRadius={10}
            bottom={40}
            left={20}
            width={250}
          >
            <Logo />
          </Box>
          <Image
            src={image}
            alt={`Slide ${index}`}
            objectFit="cover"
            width="60vw"
            height="100%"
          />
        </motion.div>
      ))}
    </Box>
  );
};

export default ImageSlider;
