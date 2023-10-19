import { useLocation } from "react-router-dom";

export const useIsActiveLink = (route: string) => {
    const { pathname } = useLocation();
    return pathname === route;
};
