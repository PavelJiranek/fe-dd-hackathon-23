import React, { FC } from "react";

import { IWorkspace } from "../types/workspaces.js";
import { useWorkspaces } from "../hooks/useWorkspaces.js";

interface IWorkspacesListProps {
    workspaces: IWorkspace[];
}

export const WorkspacesList: FC<IWorkspacesListProps> = () => {
    const workspaces = useWorkspaces();

    console.log("workspaces", workspaces);
    return (
        <div>
            <h1>WorkspacesList test</h1>
            {workspaces.map((workspace) => (
                <div key={workspace.id}>
                    <h2>{workspace.id}</h2>
                </div>
            ))}
        </div>
    );
};
