import { memo } from "react";

function EvaluationsComponent() {
  return (
    <section className="container mx-auto bg-[#2F6FFF] py-16 px-4 rounded-2xl">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h3 className="text-3xl font-bold mb-4">O que falam sobre ser Prolancer</h3>
        <p className="text-lg mb-12">
          Veja o que as pessoas que trabalharam com a Doveon têm a dizer sobre a experiência de ser Prolancer.
        </p>

        {/* Avaliações */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">⭐ 4.7</span>
            <span className="text-sm">glassdoor</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">⭐ 4.9</span>
            <span className="text-sm">Google</span>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Sou Prolancer na Doveon há aproximadamente 1 ano. A empresa é muito séria, trata a todos os profissionais com muito cuidado e respeito. A senioridade dos times garante a qualidade das entregas dentro dos prazos e com toda segurança. É uma grande fonte de crescimento, além de ajudar como uma renda extra.",
              name: "Paulo L.",
              role: "Product Manager",
              img: "https://via.placeholder.com/40", // Substitua pela URL da imagem real
            },
            {
              quote:
                "A Doveon é a empresa que impulsionou minha carreira, e muito do que conquistei se deu ao fato da oportunidade que me deram nesses quase quatro anos. Indico a todos porque sei que é uma empresa séria e que vai fazer o melhor para atender seus clientes e profissionais.",
              name: "Gabriel S.",
              role: "Tech Lead",
              img: "https://via.placeholder.com/40", // Substitua pela URL da imagem real
            },
            {
              quote:
                "Pessoalmente, a Doveon está no meu coração. Acompanho essa galera há cerca de 2 anos já, e durante todo esse tempo pude ver de perto alguns pontos que não eram apenas marketing. Se você chegou até aqui e está pensando em ser um Prolancer, siga em frente! É uma chance incrível, mas que vai exigir maturidade e dedicação adequadas.",
              name: "Guilherme S.",
              role: "Software Engineer",
              img: "https://via.placeholder.com/40", // Substitua pela URL da imagem real
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1C54DD] p-6 rounded-lg shadow-lg text-left"
            >
              <p className="text-sm mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-[#B0C7FF]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Evaluations = memo(EvaluationsComponent);
