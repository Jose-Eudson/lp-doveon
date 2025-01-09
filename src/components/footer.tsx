import { memo } from 'react';

function FooterComponent() {
    return (
        <footer className="container mx-auto bg-white text-white py-10">
            <div className="ml-96 px-20 flex justify-between text-center">
                <div>
                   
                    <p className="text-gray-400">
            &copy; 2025 Doveon. Todos os direitos reservados.
          </p>
                </div>
            
            </div>
        </footer>
    );
}

export const Footer = memo(FooterComponent);