import { memo } from "react";

function ConsultingComponent() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        <div className="col-span-2 text-center">
          <h2 className="text-[#1D1D1D] text-2xl md:text-4xl font-bold mb-4">
            Consultoria de tecnologia, reimaginada
          </h2>
          <p className="text-[#6E6E6E] text-lg">
            A Doveon é uma consultoria de tecnologia e inovação, mas
            fundamentalmente diferente.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#FF4ED9] p-6 rounded-2xl shadow-lg relative w-80 md:w-96">
            <div className="flex justify-center mb-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/3.png"
                  alt="Logo Doveon"
                  className="w-16 h-16 ml-1"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white text-[#FF4ED9] font-semibold py-3 px-4 rounded-lg shadow">
                Deploy Frequency
              </div>
              <div className="bg-white text-[#FF4ED9] font-semibold py-3 px-4 rounded-lg shadow">
                Lead Time for Changes
              </div>
              <div className="bg-white text-[#FF4ED9] font-semibold py-3 px-4 rounded-lg shadow">
                Failure Rate
              </div>
              <div className="bg-white text-[#FF4ED9] font-semibold py-3 px-4 rounded-lg shadow">
                Time to Restore
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white text-sm">DORA</p>
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
                  d="M12 11c0 .829-.671 1.5-1.5 1.5S9 11.829 9 11s.671-1.5 1.5-1.5S12 10.171 12 11zM13 17.536a5.972 5.972 0 01-4-1.535c-1.733-1.503-2.486-3.753-2.735-5.996M21 12.043A9.972 9.972 0 0113.415 19"
                />
              </svg>
            </div>
            <p className="text-[#5546FF] text-lg font-semibold ml-2">
              Garantia de performance
            </p>
          </div>
          <h3 className="text-[#1D1D1D] text-2xl font-bold mb-4">
            Performance garantida, não horas
          </h3>
          <p className="text-[#6E6E6E] text-lg mb-4">
            Não se limite a horas trabalhadas ou escopo fechado, tenha métricas
            de eficiência e qualidade do trabalho como garantia em contrato.
          </p>
          <p className="text-[#6E6E6E] text-lg mb-8">
            Como parâmetro de performance, a Doveon usa as métricas DORA, do
            Google, como principal modelo de garantia. <br />
            <strong>Baixa performance? Você não paga.</strong>
          </p>
          <button className="bg-[#5546FF] text-white py-2 px-4 rounded-lg hover:bg-[#3B34CC] transition">
            Saiba mais →
          </button>
        </div>
      </div>
    </section>
  );
}

export const Consulting = memo(ConsultingComponent);