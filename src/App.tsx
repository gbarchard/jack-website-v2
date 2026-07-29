import type { PropsWithChildren } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <Providers>
      <NavBar />
    </Providers>
  );
}

function Providers(props: PropsWithChildren) {
  return <BrowserRouter>{props.children}</BrowserRouter>;
}
