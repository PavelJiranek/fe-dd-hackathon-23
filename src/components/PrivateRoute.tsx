import React, { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "../constants/constants.js";
import { useBackendStore } from "../store/useBackendStore.js";

import { Providers } from "./Providers.js";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const { authenticated } = useBackendStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authenticated) {
            navigate(AppRoutes.Login, { replace: true });
        }
    }, [authenticated, navigate]);

    return <Providers>{children}</Providers>;
};
