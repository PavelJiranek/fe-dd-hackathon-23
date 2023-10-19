import { useParams } from "react-router-dom";
import React from "react";

export const WorkspaceDetail = () => {
    const { workspaceId } = useParams();

    return (
        <div>
            <h1>WorkspaceDetail of {workspaceId}</h1>
        </div>
    );
};
