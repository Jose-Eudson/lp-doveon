import { memo } from "react";

function WorkWithTalentedProfessionalsComponent() {
  return (
    <section className="container mx-auto bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Coluna Esquerda */}
        <div>
          <p className="text-[#5546FF] text-lg font-medium flex items-center mb-4">
            <span className="bg-[#E6E8FF] text-[#5546FF] w-6 h-6 flex items-center justify-center rounded-full mr-2">
              🧑‍🤝‍🧑
            </span>
            Trabalho em Squad
          </p>
          <h3 className="text-[#09012F] text-2xl font-bold mb-4">
            Trabalhe com profissionais talentosos
          </h3>
          <p className="text-[#6E6E6E] text-lg">
            Não faça freelancing sozinho. Na Doveon, você desenvolve suas
            habilidades trabalhando com pessoas sêniores, experientes e
            engajadas com o projeto.
          </p>
        </div>

        {/* Coluna Direita */}
        <div className="bg-[#1D1D2F] text-white p-8 rounded-lg shadow-lg">
          {/* Perfil do profissional */}
          <div className="bg-white text-[#09012F] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              {/* Imagem do perfil */}
              <div className="bg-[#E6E8FF] rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <span className="text-[#2F6FFF] text-xl font-bold">👩‍💻</span>
              </div>
              <div>
                <p className="text-lg font-semibold">Kherliane</p>
                <p className="text-sm text-[#6E6E6E]">Product Manager</p>
              </div>
            </div>

            {/* Experiência */}
            <p className="text-sm text-[#6E6E6E] mb-4">3 anos de xp.</p>

            {/* Lista de cargos */}
            <div className="space-y-3">
              {[
                { title: "Growth Product Manager", company: "Conta Simples" },
                { title: "Principal PO", company: "Farmácias App" },
                { title: "Business Analyst", company: "DOT Digital" },
              ].map((job, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-[#E6E8FF] w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#2F6FFF] text-xs font-bold">🏢</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{job.title}</p>
                    <p className="text-xs text-[#6E6E6E]">{job.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="mt-6">
              <span className="bg-[#E6E8FF] text-[#5546FF] py-1 px-4 rounded-full text-xs font-medium inline-flex items-center">
                ✅ Perfil real alocado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const WorkWithTalentedProfessionals = memo(WorkWithTalentedProfessionalsComponent);
