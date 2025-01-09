import { memo } from "react";

function EvalutionsComponent() {
  return (
    <section className="container mx-auto bg-[#2D64FF] py-16 px-4 md:px-8 rounded-2xl text-white">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              O que falam sobre a Doveon
            </h2>
            <p className="text-lg">
              Alta satisfação de empresas e profissionais que trabalham com a Doveon
            </p>
          </div>
          <div className="flex items-center mt-6 md:mt-0">
            <span className="text-4xl font-bold mr-2">4.9</span>
            <span>⭐ Avaliações Google</span>
          </div>
        </div>

        {/* Cards de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1E47B6] p-6 rounded-lg">
            <p className="text-xl italic mb-6">
              "Estou com a Doveon há 4 anos. Vemos eles como muito mais que um fornecedor. Vemos um parceiro estratégico de alta performance. Estou muito satisfeito e animado com que construímos juntos até aqui."
            </p>
            <div className="flex items-center">
              <img
                src="/path-to-avatar1.jpg"
                alt="Avatar de Fabio"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Fabio Françoso</p>
                <p className="text-sm">CIO @ Advanced</p>
              </div>
            </div>
            <button className="mt-4 text-sm text-[#FFD700] font-bold flex items-center">
              Ver case →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1E47B6] p-6 rounded-lg">
            <p className="text-xl italic mb-6">
              "Metodologia, interesse, esforço e habilidade de se aprofundar nas reais necessidades do negócio. Grandes desafios surgiram e em todos eles a Doveon se mostrou flexível e comprometida em resolver a situação."
            </p>
            <div className="flex items-center">
              <img
                src="/path-to-avatar2.jpg"
                alt="Avatar de Bruno"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Bruno Nunes</p>
                <p className="text-sm">CTO @ Trinus</p>
              </div>
            </div>
            <button className="mt-4 text-sm text-[#FFD700] font-bold flex items-center">
              Ver case →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1E47B6] p-6 rounded-lg">
            <p className="text-xl italic mb-6">
              "Promoveram a seniorização do meu time interno. Um parceiro de elite traz a velocidade que precisamos para mover ponteiros de negócio."
            </p>
            <div className="flex items-center">
              <img
                src="/path-to-avatar3.jpg"
                alt="Avatar de Tiago"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Tiago Leocadio</p>
                <p className="text-sm">CTO & Partner @ Grafeno</p>
              </div>
            </div>
            <button className="mt-4 text-sm text-[#FFD700] font-bold flex items-center">
              Ver case →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Evalutions = memo(EvalutionsComponent);
