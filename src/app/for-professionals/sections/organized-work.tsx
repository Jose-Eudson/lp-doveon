import { memo } from "react";

function OrganizedWorkComponent() {
  return (
    <section className="container mx-auto bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Coluna Esquerda */}
        <div>
          <p className="text-[#5546FF] text-lg font-medium flex items-center mb-4">
            <span className="bg-[#E6E8FF] text-[#5546FF] w-6 h-6 flex items-center justify-center rounded-full mr-2">
              🏗️
            </span>
            Estrutura de trabalho
          </p>
          <h3 className="text-[#09012F] text-2xl font-bold mb-4">
            Trabalhe de forma organizada
          </h3>
          <p className="text-[#6E6E6E] text-lg">
            Aqui, todos os projetos possuem Especialistas da Doveon e métodos
            para gestão do projeto. Isso quer dizer mais clareza, tranquilidade
            e tempo para você focar naquilo que gosta de fazer.
          </p>
        </div>

        {/* Coluna Direita */}
        <div className="bg-gradient-to-br from-[#FF80BF] to-[#FF4081] p-8 rounded-lg shadow-lg relative">
          {/* Título central no topo */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold">
            Processos
          </div>

          {/* Ícone central */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
            <img
              src="/bossa-logo.png"
              alt="Logo"
              className="w-8 h-8"
            />
          </div>

          {/* Círculos de papéis */}
          <div className="flex justify-center items-center relative h-64">
            {/* Círculo superior */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white text-center text-sm text-[#09012F] p-4 rounded-full shadow-md w-32">
              Account Manager
            </div>

            {/* Círculo inferior esquerdo */}
            <div className="absolute bottom-4 left-1/4 bg-white text-center text-sm text-[#09012F] p-4 rounded-full shadow-md w-32">
              Delivery Manager
            </div>

            {/* Círculo inferior direito */}
            <div className="absolute bottom-4 right-1/4 bg-white text-center text-sm text-[#09012F] p-4 rounded-full shadow-md w-32">
              Tech Manager
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const OrganizedWork = memo(OrganizedWorkComponent);
