import React from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateRisk from "./pages/CreateRisk";
import CreateTask from "./pages/CreateTask";

const PageRoutes = (props) => {
  return (
        <div className="">
          <h1>Hello World</h1>
          <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Navigate to="/dashboard"/>}></Route>
              <Route path="/dashboard" element={<Dashboard /> } />
              <Route path="/create-risk" element={<CreateRisk /> } />
              <Route path="/create-task" element={<CreateTask /> } />
          </Routes>
          </BrowserRouter>
        </div>
        
  );
};

export default PageRoutes
