import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicLayout from "./Layoult.jsx";
import HomePageContainer from "../Conteiners/HomePage/Index.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <BasicLayout>
              <HomePageContainer />
            </BasicLayout>
          }
        />
        <Route
          path="/cartoons"
          element={
            <BasicLayout>
              <h1>Cartoons</h1>
            </BasicLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
