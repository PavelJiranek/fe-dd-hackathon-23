import React, { FC, useEffect } from "react";
import { useBackend } from "@gooddata/sdk-ui";

import { IWorkspace } from "../types/workspaces.js";

interface IWorkspacesListProps {
    workspaces: IWorkspace[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const workspaces: IWorkspace[] = [];

export const WorkspacesList: FC<IWorkspacesListProps> = () => {
    const backend = useBackend();

    useEffect(() => {
        (async () => {
            const wss = await backend?.workspaces().forCurrentUser().query();
            console.log("workspaces", wss);
        })();
    }, [backend]);

    return (
        <div>
            <h1>WorkspacesList test</h1>
        </div>
    );
};
