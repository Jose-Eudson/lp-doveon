import { memo } from "react";

function SquadsComponent() {
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.03 6.263a1.003 1.003 0 00.95.69h6.576c.969 0 1.371 1.24.588 1.81l-5.347 3.868a1 1 0 00-.364 1.118l2.03 6.263c.3.921-.755 1.688-1.54 1.118L12 17.011l-5.346 3.868c-.785.57-1.84-.197-1.54-1.118l2.03-6.263a1 1 0 00-.364-1.118L1.433 11.69c-.784-.57-.38-1.81.588-1.81h6.576a1.003 1.003 0 00.95-.69l2.03-6.263z"
                />
              </svg>
            </div>
            <p className="text-[#5546FF] text-lg font-semibold ml-2">
              Seniores de verdade
            </p>
          </div>
          <h3 className="text-[#1D1D1D] text-2xl font-bold mb-4">
            Squads e profissionais selecionados
          </h3>
          <p className="text-[#6E6E6E] text-lg mb-4">
            Por não possuir barreiras geográficas e trabalhar com maior
            flexibilidade, a BossaBox possui vantagens ao competir por talento
            no mercado.
          </p>
          <p className="text-[#6E6E6E] text-lg mb-8">
            Cada Squad é selecionado de maneira única e composto pelos
            profissionais que melhor atendem às necessidades específicas do seu
            projeto.
          </p>
          <button className="bg-[#5546FF] text-white py-2 px-4 rounded-lg hover:bg-[#3B34CC] transition">
            Saiba mais →
          </button>
        </div>

      
        <div className="bg-[#1D1D3A] w-full h-96 rounded-lg shadow-lg flex items-center justify-center">
          <p className="text-white text-lg">Carrossel em desenvolvimento</p>
        </div>
      </div>
    </section>
  );
}

export const Squads = memo(SquadsComponent);