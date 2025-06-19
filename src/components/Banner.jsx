export function Banner() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 bg-[#f6e9d1]" id ="banner">
      <div className="text-center max-w-2xl" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-[#5f4226] mb-4">
          Bem-vindo à nossa Lanchonete
        </h1>

        <p className="text-lg md:text-xl text-[#a49481] mb-6">
          Os melhores biscoitos da região!
        </p>

        <a
          href="#cardapio"
          className="bg-[#ce975b] hover:bg-[#e99c92] text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition-all"
        >
          Ver Produtos
        </a>
      </div>
    </section>
  );
}
