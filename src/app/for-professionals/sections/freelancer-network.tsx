import { memo } from "react";

function FreelancerNetworkComponent() {
  return (
    <section className="container mx-auto rounded-2xl bg-[#00B167] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título e Subtítulo */}
        <h2 className="text-3xl font-bold mb-4">
          Faça parte da maior rede de freelancers profissionais
        </h2>
        <p className="text-lg mb-12">
          Tenha acesso a uma comunidade de pessoas sêniores e engajadas.
        </p>

        {/* Cards dos Contadores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "+35 mil", label: "Cadastrados" },
            { value: "+6 mil", label: "Qualificados" },
            { value: "+1 mil", label: "Alocados" },
            { value: "+120", label: "Projetos feitos" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#00D177] p-6 rounded-lg shadow-md text-center"
            >
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const FreelancerNetwork = memo(FreelancerNetworkComponent);
