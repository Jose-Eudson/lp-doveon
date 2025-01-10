import { memo } from "react";

function HelpWithTasksComponent() {
  return (
    <section className="container mx-auto bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Coluna Esquerda */}
        <div className="bg-[#2F6FFF] text-white p-8 rounded-lg shadow-lg relative">
          {/* Card Interno */}
          <div className="bg-white text-[#09012F] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              {/* Imagem do usuário */}
              <div className="bg-[#E6E8FF] rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <span className="text-[#2F6FFF] text-xl font-bold">👨‍💻</span>
              </div>
              <div>
                <p className="text-lg font-semibold">Renato</p>
                <p className="text-sm text-[#6E6E6E]">Software Engineer</p>
              </div>
            </div>

            {/* Lista de tarefas */}
            <div className="space-y-4">
              {[
                "Orçamentos",
                "Briefings",
                "Planejamento",
                "Invoice e cobrança",
                "Gestão de expectativa",
                "Novos vendedores",
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-[#6E6E6E]"
                >
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="mr-2 text-[#2F6FFF] focus:ring-[#2F6FFF]"
                  />
                  <p>
                    {task} <span className="text-[#5546FF] ml-1">• Doveon</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div>
          <p className="text-[#5546FF] text-lg font-medium flex items-center mb-4">
            <span className="bg-[#E6E8FF] text-[#5546FF] w-6 h-6 flex items-center justify-center rounded-full mr-2">
              🛠️
            </span>
            Facilidade e praticidade
          </p>
          <h3 className="text-[#09012F] text-2xl font-bold mb-4">
            Alguém para fazer a parte chata por você
          </h3>
          <p className="text-[#6E6E6E] text-lg">
            Pare de fazer as coisas burocráticas que um freelancer normal tem
            que fazer. Venda, orçamentos, contratos, invoices e cobranças. A
            Doveon faz tudo isso por você.
          </p>
        </div>
      </div>
    </section>
  );
}

export const HelpWithTasks = memo(HelpWithTasksComponent);
