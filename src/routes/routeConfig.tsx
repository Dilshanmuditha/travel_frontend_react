import React, { ReactElement } from "react";
import Customer from "../screens/customer";
import Driver from "../screens/vehicle";
import Admin from "../screens/user";
import Landing from "../screens/Landing";
import Login from "../screens/Login";

export interface RouteType {
    id: number;
    path: string;
    component: ReactElement;
}

const ROUTES: RouteType[] = [
    {
        id: 1,
        path: "/",
        component: <Landing />,
    },
    {
        id: 2,
        path: "/about",
        component: <Admin />,
    },
    {
        id: 3,
        path: "/Vehicles",
        component: <Driver />,
    },
    {
        id: 4,
        path: "/login",
        component: <Login />,
    },
];

export default ROUTES;
