import React from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const PageRoutes = (props) => {
  return (
        <div className="">
          <h1>Hello World</h1>
          <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Navigate to="/dashboard"/>}></Route>
              <Route path="/dashboard" element={<Dashboard /> } />
          </Routes>
          </BrowserRouter>
        </div>
        
  );
};

export default PageRoutes
