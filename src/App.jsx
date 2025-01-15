import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./Pages/home-page/Home";
import { Routes, Route } from "react-router-dom";
import Favorite from "./Pages/favorite-page/favorite";
import NavBar from "./navBar/navBar";
import WatchNow from "./Pages/watch-now/watchNow";
import { MovieProvider } from "./services/context";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <Routes>
        <Route path="/Movies-WebApp" element={<HomePage />} />
        <Route path="/Movies-WebApp/favorites" element={<Favorite />} />
        <Route path="/Movies-WebApp/watch-now" element={<WatchNow />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
