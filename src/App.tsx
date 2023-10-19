// (C) 2023 GoodData Corporation

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { LoginPage } from "./pages/LoginPage.js";
import { useBackendStore } from "./store/useBackendStore.js";
import { AppRoutes } from "./constants/constants.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import { Home } from "./pages/Home.js";

export const App: React.FC = () => {
    const store = useBackendStore();

    console.log(store);

    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={AppRoutes.Login} Component={LoginPage} />
                    <Route
                        path={"*"}
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};
