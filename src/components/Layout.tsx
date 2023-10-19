import React from "react";
import { Box } from "@chakra-ui/react";

import { Sidebar } from "./Sidebar.js";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box w={"100%"} h={"100%"} display={"flex"}>
            <Sidebar />
            <Box p={4}>{children}</Box>
        </Box>
    );
};
