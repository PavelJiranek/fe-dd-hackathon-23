export enum AppRoutes {
    Environments = "/environments",
    Workspaces = "/workspaces",
    UserFilters = "/user-filters",
    Login = "/login",
    FallBack = "*",
}

export const LOCAL_STORAGE_KEY = "pink_pages";

export const isDevMode = process.env.NODE_ENV === "development";

export const GD_HOST = process.env.GOODDATA_HOST ?? "";
export const BE_API_HOST = process.env.BE_API_HOST ?? "";
