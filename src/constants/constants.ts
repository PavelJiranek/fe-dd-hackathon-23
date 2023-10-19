export enum AppRoutes {
    Login = "/login",
    Home = "/",
}

export const LOCAL_STORAGE_KEY = "pink_pages";

export const isDevMode = process.env.NODE_ENV === "development";

export const BE_API_HOST = process.env.BE_API_HOST ?? "";
