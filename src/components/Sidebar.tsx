import React from "react";
import { Stack, Box } from "@chakra-ui/react";

import { GdLogoPink } from "../assets/GdLogoPink.js";
import { AppRoutes } from "../constants/constants.js";
import { WorkspacesIco } from "../assets/WorkspacesIco.js";
import { DeploymentsIco } from "../assets/DeploymentsIco.js";
import { UserFiltersIco } from "../assets/UserFiltersIco.js";
import { useOrgName } from "../hooks/useOrgName.js";

import { TextWithIcon } from "./TextWithIcon.js";
import { MenuLink } from "./MenuLink.js";

export const Sidebar: React.FC = () => {
    const orgName = useOrgName();
    return (
        <Box width={"250px"} padding={7} borderRight={"1px solid #EBEFF4"}>
            <TextWithIcon text={orgName} icon={<GdLogoPink />} />
            <Stack>
                <MenuLink
                    label={"Workspaces"}
                    renderIcon={(isActive: boolean) => <WorkspacesIco isActive={isActive} />}
                    route={AppRoutes.Workspaces}
                />
                <MenuLink
                    label={"Environments"}
                    renderIcon={(isActive: boolean) => <DeploymentsIco isActive={isActive} />}
                    route={AppRoutes.Environments}
                />
                <MenuLink
                    label={"User Filters"}
                    renderIcon={(isActive: boolean) => <UserFiltersIco isActive={isActive} />}
                    route={AppRoutes.UserFilters}
                />
            </Stack>
        </Box>
    );
};
