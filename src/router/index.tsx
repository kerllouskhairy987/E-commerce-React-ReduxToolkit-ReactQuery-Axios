import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import RootLayout from "../pages/Index";
import HomePage from "../pages/Layout";
import ErrorHandler from "../errors/ErrorHandler";
import SingleProductPage from "../components/SingleProductPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Rout Layout */}
            <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
                <Route index element={<HomePage />} />
                <Route path="single-product" element={<SingleProductPage />} />
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<PageNotFound statusCode={404} />} />
        </>
    )
);

export default router;