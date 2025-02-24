import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import RootLayout from "../pages/Index";
import HomePage from "../pages/Layout";
import ErrorHandler from "../errors/ErrorHandler";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Rout Layout */}
            <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
                <Route index element={<HomePage />} />
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<PageNotFound statusCode={404} />} />
        </>
    )
);

export default router;