import React, { FC, Fragment } from "react";
import { Card, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { useWorkspaces } from "../../hooks/useWorkspaces.js";

import { renderWorkspacesListItem } from "./WorkspacesListItem.js";

export const WorkspacesList: FC = () => {
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
                            <Fragment key={ws.id}>{renderWorkspacesListItem(ws)}</Fragment>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    );
};
