import { memo } from 'react';

function PerformanceComponent() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 flex items-center justify-center">
      <div className="bg-[#0ac272] max-w-7xl mx-auto rounded-2xl grid md:grid-cols-2 gap-12 justify-between items-center">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 ml-4">Performance de elite</h2>
          <p className="text-white text-base md:text-lg mb-4 ml-4">
            Indicadores coletados com base no estudo State of DevOps Survey, feito pela organização
            DORA em parceria com o Google.
          </p>
          <p className="text-white text-base md:text-lg mb-4 ml-4">
            Foi comparada a performance média de todos os Squads da BossaBox com a média do setor de
            Tecnologia.
          </p>
          <p className="text-white text-base md:text-lg mb-8 ml-4">
            O que você vê ao lado, são alguns dos resultados do estudo.
          </p>
          <button className="bg-white text-[#0ac272] font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition ml-4">
            Fale com um Especialista →
          </button>
        </div>
        <div className="bg-[#2aca84] p-6 rounded-lg shadow-lg">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white text-lg font-bold mb-2">6x mais entregas</h3>
              <p className="text-white text-sm mb-2">
                <strong>Frequência de Deploys:</strong> Frequência com que as atualizações de
                software são lançadas para os usuários finais.
              </p>
              <p className="text-white text-sm">
                <strong>Média:</strong> 1 a cada 3 dias
              </p>
              <p className="text-white text-sm">
                <strong>BossaBox:</strong> Pelo menos 2 por dia
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">11x menos tempo</h3>
              <p className="text-white text-sm mb-2">
                <strong>Tempo de Recuperação:</strong> Tempo necessário para recuperar de uma falha
                no serviço ou de uma implementação problemática.
              </p>
              <p className="text-white text-sm">
                <strong>Média:</strong> 11 horas
              </p>
              <p className="text-white text-sm">
                <strong>BossaBox:</strong> 1 hora
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">3x mais rápidos</h3>
              <p className="text-white text-sm mb-2">
                <strong>Lead Time:</strong> Tempo que leva para uma mudança ou atualização no código
                ser implementada em produção.
              </p>
              <p className="text-white text-sm">
                <strong>Média:</strong> 3 dias
              </p>
              <p className="text-white text-sm">
                <strong>BossaBox:</strong> 1 dia
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">2x menos falhas</h3>
              <p className="text-white text-sm mb-2">
                <strong>Taxa de Falha:</strong> Porcentagem de implantações que resultam em falha no
                ambiente de produção ou que requerem hotfixes.
              </p>
              <p className="text-white text-sm">
                <strong>Média:</strong> 21%
              </p>
              <p className="text-white text-sm">
                <strong>BossaBox:</strong> 10%
              </p>
            </div>
          </div>
          <div className="mt-6 text-right">
            <p className="text-white text-sm">Google | DORA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Performance = memo(PerformanceComponent);