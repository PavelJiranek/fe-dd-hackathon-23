import { useBackendStrict } from "@gooddata/sdk-ui";
import React from "react";

import { useBackendStore } from "../store/useBackendStore.js";

import { FilledButton } from "./FilledButton.js";

export const LogoutButton = () => {
    const { clearStore } = useBackendStore();
    const backend = useBackendStrict();
    const logout = () => {
        clearStore();
        backend.deauthenticate();
    };

    return <FilledButton onClick={logout}>Log out</FilledButton>;
};
