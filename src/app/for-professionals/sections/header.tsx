import { memo } from 'react';

function HeaderComponent() {
  return (
    <header className="container mx-auto bg-white h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-4 md:px-8">
      {/* Conteúdo do Texto */}
      <div className="flex-1">
        <p className="text-[#6E6E6E] text-lg font-medium mb-8 max-w-xl">Para Profissionais</p>
        <h1 className="text-[#1D1D1D] text-2xl md:text-4xl font-sans leading-tight mb-6">
        Encontre projetos freelancer,<br />
          <span className="text-[#1D1D1D] font-bold">sem o estresse de ser um</span>
        </h1>
        <p className="text-[#6E6E6E] text-lg font-medium mb-8 max-w-xl">
        Esteja no lugar que profissionais seniores e engajados encontram o melhor jeito de fazer freelancer.
        </p>
        <button className="bg-[#5546FF] text-white py-3 px-6 text-lg font-bold hover:bg-[#3B34CC] transition rounded-lg">
          Seja um Prolancer →
        </button>
      </div>

      {/* Imagem */}
      <div className="flex-1 flex justify-center">
        <img
          src="/10.jpg"
          alt="Ilustração de squads em alta performance"
          className="w-96 md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);
