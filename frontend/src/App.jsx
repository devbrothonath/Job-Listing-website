import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import JobForm from "./pages/JobForm";


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
                <Route
                    path="/add-job"
                    element={<JobForm />}>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>
</div>
</>
);
}
