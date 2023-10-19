import React, { useEffect, useState } from "react";
import { Stack, Box } from "@chakra-ui/react";
import { useBackend } from "@gooddata/sdk-ui";

import { GdLogoPink } from "../assets/GdLogoPink.js";
import { AppRoutes } from "../constants/constants.js";
import { WorkspacesIco } from "../assets/WorkspacesIco.js";
import { DeploymentsIco } from "../assets/DeploymentsIco.js";
import { UserFiltersIco } from "../assets/UserFiltersIco.js";

import { TextWithIcon } from "./TextWithIcon.js";
import { MenuLink } from "./MenuLink.js";

export const Sidebar: React.FC = () => {
    const [org, setOrg] = useState<string>("");
    const backend = useBackend();

    useEffect(() => {
        async function getOrg() {
            const org = await backend?.organizations().getCurrentOrganization();
            const descriptor = await org?.getDescriptor();
            setOrg(descriptor?.title || "");
        }
        getOrg();
    }, []);

    return (
        <Box width={"250px"} padding={7} borderRight={"1px solid #EBEFF4"}>
            <TextWithIcon text={org} icon={<GdLogoPink />} />
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
