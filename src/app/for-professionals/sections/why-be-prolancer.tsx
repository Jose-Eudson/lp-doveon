import { memo } from "react";

function WhyBeProlancerComponent() {
  return (
    <section className="container mx-auto bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título e Subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-[#09012F] text-3xl font-bold mb-4">
            Por que ser Prolancer?
          </h2>
          <p className="text-[#6E6E6E] text-lg">
            Conheça os benefícios de trabalhar como Prolancer na Dovoen.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Coluna Esquerda */}
          <div>
            <p className="text-[#5546FF] text-lg font-medium flex items-center mb-4">
              <span className="bg-[#E6E8FF] text-[#5546FF] w-6 h-6 flex items-center justify-center rounded-full mr-2">
                📷
              </span>
              Boa remuneração
            </p>
            <h3 className="text-[#09012F] text-2xl font-bold mb-4">
              Remuneração segura e acima da média
            </h3>
            <p className="text-[#6E6E6E] text-lg mb-4">
              Ser freelancer tradicionalmente traz muita insegurança financeira.
              Sendo Prolancer, você é pago pela Doveon, não pelo cliente. Além
              disso, a base de remuneração é adequada periodicamente para
              valores acima da média de mercado.
            </p>
          </div>

          {/* Coluna Direita */}
          <div className="bg-[#2F6FFF] text-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              {/* Ícone */}
              <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full text-[#2F6FFF] mb-6">
                💲
              </div>
              {/* Lista */}
              <div className="space-y-4 w-full">
                <div className="bg-white text-[#2F6FFF] py-3 px-4 rounded-lg shadow-sm">
                  Renda extra segura, em projetos longos
                </div>
                <div className="bg-white text-[#2F6FFF] py-3 px-4 rounded-lg shadow-sm">
                  Pagamentos seguros, feitos pela Doveon
                </div>
                <div className="bg-white text-[#2F6FFF] py-3 px-4 rounded-lg shadow-sm">
                  Pagamentos periódicos, a cada 2 semanas
                </div>
                <div className="bg-white text-[#2F6FFF] py-3 px-4 rounded-lg shadow-sm">
                  Remuneração acima da média de mercado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const WhyBeProlancer = memo(WhyBeProlancerComponent);
