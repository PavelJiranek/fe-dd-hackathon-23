import { useCallback, useEffect, useState } from "react";

import { useBackendStore } from "../store/useBackendStore.js";
import { fetchWorkspaces } from "../utils/api.js";
import { IWorkspace } from "../types/workspaces.js";

export const useWorkspaces = (parentWorkspaceId?: string) => {
    const { token } = useBackendStore();
    const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
    const [loading, setLoading] = useState(false);

    const refreshWorkspaces = useCallback(async () => {
        setLoading(true);
        try {
            const wsResult = await fetchWorkspaces(token, parentWorkspaceId);
            setWorkspaces(wsResult);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }, [parentWorkspaceId, token]);

    useEffect(() => {
        refreshWorkspaces();
    }, [refreshWorkspaces]);

    return { workspaces, loading, refreshWorkspaces };
};
