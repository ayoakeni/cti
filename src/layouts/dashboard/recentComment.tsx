import { Box } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../components/boxHeader";
import Comment from "../../components/comment";

const RecentComment = () => {
  return (
    <Box
      height={400}
      width={"100%"}
      py={5}
      boxShadow={"lg"}
      bg={"#fff"}
      px={3}
      borderRadius={10}
      mt={5}
    >
      <BoxHeader onClick={() => {}} name="Recent Comments" />

      <Box height={"90%"} overflowY={"scroll"} borderRadius={20}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Box>
    </Box>
  );
};

export default RecentComment;
