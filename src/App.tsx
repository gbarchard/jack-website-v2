import type { PropsWithChildren } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";

export default function App() {
  return (
    <Providers>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="work/*" element={<Work />} />
      </Routes>
    </Providers>
  );
}

function Providers(props: PropsWithChildren) {
  return <BrowserRouter>{props.children}</BrowserRouter>;
}
