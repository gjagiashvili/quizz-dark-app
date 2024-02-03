import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Entry from "../src/components/Entry";
import EarlyAccess from "../src/components/EarlyAccess";
import Benefits from "../src/components/Benefits";
import Productivity from "../src/components/Productivity";
import Testimonials from "../src/components/Testimonials";
import Footer from "../src/components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Entry />
      <Benefits />
      <Productivity />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </>
  );
}

export default App;
