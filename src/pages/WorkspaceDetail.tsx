import { useParams } from "react-router-dom";
import React from "react";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

import { useWorkspaces } from "../hooks/useWorkspaces.js";
import { WorkspacesList } from "../components/WorkspacesList/WorkspacesList.js";
import { CenteredLoading } from "../components/CenteredLoading.js";
import { BreadCrumb } from "../components/BreadCrumb.js";
import { Layout } from "../components/Layout.js";

export const WorkspaceDetail = () => {
    const { workspaceId } = useParams();

    const { workspaces, loading } = useWorkspaces(workspaceId);

    return (
        <Layout>
            <BreadCrumb />
            {loading ? (
                <CenteredLoading />
            ) : (
                <Card>
                    <CardHeader>
                        <Heading size="md">Client Report</Heading>
                    </CardHeader>
                    <CardBody>
                        <WorkspacesList workspaces={workspaces} />
                    </CardBody>
                </Card>
            )}
        </Layout>
    );
};
