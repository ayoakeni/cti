import { Box, Flex, Input, Spinner } from "@chakra-ui/react";
import { SearchNormal1 } from "iconsax-react";
import React, { useState } from "react";

const SearchInput = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Box border={"1px solid #ddd"} borderRadius={10} px={5}>
      <Flex alignItems={"center"}>
        {loading ? <Spinner size={"sm"} /> : <SearchNormal1 size={15} />}
        <Input
          placeholder="Search for vehicles"
          width={250}
          fontSize={12}
          onChange={(e) => {
            e.target.value.length > 0 ? setLoading(true) : setLoading(false);
          }}
          border={0}
          _focus={{ boxShadow: "none" }}
        />
      </Flex>
    </Box>
  );
};

export default SearchInput;
