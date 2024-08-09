import React from "react";
import Layout from "../../layouts/dashboard/sideBar";
import { Box, Flex, Grid } from "@chakra-ui/react";
import FuelBox from "../../layouts/fuel-monitoring/fuelBox";
import { GasStation, LocationTick, Moon } from "iconsax-react";
import MonthlyFuelBudget from "../../layouts/fuel-monitoring/monthlyFuelBudget";
import FuelConsuption from "../../layouts/fuel-monitoring/fuelConsuption";
import FuelEfficencyEconomy from "../../layouts/fuel-monitoring/fuelEfficencyEconomy";
import FuelAlert from "../../layouts/fuel-monitoring/fuelAlert";
import FIlters from "../../layouts/dashboard/fIlters";

const FuelMonitoring = () => {
  return (
    <Layout name="Fuel Monitoring" needed={false} vehicle={false}>
      <Box mt={5}>
        <FIlters />
      </Box>
      <Box mt={5}>
        <Flex overflowX={"scroll"} width={"100%"} gap={5}>
          <FuelBox
            dataTitle="7,500L"
            desc="Fuel Usage"
            icon={<GasStation variant="Bold" color="#4CAF50" size={20} />}
          />
          <FuelBox
            dataTitle="41,890 KM"
            desc="Distance"
            icon={<LocationTick variant="Bold" color="#4CAF50" size={20} />}
          />
          <FuelBox
            dataTitle="2hrs: 30min: 02sec"
            desc="Idle Time"
            icon={<Moon variant="Bold" color="#4CAF50" size={20} />}
          />
        </Flex>

        <Grid
          gridTemplateColumns={{
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          gridGap={5}
        >
          <Box>
            <MonthlyFuelBudget />
            <FuelAlert />
          </Box>
          <Box>
            <FuelConsuption />
            <Flex gap={5}>
              <FuelEfficencyEconomy />
              <FuelEfficencyEconomy />
            </Flex>
          </Box>
        </Grid>
        {/* 
        <Flex gap={5}>
          <Flex gap={5}>
            <Box>
              <FuelEfficencyEconomy />
              <FuelEfficencyEconomy />
              <FuelEfficencyEconomy />
            </Box>
            <Box>
              <FuelEfficencyEconomy />
              <FuelEfficencyEconomy />
              <FuelEfficencyEconomy />
            </Box>
          </Flex> */}
        {/* </Flex> */}
      </Box>
    </Layout>
  );
};

export default FuelMonitoring;
