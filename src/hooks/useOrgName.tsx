import { useEffect } from "react";
import { useBackend } from "@gooddata/sdk-ui";

import { useBackendStore } from "../store/useBackendStore.js";

export const useOrgName = () => {
    const { orgName, setOrgName } = useBackendStore();
    const backend = useBackend();

    useEffect(() => {
        async function getOrg() {
            const org = await backend?.organizations().getCurrentOrganization();
            const descriptor = await org?.getDescriptor();
            setOrgName(descriptor?.title || "");
        }
        !orgName && getOrg();
    }, []);

    return orgName;
};
