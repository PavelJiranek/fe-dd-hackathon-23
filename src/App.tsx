// (C) 2023 GoodData Corporation

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage.js";
import { useBackendStore } from "./store/useBackendStore.js";
import { AppRoutes } from "./constants/constants.js";
import { PrivateRoute } from "./components/PrivateRoute.js";

export const App: React.FC = () => {
    const store = useBackendStore();

    console.log(store);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoutes.Home}
                    element={
                        <PrivateRoute>
                            <>Home</>
                        </PrivateRoute>
                    }
                />
                <Route path={AppRoutes.Login} Component={LoginPage} />
            </Routes>
        </BrowserRouter>
    );
};
