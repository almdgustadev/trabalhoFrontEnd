import { Link } from "react-scroll";
import logoImage from '../assets/logo1.png'; 


export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f6e9d1] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <img src={logoImage} alt="Logo" className="h-24" />

        <div className="space-x-6 text-[#5f4226] font-semibold">
          <Link to="banner" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Início</Link>
          <Link to="sobre" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Sobre</Link>
          <Link to="produtos" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Produtos</Link>
          <Link to="localizacao" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Localização</Link>
          <Link to="contato" smooth duration={500} className="cursor-pointer hover:text-[#ce975b]">Contato</Link>
        </div>
      </div>
    </nav>
  );
}

