import { memo } from "react";

function ProductMethodologyComponent() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        <div>
          <div className="flex items-center mb-4">
            <div className="bg-[#E6E8FF] text-[#5546FF] w-8 h-8 flex items-center justify-center rounded-full shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m7 7h8M19 21V3"
                />
              </svg>
            </div>
            <p className="text-[#5546FF] text-lg font-semibold ml-2">
              Metodologia de produto
            </p>
          </div>
          <h3 className="text-[#1D1D1D] text-2xl font-bold mb-4">
            Entregas e resultados alinhados
          </h3>
          <p className="text-[#6E6E6E] text-lg mb-4">
            Métodos de imersão, descoberta, desenvolvimento e deploy de
            produtos digitais testados em mais de 140 projetos. Processos de
            construção co-criado e iterativo, visando resultados tangíveis.
          </p>
          <p className="text-[#6E6E6E] text-lg mb-8">
            É importante fazer produto rápido. Mas é mais importante ainda
            fazer o produto certo.
          </p>
          <button className="bg-[#5546FF] text-white py-2 px-4 rounded-lg hover:bg-[#3B34CC] transition">
            Saiba mais →
          </button>
        </div>

        {/* Card azul com o diagrama */}
        <div className="bg-[#2F6FFF] text-white p-6 rounded-lg shadow-lg relative">
          <div className="flex flex-col space-y-8 text-center">

            <div>
              <p className="text-lg font-semibold mb-2">Estratégia</p>
              <div className="flex justify-center space-x-2">
                <div className="w-4 h-8 border-l border-b-2 border-[#2F6FFF]"></div>
                <div className="w-4 h-8 border-l border-b-2 border-[#2F6FFF]"></div>
                <div className="w-4 h-8 border-l border-b-2 border-[#2F6FFF]"></div>
              </div>
            </div>

          
            <div>
              <p className="text-lg font-semibold mb-2">Discovery</p>
              <div className="flex justify-center space-x-2">
              <div className="w-4 h-8 border-l border-b-2 border-[#2F6FFF]"></div>
                <div className="w-4 h-8 border-l border-b-2 border-[#2F6FFF]"></div>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Delivery</p>
              <div className="flex justify-center space-x-2">
                <div className="w-4 h-8 border-l border-b-2 border-[#2F6FFF]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const ProductMethodology = memo(ProductMethodologyComponent);