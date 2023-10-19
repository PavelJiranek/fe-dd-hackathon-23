import React, { FC } from "react";

import { IWorkspace } from "../types/workspaces.js";

interface IWorkspacesListProps {
    workspaces: IWorkspace[];
}

export const WorkspacesList: FC<IWorkspacesListProps> = () => {
    return (
        <div>
            <h1>WorkspacesList</h1>
        </div>
    );
};
