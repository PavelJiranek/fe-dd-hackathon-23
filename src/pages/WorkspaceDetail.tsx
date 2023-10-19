import { useParams } from "react-router-dom";
import React from "react";

import { BreadCrumb } from "../components/BreadCrumb.js";

export const WorkspaceDetail = () => {
    const { workspaceId } = useParams();

    return (
        <div>
            <BreadCrumb />
            <h1>WorkspaceDetail of {workspaceId}</h1>
        </div>
    );
};
