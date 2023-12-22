import Navigation from "./Components/Navigation";
import Contact from "./Sections/Contact";
import Extensions from "./Sections/Extensions";
import Features from "./Sections/Features";
import Hero from "./Sections/Hero";
import Questions from "./Sections/Questions";
import Footer from "./Sections/Footer";

import ModalComponent from "./Components/Modal";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ModalComponent />
      <Features />
      <Extensions />
      <Questions />
      <Contact />
      <Footer />
    </>)
}

export default App;
