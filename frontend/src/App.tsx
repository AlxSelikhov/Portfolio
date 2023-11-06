import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
