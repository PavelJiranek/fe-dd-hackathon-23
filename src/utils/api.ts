import { BE_API_HOST } from "../constants/constants.js";

export const fetchWorkspaces = async (token: string, workspaceId?: string) => {
    const url = new URL(`${BE_API_HOST}/ws`);
    url.searchParams.append("action", "view");
    if (workspaceId) {
        url.searchParams.append("id", workspaceId);
    }

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return await response.json();
};

export const createWorkspace = async (token: string, id: string, name: string, parentId: string) => {
    const url = new URL(`${BE_API_HOST}/ws`);
    url.searchParams.append("action", "create");
    url.searchParams.append("id", id);
    if (parentId) {
        url.searchParams.append("parent", parentId);
    }
    if (name) {
        url.searchParams.append("name", name);
    }

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return await response.json();
};
