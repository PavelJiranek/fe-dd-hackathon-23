// (C) 2023 GoodData Corporation

import {LoginPage} from "./pages/LoginPage.js";
import React from "react";
import {useBackendStore} from "./store/useBackendStore.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutes} from "./constants/constants.js";
import {PrivateRoute} from "./components/PrivateRoute.js";

export const App: React.FC = () => {
    const store = useBackendStore();

    const {} = store;
    console.log(store)

    return (
        <BrowserRouter>
          <Routes>
              <Route path={AppRoutes.Home} element={<PrivateRoute><>Home</></PrivateRoute>}/>
                <Route path={AppRoutes.Login} Component={LoginPage} />
            </Routes>
        </BrowserRouter>
    )
};
