export enum AppRoutes {
    Login = "/login",
    Home = "/",
}

export const LOCAL_STORAGE_KEY = "pink_pages";

export const isDevMode = process.env.NODE_ENV === "development";
