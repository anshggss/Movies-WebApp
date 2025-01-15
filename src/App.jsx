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
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/watch-now" element={<WatchNow />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
