import { useState } from "react";
import { Link } from "react-scroll";
import logoImage from "../assets/logo1.png";

export function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f6e9d1] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <img src={logoImage} alt="Logo" className="h-24" />

        <button
          className="md:hidden text-[#5f4226]"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex space-x-6 text-[#5f4226] font-semibold">
          <Link to="banner" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Início</Link>
          <Link to="sobre" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Sobre</Link>
          <Link to="produtos" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Produtos</Link>
          <Link to="localizacao" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Localização</Link>
          <Link to="contato" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Contato</Link>
        </div>
      </div>
      {menuAberto && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 text-[#5f4226] font-semibold bg-[#f6e9d1]">
          <Link to="banner" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]" onClick={() => setMenuAberto(false)}>Início</Link>
          <Link to="sobre" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]" onClick={() => setMenuAberto(false)}>Sobre</Link>
          <Link to="produtos" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]" onClick={() => setMenuAberto(false)}>Produtos</Link>
          <Link to="localizacao" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]" onClick={() => setMenuAberto(false)}>Localização</Link>
          <Link to="contato" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]" onClick={() => setMenuAberto(false)}>Contato</Link>
        </div>
      )}
    </nav>
  );
}
