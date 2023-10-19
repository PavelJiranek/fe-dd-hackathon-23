import { create } from "zustand";
import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";

import { getBackend } from "../utils/backend.js";
import { LOCAL_STORAGE_KEY } from "../constants/constants.js";

interface IBackendStore {
    domain: string;
    // setDomain: (domain: string) => void;
    token: string;
    // setToken: (token: string) => void;
    backend: IAnalyticalBackend | null;
    error: Error | null;
    authenticated: boolean;
    clearStore: () => void;
    setBackend: (domain: string, token: string) => void;
    orgName: string;
    setOrgName: (orgName: string) => void;
}

const getStoredCredentials = () => {
    try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.error(e);
    }

    return null;
};

const getDefaultStore = (): Pick<
    IBackendStore,
    "domain" | "token" | "backend" | "error" | "authenticated" | "orgName"
> => {
    const stored = getStoredCredentials();
    return {
        domain: stored?.domain ?? "",
        token: stored?.token ?? "",
        backend: null,
        error: null,
        authenticated: !!stored,
        orgName: "",
    };
};

export const useBackendStore = create<IBackendStore>((set) => ({
    ...getDefaultStore(),
    setOrgName: (orgName) => set({ orgName }),
    setBackend: (domain, token) =>
        set(() => {
            let error = null;
            const backend = getBackend(domain, token, (_context, authError) => {
                error = authError;
                console.error("AuthError: ", authError);
            });

            const authenticated = !error && !!backend;
            // const authenticated = backend.isAuthenticated(); // todo

            if (authenticated) {
                try {
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ domain, token }));
                } catch (e) {
                    console.error(e);
                }
            }

            return { backend, domain, token, error, authenticated };
        }),
    clearStore: () => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        set({ ...getDefaultStore() });
    },
}));
