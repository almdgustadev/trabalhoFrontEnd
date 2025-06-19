export function Localizacao() {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#fff7ed]" id="localizacao">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-left">
        <h2 className="text-3xl md:text-5xl font-bold text-[#5f4226] mb-6">
          Onde Estamos
        </h2>
        <p className="text-lg text-[#5f4226] mb-8">
          Venha nos visitar! Estamos localizados em um ponto acessível e acolhedor,
          prontos para te receber com o melhor da nossa culinária.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.2028753081701!2d-39.2833202243549!3d-11.56536688358121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7139d03226559b7%3A0x362fc2c9ae145e0a!2sR.%20Prof.%20Ant%C3%B4nio%20Bahia%2C%2079%20-%20Centro%2C%20Concei%C3%A7%C3%A3o%20do%20Coit%C3%A9%20-%20BA%2C%2048730-000!5e0!3m2!1spt-BR!2sbr!4v1749252905744!5m2!1spt-BR!2sbr"            
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
