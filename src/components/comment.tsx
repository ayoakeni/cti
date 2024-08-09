import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Comment = () => {
  return (
    <Box bg={"#fff"} px={5} py={3} borderRadius={20} mt={5} cursor={"pointer"}>
      <Flex justifyContent={"space-between"} gap={5} alignItems={"center"}>
        <Image
          width={50}
          height={50}
          objectFit={"cover"}
          borderRadius={200}
          src="https://s1.r29static.com/bin/entry/43a/0,0,2000,2400/720x864,85/1536749/image.webp"
        />
        <Box>
          <Text fontSize={12} fontWeight={700}>
            Joseph Cole commented on issue A
          </Text>
          <Text fontSize={{ lg: "15px !important" }}>
            Speak with the officer to confirm if this possible
          </Text>
        </Box>
        <Box>
          <Text fontSize={10}>4 days ago</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Comment;
