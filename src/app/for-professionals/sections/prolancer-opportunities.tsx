import { memo } from "react";

function ProlancerOpportunitiesComponent() {
  return (
    <section className="container mx-auto bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título e Subtítulo */}
        <h2 className="text-[#09012F] text-3xl font-bold mb-4">
          O que você poderá fazer como Prolancer
        </h2>
        <p className="text-[#6E6E6E] text-lg mb-12">
          Alavanque seu portfólio com diversos tipos de trabalho.
        </p>

        {/* Cards de Recursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: "📊",
              title: "Lance novos produtos",
              description:
                "Participe da criação e desenvolvimento de produtos em grandes empresas.",
            },
            {
              icon: "✨",
              title: "Desenvolva novas features",
              description:
                "Crie novas features em produtos já operacionais e com uma base grande de clientes.",
            },
            {
              icon: "🌐",
              title: "Construa em novas plataformas",
              description:
                "Ajude a levar produtos já no mercado para novas plataformas.",
            },
            {
              icon: "⚙️",
              title: "Melhorias no legado",
              description:
                "Faça melhorias técnicas e funcionais diretamente no legado de produtos.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#2F6FFF] text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              {/* Ícone */}
              <div className="text-4xl mb-4">{item.icon}</div>
              {/* Título */}
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              {/* Descrição */}
              <p className="text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Botão CTA */}
        <a
          className="inline-block bg-[#2F6FFF] text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#1E4ED8] transition"
        >
          Seja um Prolancer →
        </a>
      </div>
    </section>
  );
}

export const ProlancerOpportunities = memo(ProlancerOpportunitiesComponent);
