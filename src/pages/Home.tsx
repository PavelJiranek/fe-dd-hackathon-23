import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";

import { Layout } from "../components/Layout.js";
import { WorkspacesList } from "../components/WorkspacesList/WorkspacesList.js";

export const Home: FC = () => {
    return (
        <Layout>
            <Stack>
                <WorkspacesList workspaces={[]} />
            </Stack>
        </Layout>
    );
};
