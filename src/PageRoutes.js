import React from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreaetRisk from "./pages/CreaetRisk";

const PageRoutes = (props) => {
  return (
        <div className="">
          <h1>Hello World</h1>
          <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Navigate to="/dashboard"/>}></Route>
              <Route path="/dashboard" element={<Dashboard /> } />
              <Route path="/create-risk" element={<CreaetRisk /> } />
              
          </Routes>
          </BrowserRouter>
        </div>
        
  );
};

export default PageRoutes
