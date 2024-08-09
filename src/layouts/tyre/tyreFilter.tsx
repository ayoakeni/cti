import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { AddCircle, Export } from 'iconsax-react'
import React from 'react'

const TyreFilter = () => {
    return (
        <Box mt={5} cursor={"pointer"}>
            <Flex justifyContent={"space-between"}>
                <Flex gap={5} alignItems={"center"}>
                    <Text px={5} borderRadius={10} py={2} bg={"#fff"} border={"1px solid #ddd"}>All</Text>
                    <Text px={5} borderRadius={10} py={2} bg={"#fff"} border={"1px solid #ddd"}>On Vehicles</Text>
                    <Text px={5} borderRadius={10} py={2} bg={"#fff"} border={"1px solid #ddd"}>In Inventory</Text>
                </Flex>
                <Flex gap={5} alignItems={"center"}>
                    <Button rightIcon={<Export size={15} />} fontSize={12} bg={"#fff"} border={"1px solid #ddd"} borderRadius={10}>Export</Button>
                    <Text px={5} borderRadius={10} py={2} bg={"#fff"} border={"1px solid #ddd"}>Filter</Text>
                    <Text px={5} borderRadius={10} py={2} bg={"#fff"} border={"1px solid #ddd"}>Manage By Vehicles</Text>
                    <Text px={5} borderRadius={10} py={2} bg={"#fff"} border={"1px solid #ddd"}>Bulk Upload</Text>
                    <Button rightIcon={<AddCircle size={15} />} fontSize={12} bg={"#4CAF50"} color={"#fff"} border={"1px solid #ddd"} borderRadius={10}>Add Tyre</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default TyreFilter