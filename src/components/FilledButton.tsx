import React from "react";
import { Button } from "@chakra-ui/react";

export const FilledButton: React.FC<{
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}> = ({ onClick, children, type = "button" }) => (
    <Button
        backgroundColor={"primary"}
        color={"white"}
        _hover={{ backgroundColor: "primaryDarker" }}
        mr={3}
        onClick={onClick}
        type={type}
    >
        {children}
    </Button>
);
