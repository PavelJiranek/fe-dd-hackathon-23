import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";

import { Layout } from "../components/Layout.js";
import { WorkspacesList } from "../components/WorkspacesList/WorkspacesList.js";
import { BreadCrumb } from "../components/BreadCrumb.js";
import { useWorkspaces } from "../hooks/useWorkspaces.js";
import { CenteredLoading } from "../components/CenteredLoading.js";

export const Workspaces: FC = () => {
    const { workspaces, loading } = useWorkspaces();

    return (
        <Layout>
            <Stack>
                <BreadCrumb />
                {loading ? <CenteredLoading /> : <WorkspacesList workspaces={workspaces} />}
            </Stack>
        </Layout>
    );
};
