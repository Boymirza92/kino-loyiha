import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicLayout from "./Layoult.jsx";
import HomePageContainer from "../Conteiners/HomePage/Index.jsx";
import Cartoons from "../Conteiners/HomePage//Containers/Cartoons.jsx";
import * as ROUTES from '../Constants/Routs';

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route
          path="ROUTES.HOME"
          element={
            <BasicLayout>
              <HomePageContainer />
            </BasicLayout>
          }
        />
        <Route
          path={ROUTES.CARTOONS}
          element={
            <BasicLayout>
              <Cartoons />
            </BasicLayout>
          }
        />
        <Route
          path="*"
          element={
            <BasicLayout>
              <h1>Page Not Found</h1>
            </BasicLayout>
          }
        />
      </Routes>
    </Router>
  );

};

export default AppRouter;
