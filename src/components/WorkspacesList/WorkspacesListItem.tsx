import React, { FC } from "react";
import { Td, Tr } from "@chakra-ui/react";

import { IWorkspace } from "../../types/workspaces.js";

interface IWorkspacesListItemProps {
    workspace: IWorkspace;
}

export const WorkspacesListItem: FC<IWorkspacesListItemProps> = ({ workspace: { name, id } }) => {
    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{id}</Td>
            <Td>...actions</Td>
        </Tr>
    );
};
