import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";

import { Layout } from "../components/Layout.js";
import { WorkspacesList } from "../components/WorkspacesList/WorkspacesList.js";
import { BreadCrumb } from "../components/BreadCrumb.js";

export const Workspaces: FC = () => {
    return (
        <Layout>
            <Stack>
                <BreadCrumb />
                <WorkspacesList />
            </Stack>
        </Layout>
    );
};
