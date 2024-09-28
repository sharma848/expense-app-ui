import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeComponent, LoginComponent } from "./loadables";

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Routes go here */}
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
