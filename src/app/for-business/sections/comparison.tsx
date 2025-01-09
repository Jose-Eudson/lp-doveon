import { memo } from "react";

function ComparisonComponent() {
  return (
    <section className="container mx-auto bg-[#1E1E40] rounded-2xl text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Entenda o que faz a Doveon ser diferente
        </h2>
        <p className="text-lg font-medium mb-12 max-w-3xl mx-auto">
          As opções de terceirização historicamente disponíveis estão se tornando cada vez mais inadequadas para o cenário de alta competitividade e dinamismo que as empresas se encontram.
        </p>
      </div>

      {/* Tabela Comparativa */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Coluna 1 - Categorias */}
        <div className="bg-[#292954] p-4 rounded-lg">
          <p className="font-bold mb-4">Modelo de Contrato</p>
          <p className="font-bold mb-4">Talento</p>
          <p className="font-bold mb-4">Flexibilidade</p>
          <p className="font-bold mb-4">Gestão</p>
          <p className="font-bold">Metodologia</p>
        </div>

        {/* Coluna 2 - Consultorias */}
        <div className="bg-[#292954] p-4 rounded-lg">
          <p className="mb-4">
            <strong>Escopo:</strong> A maioria trabalha com escopo, prazo e custo fechados.
          </p>
          <p className="mb-4">
            <strong>Desconhecido:</strong> Difícil saber o profissional específico alocado no projeto.
          </p>
          <p className="mb-4">
            <strong>Baixa:</strong> Complexo e lento alterar a rota conforme novas demandas.
          </p>
          <p className="mb-4">
            <strong>Da consultoria:</strong> Pessoas da consultoria fazem a gestão do projeto.
          </p>
          <p>
            <strong>Gestão de projetos:</strong> Ênfase em gestão de tempo, custo e escopo.
          </p>
        </div>

        {/* Coluna 3 - Body Shops */}
        <div className="bg-[#292954] p-4 rounded-lg">
          <p className="mb-4">
            <strong>Horas trabalhadas:</strong> Contrato baseado em valor-hora estipulado previamente.
          </p>
          <p className="mb-4">
            <strong>Alocado em clientes:</strong> Profissionais da fornecedora alocados em um ou mais clientes.
          </p>
          <p className="mb-4">
            <strong>Alta:</strong> Simples adaptar o investimento conforme novas demandas.
          </p>
          <p className="mb-4">
            <strong>Da contratante:</strong> Cliente é responsável pela gestão de quem está alocado no projeto.
          </p>
          <p>
            <strong>À depender:</strong> Depende de como é o modelo de gestão da contratante.
          </p>
        </div>

        {/* Coluna 4 - Doveon */}
        <div className="bg-[#292954] p-4 rounded-lg">
          <p className="mb-4">
            <strong>Performance:</strong> Modelo de contrato baseado em garantia de eficiência e qualidade.
          </p>
          <p className="mb-4">
            <strong>Prolancers:</strong> Talento compatível com o projeto selecionado de um pool de talentos.
          </p>
          <p className="mb-4">
            <strong>Alta:</strong> Alta flexibilidade para escalar e adaptar os investimentos.
          </p>
          <p className="mb-4">
            <strong>Da Doveon:</strong> Pessoas da Doveon fazem a gestão do projeto.
          </p>
          <p>
            <strong>Gestão de produto:</strong> Foco em gerar resultado por meio de entregas de valor.
          </p>
        </div>
      </div>
    </section>
  );
}

export const Comparison = memo(ComparisonComponent);
