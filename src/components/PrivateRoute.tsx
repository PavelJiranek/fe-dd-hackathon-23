import React, { FC, useEffect, PropsWithChildren } from "react";
import { redirect } from "react-router-dom";

import { AppRoutes } from "../constants/constants.js";
import { useBackendStore } from "../store/useBackendStore.js";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const { authenticated } = useBackendStore();

    useEffect(() => {
        if (!authenticated) {
            redirect(AppRoutes.Login);
        }
    }, [authenticated]);

    return <>{children}</>;
};
