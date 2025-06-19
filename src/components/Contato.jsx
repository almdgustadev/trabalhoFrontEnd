import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import logoImage from '../assets/logo1.png'; 



export function Contato() {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#f6e9d1]" id="contato">
      <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
        <h2 className="text-3xl md:text-5xl font-bold text-[#5f4226] mb-6">
          Fale Conosco
        </h2>

        <p className="text-lg text-[#5f4226] mb-8">
          Tem alguma dúvida, sugestão ou deseja fazer um pedido? Entre em contato com a gente!
        </p>

        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Seu nome"
            className="p-4 rounded-xl border border-[#a49481] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="p-4 rounded-xl border border-[#a49481] focus:outline-none"
          />
          <textarea
            placeholder="Mensagem"
            rows="5"
            className="p-4 rounded-xl border border-[#a49481] focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#ce975b] text-white font-semibold py-3 rounded-xl hover:bg-[#a49481] transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
        <div className="mt-12 text-center">
          <p className="text-lg text-[#5f4226] mb-4">
            Ou se preferir, fale com a gente pelas redes sociais:
          </p>
          <div className="flex justify-center items-center gap-6">
            
            <a 
              href="https://www.instagram.com/biscoistosdaflory/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link para o Instagram"
              className="text-[#5f4226] hover:text-[#d62976] transition-colors duration-300"
            >
              <FaInstagram size={36} />
            </a>

            <a 
              href="https://wa.me/5575999864843" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link para o WhatsApp"
              className="text-[#5f4226] hover:text-[#25D366] transition-colors duration-300"
            >
              <FaWhatsapp size={36} />
            </a>
          </div>
          <img src={logoImage} alt="Logo" className="h-16 mx-auto mt-8"/>        
        </div>
      </div>
    </section>
  );
}
