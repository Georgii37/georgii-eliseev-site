
import { useState } from "react";
import Header from "./components/Header.jsx";
import AboutPanel from "./components/AboutPanel.jsx";
import WorkIndex from "./components/WorkIndex.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className={`site ${aboutOpen ? "about-open" : ""}`}>
      <Header
        aboutOpen={aboutOpen}
        onAboutClick={() => setAboutOpen((prev) => !prev)}
      />

      <AboutPanel
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      <WorkIndex />

      <Footer />
    </div>
  );
}

export default App;
