import React from "react";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Sobre } from "./components/Sobre";
import { Produtos } from "./components/Produtos";
import { Localizacao } from "./components/Localizacao";
import { Contato } from "./components/Contato";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Sobre />
      <Produtos />
      <Localizacao />
      <Contato />
    </div>
  );
}

export default App;
