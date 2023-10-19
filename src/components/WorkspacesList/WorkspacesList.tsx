import React, { FC, Fragment } from "react";
import { Card, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { IWorkspace } from "../../types/workspaces.js";

import { renderWorkspacesListItem } from "./WorkspacesListItem.js";

interface IWorkspacesListProps {
    workspaces: IWorkspace[];
}

export const WorkspacesList: FC<IWorkspacesListProps> = ({ workspaces }) => {
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
