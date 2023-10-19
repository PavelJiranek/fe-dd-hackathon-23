import {create} from 'zustand'
import {IAnalyticalBackend} from "@gooddata/sdk-backend-spi";
import {getBackend} from "../utils/backend.js";

interface IBackendStore {
    domain: string
    // setDomain: (domain: string) => void;
    token: string;
    // setToken: (token: string) => void;
    backend: IAnalyticalBackend | null;
    error: Error | null;
    authenticated: boolean;
    clearStore: () => void;
    setBackend: (domain: string, token: string) => void;
}


const defaultStore: Pick<IBackendStore,"domain"|"token"|"backend"|"error"|"authenticated"> = {
    domain: '',
    token: '',
    backend: null,
    error: null,
    authenticated: false
}

export const useBackendStore = create<IBackendStore>((set) => ({
    ...defaultStore,
    // setDomain: (domain) => set(() => ({
    //      domain
    // })),
    // setToken: (token) => set(() => ({
    //      token
    // })),
    setBackend: (domain, token) => set(() => {
        let error = null;
        const backend = getBackend(domain,token, (_context, authError) => {
            error = authError;
        });

        return ({backend, domain, token, error, authenticated: !error && !!backend})
    }),
    clearStore: () => set({ domain: "" }),
}))