import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ChaptersPage } from "../pages/ChaptersPage";
import { CharactersPage } from "../pages/CharactersPage";
import { NavList } from "../components/NavList";
import { FilterCharacter } from "../pages/FilterCharacter";

export const AppRouter = () => {
  return (
    <div className="container-fluid">
      <div className="letras">
        <video src={"./src/assets/rm.mp4"} autoPlay loop muted preload="auto" />
        <h1 className="text-center ">Rick and Morty</h1>
      </div>
      <div className="animate__animated animate__fadeIn ">
        <NavList />
        <div>
          <Routes>
            <Route path="characters" element={<CharactersPage />} />
            <Route path="filter" element={<FilterCharacter />} />
            <Route path="chapters" element={<ChaptersPage />} />
            <Route path="/" element={<Navigate to={"characters"} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
