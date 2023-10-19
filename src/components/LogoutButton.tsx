import React from "react";
import { useNavigate } from "react-router-dom";

import { useBackendStore } from "../store/useBackendStore.js";
import { AppRoutes } from "../constants/constants.js";

import { FilledButton } from "./FilledButton.js";

export const LogoutButton = () => {
    const { clearStore } = useBackendStore();
    // const backend = useBackendStrict();
    const navigate = useNavigate();

    const logout = () => {
        clearStore();
        navigate(AppRoutes.Login, { replace: true });
        // backend.deauthenticate(); todo redirects to logout route?!
    };

    return <FilledButton onClick={logout}>Log out</FilledButton>;
};
