import { lazy } from "react";

const HomeComponent = lazy(() => import("../pages/Home/Home"));

const LoginComponent = lazy(() => import("../pages/Login/Login"));

export {
    HomeComponent,
    LoginComponent
}