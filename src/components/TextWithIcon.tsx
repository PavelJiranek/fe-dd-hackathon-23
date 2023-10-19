import { Text, Box } from "@chakra-ui/react";
import React from "react";

export const TextWithIcon: React.FC<{ text: string; icon: React.Node }> = ({ text, icon }) => {
    return (
        <Box display={"flex"} paddingBottom={"3rem"}>
            {icon}
            <Text paddingLeft={"10px"} fontSize={"18px"} fontWeight={"400"}>
                {text}
            </Text>
        </Box>
    );
};
