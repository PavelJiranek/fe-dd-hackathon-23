import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";

import { Layout } from "../components/Layout.js";
import { WorkspacesList } from "../components/WorkspacesList/WorkspacesList.js";
import { BreadCrumb } from "../components/BreadCrumb.js";
import { useWorkspaces } from "../hooks/useWorkspaces.js";
import { CenteredLoading } from "../components/CenteredLoading.js";
import { BasicModal } from "../components/BasicModal.js";
import { createWorkspace } from "../utils/api.js";
import { useBackendStore } from "../store/useBackendStore.js";

export const Workspaces: FC = () => {
    const { workspaces, loading } = useWorkspaces();

    const { token } = useBackendStore();
    return (
        <Layout>
            <Stack>
                <BreadCrumb />
                <BasicModal
                    modalTitle={"New workspace"}
                    type={"input"}
                    openerLabel={"+ New workspace"}
                    primaryButtonLabel={"Create"}
                    primaryButtonAction={(val) => {
                        return createWorkspace(
                            token,
                            val["ID"],
                            val["Name"],
                            val["Parent ID (optional)"],
                        ).then((data) => console.log(data));
                    }}
                    content={[
                        { id: "name", label: "Name", placeholder: "Workspace name" },
                        { id: "id", label: "ID", placeholder: "Workspace ID" },
                        { id: "parentId", label: "Parent ID (optional)", placeholder: "Parent ID" },
                    ]}
                />
                {loading ? <CenteredLoading /> : <WorkspacesList workspaces={workspaces} />}
            </Stack>
        </Layout>
    );
};
