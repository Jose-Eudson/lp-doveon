import { memo } from "react";

function AllocationComponent() {
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-6-8.28"
                />
              </svg>
            </div>
            <p className="text-[#5546FF] text-lg font-semibold ml-2">
              Alocação em 10 dias
            </p>
          </div>
          <h3 className="text-[#1D1D1D] text-2xl font-bold mb-4">
            10 dias para alocar e escala para crescer
          </h3>
          <p className="text-[#6E6E6E] text-lg mb-4">
            Com uma extensa rede de profissionais à sua disposição, você
            consegue ter um Squad alocado em 10 dias e crescer seu time com
            velocidade.
          </p>
          <p className="text-[#6E6E6E] text-lg mb-8">
            Dessa forma, você ganha facilidade e assertividade na contratação.
          </p>
          <button className="bg-[#5546FF] text-white py-2 px-4 rounded-lg hover:bg-[#3B34CC] transition">
            Saiba mais →
          </button>
        </div>

        <div className="bg-[#2F6FFF] text-white p-6 rounded-lg shadow-lg relative">
          <div className="space-y-8 text-center">
            <div>
              <p className="text-3xl font-bold">+35 mil</p>
              <p className="text-lg">Profissionais cadastrados</p>
            </div>
            <div>
              <p className="text-3xl font-bold">+6 mil</p>
              <p className="text-lg">Profissionais pré-qualificados</p>
            </div>
            <div>
              <p className="text-3xl font-bold">+1 mil</p>
              <p className="text-lg">Profissionais alocados</p>
            </div>
          </div>
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white text-[#2F6FFF] py-2 px-6 rounded-full shadow-md">
            10 dias para ter um Squad completo
          </div>
        </div>
      </div>
    </section>
  );
}

export const Allocation= memo(AllocationComponent);