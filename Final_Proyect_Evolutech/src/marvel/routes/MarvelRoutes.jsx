import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Characters } from "../pages/Characters";
import { Header } from "../components/Header.";
import { Search } from "../pages/Search";
import { Hero } from "../pages/Hero";
import { Series } from "../pages/Series";
import { Comics } from "../pages/Comics";

export const MarvelRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="characters/" element={<Characters />} />
        <Route path="comics/" element={<Comics />} />
        <Route path="series/" element={<Series />} />
        <Route path="search" element={<Search />} />
        <Route path="/characters/hero/:id" element={<Hero />} />
        <Route path="/" element={<Navigate to={"characters"} />} />
      </Routes>
    </>
  );
};
