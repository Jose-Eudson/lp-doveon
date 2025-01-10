import { memo } from "react";

function ProlancerProfileComponent() {
  return (
    <section className="container mx-auto bg-[#09012F] py-16 px-4 rounded-2xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Coluna Esquerda */}
        <div>
          <h3 className="text-white text-3xl font-bold mb-4">
            Perfil ideal de Prolancer
          </h3>
          <p className="text-[#E0E0E0] text-lg mb-8">
            A Doveon atualmente prioriza profissionais seniores que possuem
            mais de 6 anos de experiência.
          </p>
          <button className="bg-transparent border border-[#6C63FF] text-[#6C63FF] py-2 px-4 rounded-lg hover:bg-[#6C63FF] hover:text-white transition">
            Seja um Prolancer →
          </button>
        </div>

        {/* Coluna Direita */}
        <div className="bg-[#120240] text-white p-8 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold mb-6">+6 anos de experiência</h4>
          <div className="grid grid-cols-2 gap-6">
            {/* Categoria Software */}
            <div>
              <p className="text-lg font-semibold mb-2 flex items-center">
                <span className="inline-block w-6 h-6 bg-[#6C63FF] rounded-full mr-2"></span>
                Software
              </p>
              <ul className="text-[#CFCFCF] text-sm space-y-1">
                <li>Software Engineer Sr.</li>
                <li>Tech Lead</li>
              </ul>
            </div>

            {/* Categoria Produto */}
            <div>
              <p className="text-lg font-semibold mb-2 flex items-center">
                <span className="inline-block w-6 h-6 bg-[#6C63FF] rounded-full mr-2"></span>
                Produto
              </p>
              <ul className="text-[#CFCFCF] text-sm space-y-1">
                <li>Product Manager Sr.</li>
                <li>Product Owner Sr.</li>
              </ul>
            </div>

            {/* Categoria Design */}
            <div>
              <p className="text-lg font-semibold mb-2 flex items-center">
                <span className="inline-block w-6 h-6 bg-[#6C63FF] rounded-full mr-2"></span>
                Design
              </p>
              <ul className="text-[#CFCFCF] text-sm space-y-1">
                <li>Product Designers Sr.</li>
                <li>UI/UX Designers Sr.</li>
              </ul>
            </div>

            {/* Categoria Outros */}
            <div>
              <p className="text-lg font-semibold mb-2 flex items-center">
                <span className="inline-block w-6 h-6 bg-[#6C63FF] rounded-full mr-2"></span>
                Outros
              </p>
              <ul className="text-[#CFCFCF] text-sm space-y-1">
                <li>DevOps Sr.</li>
                <li>QA Sr.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const ProlancerProfile = memo(ProlancerProfileComponent);
