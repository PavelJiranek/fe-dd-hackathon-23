import { BE_API_HOST } from "../constants/constants.js";

export const fetchWorkspaces = async (token: string) => {
    const response = await fetch(`${BE_API_HOST}/ws`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return await response.json();
};
