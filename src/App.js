import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Booking from "./components/Booking";
import { Footer } from "./components/Footer";
import media from "./assets/img/welcome.mp4";

function App() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const hasWatched = localStorage.getItem('hasWatched');
    if (hasWatched) {
      setShowVideo(false);
    }
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
    localStorage.setItem('hasWatched', 'true');
  };

  return (
    <div className="App">
      {showVideo && (
        <div className="videoContainer">
          <video src={media} autoPlay muted onEnded={handleVideoEnd} />
        </div>
      )}
      {!showVideo && (
        <div>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Booking/>
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
