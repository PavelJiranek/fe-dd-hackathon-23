import React from "react";
import { Box } from "@chakra-ui/react";

import { Sidebar } from "./Sidebar.js";
import { LogoutButton } from "./LogoutButton.js";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box w={"100%"} h={"100%"} display={"flex"}>
            <Sidebar />
            <Box p={4}>{children}</Box>
            <Box style={{ position: "absolute", top: 20, right: 20 }}>
                <LogoutButton />
            </Box>
        </Box>
    );
};
