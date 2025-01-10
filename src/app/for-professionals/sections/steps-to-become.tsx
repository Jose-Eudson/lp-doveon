import { memo } from "react";

function StepsToBecomeProlancerComponent() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-[#09012F] text-3xl font-bold mb-4">
          Caminho para se tornar um Prolancer
        </h3>
        <p className="text-[#6E6E6E] text-lg mb-12">
          Muito mais que um marketplace de jobs. Encontre projetos freelancer
          com uma empresa parceira te ajudando nas partes chatas.
        </p>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Cadastre-se como Prolancer",
              description:
                "Preencha o formulário inicial e conheça nossa plataforma.",
            },
            {
              step: "2",
              title: "Complete seu perfil",
              description:
                "Faça seu perfil e complete suas informações de carreira.",
            },
            {
              step: "3",
              title: "Entrevistas",
              description:
                "3 etapas de entrevista: comportamental, técnica e match com projeto.",
            },
            {
              step: "4",
              title: "Alocação em Projeto",
              description:
                "Uma vez aprovado, seja alocado em projetos compatíveis com seu perfil.",
            },
            {
              step: "5",
              title: "Acessos",
              description:
                "Receba acesso a ferramentas e materiais necessários de trabalho.",
            },
            {
              step: "6",
              title: "Conheça o time",
              description:
                "Conheça seu Squad e time de Especialistas da Doveon.",
            },
            {
              step: "7",
              title: "Conheça o projeto",
              description:
                "Conheça tudo sobre o projeto e comece a fazer as primeiras entregas.",
            },
            {
              step: "8",
              title: "Remuneração",
              description:
                "Receba a cada duas semanas de forma segura, mediante boa performance do Squad.",
            },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#E6E8FF] text-[#5546FF] rounded-full flex items-center justify-center text-lg font-bold mb-4">
                {item.step}
              </div>
              <h4 className="text-[#09012F] text-lg font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-[#6E6E6E] text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div className="mt-12">
          <button className="bg-[#5546FF] text-white py-3 px-6 rounded-lg hover:bg-[#3B34CC] transition">
            Seja um Prolancer →
          </button>
        </div>
      </div>
    </section>
  );
}

export const StepsToBecomeProlancer = memo(StepsToBecomeProlancerComponent);
