import React from "react";
import Layout from "../../layouts/dashboard/sideBar";
import { Box, Flex, Grid } from "@chakra-ui/react";
import FIlters from "../../layouts/dashboard/fIlters";
import AnalysisBox from "../../layouts/analysis/analysisBox";
import DistanceBox from "../../layouts/analysis/distanceBox";
import DistanceTravel from "../../layouts/analysis/distanceTravel";
import OnTrip from "../../layouts/analysis/onTrip";
import Trips from "../../layouts/analysis/trips";
import RatingTable from "../../layouts/analysis/ratingTable";

const Analysis = () => {
  return (
    <Layout name="Analysis" needed={false} vehicle={true}>
      <Box w={"100%"} pb={10}>
        <Box mt={5}>
          <FIlters />
        </Box>
        <Box mt={5}>
          <Flex gap={5} width={"100%"} py={1} overflowX={"scroll"}>
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
            <AnalysisBox />
          </Flex>
        </Box>

        <Box
          // overflowY={"scroll"} height={400}
          mt={5}
        >
          <Grid
            mt={5}
            gridGap={5}
            gridTemplateColumns={{
              lg: "1fr 1fr",
              md: "1fr 1fr",
              sm: "1fr",
              base: "1fr",
            }}
          >
            <DistanceBox />
            <DistanceTravel />
            <OnTrip />
            <Trips />
            <Trips />
            <OnTrip />
          </Grid>
          <RatingTable />
        </Box>
      </Box>
    </Layout>
  );
};

export default Analysis;
