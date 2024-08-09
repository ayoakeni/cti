import React from "react";
import Layout from "../../layouts/dashboard/sideBar";
import { Box, Flex, Grid } from "@chakra-ui/react";
import DriverView from "../../layouts/video-telematics/driverView";

const VideoTelematics = () => {
  return (
    <Layout name="Video Telematics" needed={false} vehicle={null}>
      <Box pb={10}>
        <Grid
          gridTemplateColumns={{
            lg: "1fr 1fr 1fr",
            md: "1fr 1fr 1fr",
            sm: "1fr 1fr",
            base: "1fr",
          }}
          gridGap={10}
        >
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
          <DriverView
            date="30/07/2024; 11:28 AM"
            text="Sharp turn"
            driverView="/driver.png"
            img="/person.png"
            id="XYZ12D9"
          />
        </Grid>
      </Box>
    </Layout>
  );
};

export default VideoTelematics;
