import { memo } from "react";

function FreelancerVsProlancerComponent() {
  return (
    <section className="container mx-auto rounded-2xl bg-[#1D1D2F] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título e Subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Entenda as diferenças entre o freelancer e o Prolancer
          </h2>
          <p className="text-lg text-[#CFCFCF]">
            As opções de freelancer fizeram sua função, mas são inadequadas
            para profissionais sêniores que buscam uma forma mais organizada e
            séria de trabalho autônomo.
          </p>
        </div>

        {/* Tabela Comparativa */}
        <div className="grid grid-cols-3 gap-6 text-center">
          {/* Coluna Esquerda */}
          <div>
            <h3 className="text-lg font-bold mb-6">Freelancer Tradicional</h3>
            {[
              { label: "Relacionamento com Cliente", icon: "❌" },
              { label: "Trabalho em Equipe", icon: "❌" },
              { label: "Remuneração", icon: "❌" },
              { label: "Segurança de Pagamentos", icon: "❌" },
              { label: "Relevância do Projeto", icon: "❌" },
              { label: "Flexibilidade", icon: "✅" },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm">{item.label}</p>
                <span className="text-2xl">{item.icon}</span>
              </div>
            ))}
          </div>

          {/* Coluna Central */}
          <div className="bg-[#09012F] rounded-lg p-6">
            <h3 className="text-lg font-bold mb-6">Comparativo</h3>
            {[
              { label: "De responsabilidade do profissional", icon: "❌" },
              { label: "Quase nunca", icon: "❌" },
              { label: "Baseada em leilão", icon: "❌" },
              { label: "A depender do cliente", icon: "❌" },
              { label: "Projetos pequenos", icon: "❌" },
              { label: "Muito alta", icon: "✅" },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm">{item.label}</p>
                <span className="text-2xl">{item.icon}</span>
              </div>
            ))}
          </div>

          {/* Coluna Direita */}
          <div>
            <h3 className="text-lg font-bold mb-6">Prolancer na Doveon</h3>
            {[
              { label: "De responsabilidade da Doveon", icon: "✅" },
              { label: "Em Squads de 5 a 7 pessoas", icon: "✅" },
              { label: "Estipulada com base média de mercado", icon: "✅" },
              { label: "De responsabilidade da Doveon", icon: "✅" },
              { label: "Projetos grandes e relevantes", icon: "✅" },
              { label: "Muito alta", icon: "✅" },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm">{item.label}</p>
                <span className="text-2xl">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const FreelancerVsProlancer = memo(FreelancerVsProlancerComponent);
