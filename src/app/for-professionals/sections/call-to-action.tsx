import { memo } from "react";

function CallToActionComponent() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-[#09012F] text-3xl font-bold mb-4">
          Comece agora a transformar a sua carreira
        </h2>
        {/* Subtítulo */}
        <p className="text-[#6E6E6E] text-lg mb-8">
          Cadastre-se como Prolancer e conheça o jeito mais eficaz de ser freelancer.
        </p>
        {/* Botão */}
        <a
          className="inline-block bg-[#2F6FFF] text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#1E4ED8] transition"
        >
          Seja um Prolancer →
        </a>
      </div>
    </section>
  );
}

export const CallToAction = memo(CallToActionComponent);
