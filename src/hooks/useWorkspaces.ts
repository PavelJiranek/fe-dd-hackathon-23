import { useEffect, useState } from "react";

import { useBackendStore } from "../store/useBackendStore.js";
import { fetchWorkspaces } from "../utils/api.js";
import { IWorkspace } from "../types/workspaces.js";

const defaultWorkspaces = [
    {
        id: "a318879ef4e043d6958ef7eae898c0dd",
        name: "NLG scenario",
        parent_id: null,
        children: [],
    },
    {
        id: "production",
        name: "(Admin) - Vasco PROD",
        parent_id: null,
        children: [
            {
                id: "test",
                name: "Child workspace",
                parent_id: "production",
                children: [{ id: "Grandtest", name: "Child workspace", parent_id: "test", children: [] }],
            },
        ],
    },
    { id: "ws-snowflake-demo", name: "GoodData Demo", parent_id: null, children: [] },
];

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

    return workspaces.length ? workspaces : defaultWorkspaces;
    // return workspaces;
};
