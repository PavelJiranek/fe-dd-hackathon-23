import React from "react";
import { Button } from "@chakra-ui/react";

export const OutlineButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({
    onClick,
    children,
}) => {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            borderColor={"primary"}
            borderWidth={"2px"}
            color={"primary"}
        >
            {children}
        </Button>
    );
};
