import { memo } from "react";

function SolutionsComponent() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D1D1D] mb-4">
          Soluções oferecidas
        </h2>
        <p className="text-lg text-[#6E6E6E] mb-12">
          Descubra quais soluções a Doveon oferece...
        </p>

        {/* Trilha principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Discovery Track */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-pink-100 p-4 rounded-full mb-4">
              <img
                src="/path-to-discovery-icon.svg"
                alt="Discovery Track"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">
              Discovery Track
            </h3>
            <p className="text-sm text-[#6E6E6E]">
              Métodos de discovery para redução de riscos associados ao
              desenvolvimento de software.
            </p>
          </div>

          {/* Dual Track */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-pink-100 p-4 rounded-full mb-4">
              <img
                src="/path-to-dualtrack-icon.svg"
                alt="Dual Track"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">Dual Track</h3>
            <p className="text-sm text-[#6E6E6E]">
              Descoberta e desenvolvimento completo de produtos, features,
              novas plataformas e melhorias.
            </p>
          </div>

          {/* Delivery Track */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-pink-100 p-4 rounded-full mb-4">
              <img
                src="/path-to-deliverytrack-icon.svg"
                alt="Delivery Track"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">
              Delivery Track
            </h3>
            <p className="text-sm text-[#6E6E6E]">
              Delivery de produto acelerado para destravar esteira de
              desenvolvimento de software.
            </p>
          </div>
        </div>

        {/* Descrição adicional */}
        <p className="text-lg text-[#6E6E6E] mb-12">
          ...e como elas podem ser aplicadas em diferentes casos de uso.
        </p>

        {/* Casos de uso */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Novos Produtos */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/path-to-novos-produtos-icon.svg"
              alt="Novos Produtos"
              className="w-10 h-10 mb-4"
            />
            <h4 className="text-lg font-bold text-[#1D1D1D] mb-2">
              Novos Produtos
            </h4>
            <p className="text-sm text-[#6E6E6E]">
              Construção e lançamento de novos produtos internos e externos.
            </p>
          </div>

          {/* Novas Features */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/path-to-novas-features-icon.svg"
              alt="Novas Features"
              className="w-10 h-10 mb-4"
            />
            <h4 className="text-lg font-bold text-[#1D1D1D] mb-2">
              Novas Features
            </h4>
            <p className="text-sm text-[#6E6E6E]">
              Melhoria de produtos em operação por meio de novas
              funcionalidades.
            </p>
          </div>

          {/* Novas Plataformas */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/path-to-novas-plataformas-icon.svg"
              alt="Novas Plataformas"
              className="w-10 h-10 mb-4"
            />
            <h4 className="text-lg font-bold text-[#1D1D1D] mb-2">
              Novas Plataformas
            </h4>
            <p className="text-sm text-[#6E6E6E]">
              Expansão para novas plataformas web, desktop ou mobile.
            </p>
          </div>

          {/* Rebuild */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/path-to-rebuild-icon.svg"
              alt="Rebuild"
              className="w-10 h-10 mb-4"
            />
            <h4 className="text-lg font-bold text-[#1D1D1D] mb-2">Rebuild</h4>
            <p className="text-sm text-[#6E6E6E]">
              Reconstrução total de produtos em operação.
            </p>
          </div>
        </div>

        {/* Botão */}
        <button className="bg-[#5546FF] text-white py-3 px-6 text-lg font-bold rounded-lg hover:bg-[#3B34CC] transition">
          Fale com um Especialista →
        </button>
      </div>
    </section>
  );
}

export const Solutions = memo(SolutionsComponent);
