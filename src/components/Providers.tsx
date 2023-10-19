import { BackendProvider } from "@gooddata/sdk-ui";
import React, { FC, PropsWithChildren, useEffect } from "react";

import { useBackendStore } from "../store/useBackendStore.js";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    const { backend, domain, token, setBackend, authenticated } = useBackendStore();

    useEffect(() => {
        if (!backend && authenticated) {
            setBackend(domain, token);
        }
    }, [authenticated, backend, domain, setBackend, token]);

    if (!backend) {
        return null;
    }

    return <BackendProvider backend={backend}>{children}</BackendProvider>;
};
