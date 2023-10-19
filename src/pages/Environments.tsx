import React, { FC } from "react";

import { Layout } from "../components/Layout.js";
import { BasicModal } from "../components/BasicModal.js";

export const Environments: FC = () => {
    return (
        <Layout>
            <h1>Environments</h1>
            <BasicModal
                modalTitle={"New workspace"}
                type={"input"}
                openerLabel={"+ New workspace"}
                primaryButtonLabel={"Create"}
                primaryButtonAction={() => console.log("create")}
                content={[
                    { label: "Name", placeholder: "workspace" },
                    { label: "Parent ID (optional)", placeholder: "parent_ID" },
                ]}
            />

            <BasicModal
                modalTitle={"New environment"}
                type={"radio"}
                openerType={"outline"}
                openerLabel={"+ New environment"}
                primaryButtonLabel={"Create"}
                primaryButtonAction={() => console.log("create")}
                content={[{ label: "Development" }, { label: "Testing" }, { label: "Production" }]}
            />
        </Layout>
    );
};
