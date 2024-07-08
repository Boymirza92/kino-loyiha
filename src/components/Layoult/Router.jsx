import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicLayout from "./Layoult.jsx";
import WarMovies from "../Conteiners/HomePage/WarMovies/Cartoons.jsx";
import Cartoons from "../Conteiners/HomePage//Containers/Cartoons.jsx";
import * as ROUTES from "../Constants/Routs";
import PopularMovies from "../Conteiners/HomePage/PopularMovies/PopularMovies.jsx";
import TrendingMovies from "../Conteiners/HomePage/Trending/Trending.jsx";
import FantasyMovies from "../Conteiners/HomePage/Fantasy/Fantasy.jsx";
import ScienceFiction from "../Conteiners/HomePage/ScienceFiction/ScienceFiction.jsx";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="ROUTES.HOME"
          element={
            <BasicLayout>
              <Cartoons />
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
          path={ROUTES.WAR}
          element={
            <BasicLayout>
              <WarMovies />
            </BasicLayout>
          }
        />
        <Route
          path={ROUTES.POPULAR}
          element={
            <BasicLayout>
              <PopularMovies />
            </BasicLayout>
          }
        />
        <Route
          path={ROUTES.TRENDING}
          element={
            <BasicLayout>
              <TrendingMovies />
            </BasicLayout>
          }
        />
        <Route
          path={ROUTES.FANTASY}
          element={
            <BasicLayout>
              <FantasyMovies />
            </BasicLayout>
          }
        />
        <Route
          path={ROUTES.SCIENCE}
          element={
            <BasicLayout>
              <ScienceFiction />
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
