import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta automaticamente o idioma do navegador
  .use(initReactI18next) // Integração com o React
  .init({
    supportedLngs: ['en', 'pt', 'es'], // Idiomas suportados
    fallbackLng: 'en', // Idioma padrão se o detectado não for suportado
    debug: true, // Ative para verificar logs no console durante o desenvolvimento
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'], // Prioridade para detectar idioma
      caches: ['cookie', 'localStorage'], // Armazena a seleção de idioma no cookie/localStorage
    },
    interpolation: {
      escapeValue: false, // Não escapa valores, pois o React já faz isso
    },
    resources: {
      en: {
        translation: {
          nav: {
            forCompanies: 'For Companies',
            forProfessionals: 'For Professionals',
            blog: 'Blog',
            papers: 'Papers',
            login: 'Login',
          },
        },
      },
      pt: {
        translation: {
          nav: {
            forCompanies: 'Para Empresas',
            forProfessionals: 'Para Profissionais',
            blog: 'Blog',
            papers: 'Papers',
            login: 'Entrar',
          },
        },
      },
      es: {
        translation: {
          nav: {
            forCompanies: 'Para Empresas',
            forProfessionals: 'Para Profesionales',
            blog: 'Blog',
            papers: 'Papeles',
            login: 'Iniciar Sesión',
          },
        },
      },
    },
  });

export default i18n;
