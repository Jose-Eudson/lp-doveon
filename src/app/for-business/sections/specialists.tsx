import { memo } from "react";

function SpecialistsComponent() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        <div className="flex justify-center">
          <div className="bg-[#FF4ED9] p-6 rounded-2xl shadow-lg w-80 md:w-96">
            <div className="relative">

              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                  <p className="text-[#FF4ED9] font-bold">Cliente</p>
                </div>
              </div>

              {/* Círculos inferiores */}
              <div className="absolute bottom-10 left-1/4 transform -translate-x-1/2 text-center">
                <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
                  <p className="text-[#FF4ED9] text-sm font-semibold">
                    Time de Discovery
                  </p>
                </div>
              </div>
              <div className="absolute bottom-10 right-1/4 transform translate-x-1/2 text-center">
                <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
                  <p className="text-[#FF4ED9] text-sm font-semibold">
                    Time de Delivery
                  </p>
                </div>
              </div>
              <div className="absolute top-4 left-1/3 transform -translate-x-1/2 text-center">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                  <p className="text-[#FF4ED9] text-sm font-semibold">
                    Account Manager
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-1/3 transform translate-x-1/2 text-center">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                  <p className="text-[#FF4ED9] text-sm font-semibold">
                    Tech Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  d="M9.75 9V5.25a2.25 2.25 0 114.5 0V9m-6 0a6 6 0 1112 0v4.5c0 2.25 0 4.5-6 6-6-1.5-6-3.75-6-6V9z"
                />
              </svg>
            </div>
            <p className="text-[#5546FF] text-lg font-semibold ml-2">
              Especialistas em gestão
            </p>
          </div>
          <h3 className="text-[#1D1D1D] text-2xl font-bold mb-4">
            Especialistas para você focar no core
          </h3>
          <p className="text-[#6E6E6E] text-lg mb-4">
            Na BossaBox, você tem um time de Especialistas em produto e
            tecnologia gerenciando o Squad para que você possa ser mais
            estratégico e produtivo.
          </p>
          <p className="text-[#6E6E6E] text-lg mb-8">
            É papel do time de Especialistas garantir alinhamento e performance
            no mais alto nível.
          </p>
          <button className="bg-[#5546FF] text-white py-2 px-4 rounded-lg hover:bg-[#3B34CC] transition">
            Saiba mais →
          </button>
        </div>
      </div>
    </section>
  );
}

export const Specialists = memo(SpecialistsComponent);