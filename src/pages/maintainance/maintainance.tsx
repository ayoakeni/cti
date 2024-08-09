import React from "react";
import Layout from "../../layouts/dashboard/sideBar";
import { Box } from "@chakra-ui/react";
import MaintenanceFilter from "../../layouts/maintainance/maintenanceFilter";
import MaintainanceTable from "../../layouts/maintainance/maintainanceTable";

const Maintainance = () => {
  return (
    <Layout name="Maintainance" needed={false} vehicle={null}>
      <Box>
        <MaintenanceFilter />
        <MaintainanceTable />
      </Box>
    </Layout>
  );
};

export default Maintainance;
