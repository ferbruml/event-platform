import { Route, Routes } from "react-router-dom";
import { Lab } from "../pages/Lab";
import { Subscribe } from "../pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />}/>
            <Route path="/lab" element={<Lab />}/>
            <Route path="/lab/lesson/:slug" element={<Lab />}/>
        </Routes>
    )
}