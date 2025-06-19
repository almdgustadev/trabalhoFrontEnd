import PASTELZINHO from '../assets/pastelzinho.jpeg';
import SEQUILHO from '../assets/sequilho.jpeg';
import GOMA from '../assets/gominha.jpeg';
const produtos = [
  {
    id: 1,
    nome: 'Pastelzinho de Araçá',
    descricao: 'Irresistíveis pastelzinhos recheados com goiabada e cobertos com um toque de açúcar. A combinação perfeita de uma massa amanteigada com o doce da fruta.',
    imagem: PASTELZINHO, 
    alt: 'Foto do pastelzinho de araçá'
  },
  {
    id: 2,
    nome: 'Sequilhos',
    descricao: 'Deliciosos sequilhos que derretem na boca, perfeitos para acompanhar um café fresquinho. Aquele sabor tradicional que abraça a alma.',
    imagem: SEQUILHO,
    alt: 'Foto do sequilho'
  },
  {
    id: 3,
    nome: 'Bolachinha de Goma',
    descricao: 'A autêntica bolacha de goma! Leve, sequinha e crocante, ela derrete na boca a cada mordida. O sabor tradicional da goma de tapioca, perfeito para saborear a qualquer momento e matar a saudade.',
    imagem: GOMA,
    alt: 'Foto da bolacha de goma'
  }
];

export function Produtos() {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#f6e9d1]" id="produtos">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-[#5f4226] mb-12">
          Os mais pedidos!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white p-6 rounded-2xl shadow-md">
              
              <img 
                src={produto.imagem} 
                alt={produto.alt}
                className="w-full h-48 object-contain rounded-xl mb-4" 
              />

              <h3 className="text-[#5f4226] text-xl font-bold mb-2">{produto.nome}</h3>
              <p className="text-[#a49481]">{produto.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}