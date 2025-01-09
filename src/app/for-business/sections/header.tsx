import { memo } from 'react';

function HeaderComponent() {
  return (
    <header className="container mx-auto bg-white h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-4 md:px-8">
      {/* Conteúdo do Texto */}
      <div className="flex-1">
        <h1 className="text-[#1D1D1D] text-2xl md:text-5xl font-medium leading-tight mb-6">
          Squads com performance<br />
          <span className="text-[#5546FF]">garantida em contrato</span>
        </h1>
        <p className="text-[#6E6E6E] text-lg font-medium mb-8 max-w-xl">
          Grandes empresas e scale-ups usam a Doveon para trazer velocidade e qualidade no desenvolvimento de produtos digitais.
        </p>
        <button className="bg-[#5546FF] text-white py-3 px-6 text-lg font-bold hover:bg-[#3B34CC] transition rounded-lg">
          Conheça nossos serviços
        </button>
      </div>

      {/* Imagem */}
      <div className="flex-1 flex justify-center">
        <img
          src="/image.jpg"
          alt="Ilustração de squads em alta performance"
          className="w-96 md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);
