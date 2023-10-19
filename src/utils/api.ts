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
