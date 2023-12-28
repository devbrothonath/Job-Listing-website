import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import JobForm from "./pages/JobForm";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  const { user } = useAuthContext();

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              ></Route>
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              ></Route>
              <Route path="/:id" element={<JobDetails />}></Route>
              <Route path="/add-job" element={<JobForm />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
