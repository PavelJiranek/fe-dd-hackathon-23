import React, { FC } from "react";
import { Card, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { IWorkspace } from "../../types/workspaces.js";
import { useWorkspaces } from "../../hooks/useWorkspaces.js";

import { WorkspacesListItem } from "./WorkspacesListItem.js";

interface IWorkspacesListProps {
    workspaces: IWorkspace[];
}

export const WorkspacesList: FC<IWorkspacesListProps> = () => {
    const workspaces = useWorkspaces();

    console.log("workspaces", workspaces);
    return (
        <Card>
            <TableContainer style={{ padding: "1rem" }}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Id</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {workspaces.map((ws) => (
                            <WorkspacesListItem key={ws.id} workspace={ws} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    );
};
