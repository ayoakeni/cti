import React from "react";
import Layout from "../../layouts/dashboard/sideBar";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import RecentAlerts from "../../layouts/dashboard/recentAlerts";
import { BarChartBox } from "../../components/charts/barChartBox";
import { PieChartBox } from "../../components/charts/pieChartBox";
import RecentComment from "../../layouts/dashboard/recentComment";
import { LineChartBox } from "../../components/charts/lineChartBox";
import EquipementStatus from "../../layouts/dashboard/equipementStatus";
import BusDisplay from "../../layouts/dashboard/busDisplay";
import PendingBox from "../../components/pendingBox";
import DueBox from "../../layouts/dashboard/dueBox";
import OpenIssues from "../../layouts/dashboard/openIssues";
import VehicleAss from "../../layouts/dashboard/vehicleAss";

const Dashboard = () => {
  return (
    <Layout name="Dashboard" vehicle={null} needed={false}>
      <Box>
        <Grid
          gridTemplateColumns={{
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "100%",
            base: "100%",
          }}
          gridGap={5}
        >
          <Box>
            <RecentAlerts />
            <PieChartBox />
            <BusDisplay />
            <PieChartBox />
            <PendingBox />
            <RecentComment />
            <DueBox />
          </Box>
          <Box>
            <BarChartBox color="#1A73E8" />
            <BarChartBox color="#4CAF50" />
            <EquipementStatus />
            <LineChartBox />
            <VehicleAss />
            <OpenIssues />
            <PendingBox />
          </Box>
        </Grid>
        {/* </Flex> */}
      </Box>
    </Layout>
  );
};

export default Dashboard;
