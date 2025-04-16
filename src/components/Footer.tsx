import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative py-8 text-center text-gray-400">
      <p>© 2025 Guilherme Augusto de Matos Ferreira - {t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer; 