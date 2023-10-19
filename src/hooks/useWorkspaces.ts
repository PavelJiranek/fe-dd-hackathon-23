import { useEffect, useState } from "react";

import { useBackendStore } from "../store/useBackendStore.js";
import { fetchWorkspaces } from "../utils/api.js";
import { IWorkspace } from "../types/workspaces.js";

export const useWorkspaces = () => {
    const { token } = useBackendStore();
    const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const wsResult = await fetchWorkspaces(token);
                setWorkspaces(wsResult);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [token]);

    return workspaces;
};
