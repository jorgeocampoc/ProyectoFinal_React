import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AppRouter } from "../RickAndMorty/router/AppRouter";
import { MarvelRoutes } from "../marvel/routes/MarvelRoutes";
import { Details } from "../marvel/pages/Details";

export const AppRouterMain = () => {
  return (
    <>
      <Routes>
        <Route path="app" element={<MainPage />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="/marvel/*" element={<MarvelRoutes />} />
        <Route path="/" element={<Navigate to="/app" />} />
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </>
  );
};
