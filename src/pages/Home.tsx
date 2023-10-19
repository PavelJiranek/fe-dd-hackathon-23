import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";

import { WorkspacesList } from "../components/WorkspacesList.js";

export const Home: FC = () => {
    return (
        <Stack>
            <WorkspacesList workspaces={[]} />
        </Stack>
    );
};
