import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useIsActiveLink } from "../hooks/useIsActiveLink.js";
export const MenuLink: React.FC<{
    label: string;
    // icon: (isActive: boolean) => React.FC<{ isActive: boolean }>;
    renderIcon: (isActive: boolean) => React.ReactElement;
    route: string;
}> = ({ label, renderIcon, route }) => {
    const navigate = useNavigate();
    const isActive = useIsActiveLink(route);
    return (
        <Button
            justifyContent={"flex-start"}
            color={"#333333"}
            marginBottom={"1rem"}
            variant="link"
            fill={"red"}
            // leftIcon={icon}
            // leftIcon={<Icon isActive={isActive} />}
            leftIcon={renderIcon(isActive)}
            onClick={() => navigate(route)}
            fontSize={"18px"}
            fontWeight={isActive ? "bold" : "400"}
        >
            {label}
        </Button>
    );
};
