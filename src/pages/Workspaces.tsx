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
    const { workspaces, loading, refreshWorkspaces } = useWorkspaces();

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
                            val["Name (optional)"],
                            val["Parent ID (optional)"],
                        ).then((data) => {
                            console.log(data);
                            refreshWorkspaces();
                        });
                    }}
                    content={[
                        { id: "id", label: "ID", placeholder: "Workspace ID", required: true },
                        { id: "name", label: "Name (optional)", placeholder: "Workspace name" },
                        { id: "parentId", label: "Parent ID (optional)", placeholder: "Parent ID" },
                    ]}
                    submittingText={"Creating workspace..."}
                />
                {loading ? <CenteredLoading /> : <WorkspacesList workspaces={workspaces} />}
            </Stack>
        </Layout>
    );
};
