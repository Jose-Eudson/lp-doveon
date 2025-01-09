import { memo } from "react";

function DemandComponent() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 text-white text-center">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl text-[#151515] md:text-4xl font-medium leading-tight mb-6">
          Tenha um squad sob demanda em até <br />
          <span className="text-[#000]">10 dias com performance garantida</span>
        </h2>

        {/* Descrição */}
        <p className="text-lg text-[#848181] mb-8">
          Ao preencher o formulário, um Especialista de Produtos irá entrar em
          contato com você no mesmo dia.
        </p>

        {/* Botão */}
        <button className="bg-[#5546FF] text-white py-3 px-6 text-lg font-bold rounded-lg hover:bg-[#3B34CC] transition">
          Fale com um Especialista →
        </button>
      </div>
    </section>
  );
}

export const Demand = memo(DemandComponent);
