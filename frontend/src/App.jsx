import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";

export default function App() {
return (
<>
<div className="App">
    <BrowserRouter>
        <div className="pages">
            <Routes>
                <Route 
                    path="/"
                    element={<Home />}>
                </Route>
                <Route
                    path="/:id"
                    element={<JobDetails />}>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>
</div>
</>
);
}
