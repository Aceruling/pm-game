import React from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Brief from "./pages/Brief";
import ResourceCard from "./pages/ResourceCard";
import CreateRisk from "./pages/CreateRisk";
import CreateTask from "./pages/CreateTask";
import CreateEmail from "./pages/CreateEmail";

const PageRoutes = (props) => {
  return (
        <div className="">
          <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Navigate to="/dashboard"/>}></Route>
              <Route path="/dashboard" element={<Dashboard /> } />
              <Route path="/create-risk" element={<CreateRisk /> } />
              <Route path="/create-task" element={<CreateTask /> } />
              <Route path="/create-email" element={<CreateEmail /> } />
              <Route path="/brief" element={ <Brief/> } />
              <Route path="/resourcecard" element={ <ResourceCard/> } />
          </Routes>
          </BrowserRouter>
        </div>
        
  );
};

export default PageRoutes
