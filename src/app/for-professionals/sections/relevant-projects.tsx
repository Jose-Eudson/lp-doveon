import { memo } from "react";

function RelevantProjectsComponent() {
  return (
    <section className="container mx-auto bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Coluna Esquerda */}
        <div className="bg-[#1D1D2F] text-white p-6 rounded-lg shadow-lg relative">
          <div className="grid grid-cols-7 gap-4 text-center">
            {/* Colunas para cada mês */}
            {[
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
            ].map((month, index) => (
              <div
                key={index}
                className="text-[#B0C7FF] text-xs flex flex-col items-center"
              >
                {month}
              </div>
            ))}
          </div>

          {/* Estratégia */}
          <div className="text-center mt-6">
            <p className="text-lg font-semibold mb-2">Estratégia</p>
            <div className="flex justify-center space-x-2">
              <div className="w-4 h-8 border-l border-b-2 border-pink-500"></div>
              <div className="w-4 h-8 border-l border-b-2 border-pink-500"></div>
              <div className="w-4 h-8 border-l border-b-2 border-pink-500"></div>
            </div>
          </div>

          {/* Discovery */}
          <div className="text-center mt-6">
            <p className="text-lg font-semibold mb-2">Discovery</p>
            <div className="flex justify-center space-x-2">
              <div className="w-4 h-8 border-l border-b-2 border-pink-500"></div>
              <div className="w-4 h-8 border-l border-b-2 border-pink-500"></div>
            </div>
          </div>

          {/* Delivery */}
          <div className="text-center mt-6">
            <p className="text-lg font-semibold mb-2">Delivery</p>
            <div className="flex justify-center space-x-2">
              <div className="w-4 h-8 border-l border-b-2 border-pink-500"></div>
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div>
          <p className="text-[#5546FF] text-lg font-medium flex items-center mb-4">
            <span className="bg-[#E6E8FF] text-[#5546FF] w-6 h-6 flex items-center justify-center rounded-full mr-2">
              📘
            </span>
            Projetos relevantes
          </p>
          <h3 className="text-[#09012F] text-2xl font-bold mb-4">
            Projetos de longo prazo em grandes empresas
          </h3>
          <p className="text-[#6E6E6E] text-lg">
            Os projetos na Doveon normalmente são de longo prazo, com escopos
            interessantes, em stacks atuais, com métodos modernos e em empresas
            relevantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export const RelevantProjects = memo(RelevantProjectsComponent);
