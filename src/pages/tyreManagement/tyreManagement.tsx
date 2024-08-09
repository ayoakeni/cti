import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Layout from '../../layouts/dashboard/sideBar'
import TyreFilter from '../../layouts/tyre/tyreFilter'
import { AddCircle, Car } from 'iconsax-react'
const TyreManagement = () => {
    return (
        <Layout name='Tyre Management' needed={false} vehicle={null}>
            <Box>
                <TyreFilter />

                <Box bg={"#fff"} p={5} border={"1px solid #ddd"} mt={5} borderRadius={10}>
                    <Flex justifyContent={"space-between"}>
                        <Text>Tyre No</Text>
                        <Text>Tyre Type</Text>
                        <Text>Tyre Assigned to</Text>
                        <Text>Tyre life run</Text>
                        <Text>Distance Travelled</Text>
                        <Text>Cost Per Km/hr</Text>
                        <Text>Tread  Path</Text>
                        <Text>Actions</Text>
                    </Flex>
                </Box>

                <Box bg={"#fff"} border={"1px solid #ddd"} width={"100%"} height={400} mt={5} borderRadius={10}>
                    <Flex justifyContent={"center"} alignItems={"center"}>
                        <Box textAlign={"center"} mt={50}>
                            <Flex justifyContent={"center"}>
                                <Car size={100} />
                            </Flex>
                            <Heading my={5}>No Tyre Added Yet</Heading>
                            <Text>Click below to add tire or click  bulk upload on top right to add multiple tyre details</Text>
                            <Flex justifyContent={"center"} mt={5}>
                                <Button rightIcon={<AddCircle size={15} />} fontSize={12} bg={"#4CAF50"} color={"#fff"} border={"1px solid #ddd"} borderRadius={10}>Add Tyre</Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Layout>
    )
}

export default TyreManagement