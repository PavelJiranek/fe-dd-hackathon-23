import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IWorkspace } from "../../types/workspaces.js";
import { OutlineButton } from "../OutlineButton.js";
import { useBackendStore } from "../../store/useBackendStore.js";
import { AppRoutes, GD_HOST, isDevMode } from "../../constants/constants.js";

export const WorkspaceListItemActions: FC<{ workspace: IWorkspace }> = ({ workspace }) => {
    const { domain } = useBackendStore();
    const navigate = useNavigate();

    const handleOpenClick = () =>
        window.open(`${isDevMode ? GD_HOST : domain}/dashboards/#/workspace/${workspace.id}`, "_blank");

    const handleShowDetailClick = () => {
        navigate(`${AppRoutes.Workspaces}/${workspace.id}`);
    };

    return (
        <Flex gap={2}>
            <OutlineButton onClick={handleOpenClick}>Open</OutlineButton>
            <OutlineButton onClick={handleShowDetailClick}>Show detail</OutlineButton>
        </Flex>
    );
};
