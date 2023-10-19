import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

import { IWorkspace } from "../../types/workspaces.js";
import { OutlineButton } from "../OutlineButton.js";
import { useBackendStore } from "../../store/useBackendStore.js";
import { GD_HOST, isDevMode } from "../../constants/constants.js";

export const WorkspaceListItemActions: FC<{ workspace: IWorkspace }> = ({ workspace }) => {
    const { domain } = useBackendStore();

    const handleOpenClick = () =>
        window.open(`${isDevMode ? GD_HOST : domain}/dashboards/#/workspace/${workspace.id}`, "_blank");

    return (
        <Flex gap={2}>
            <OutlineButton onClick={handleOpenClick}>Open</OutlineButton>
            <OutlineButton onClick={() => {}}>Show detail</OutlineButton>
        </Flex>
    );
};
