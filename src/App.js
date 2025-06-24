import React from "react";

import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Hero from "./components/Hero";
import Program from "./components/Program";
import List from "./components/List";
import Brand from "./components/Brand";
import Faq from "./components/Faq";
import PreFooter from "./components/Pre_footer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <Title />
      <List />
      <Program />    
      <Faq />
      <PreFooter />
      <Footer /> 
    </>
  );
}

export default App;
