import React from "react";
import {
  About,
  Header,
  Nav,
  Exprience,
  Portfolio,
  Testmonials,
  Contact,
  Footer,
  Services,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Exprience />
      <Services/>
      <Portfolio />
      <Testmonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
