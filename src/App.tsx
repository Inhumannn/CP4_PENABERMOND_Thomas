import { Route, Routes } from "react-router-dom";
import { Custom404 } from "./pages/404";
import { Detail } from "./pages/detail";
import { Home } from "./pages/home";

export function App() {
  return (
    <Routes>
      <Route path="*" element={<Custom404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}
