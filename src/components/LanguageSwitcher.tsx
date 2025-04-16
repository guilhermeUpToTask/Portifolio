import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLanguage('en')}
        className={cn(
          "rounded-full transition-all duration-300",
          i18n.language === 'en' 
            ? "bg-primary/10 text-primary hover:bg-primary/20" 
            : "hover:bg-primary/5"
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLanguage('pt')}
        className={cn(
          "rounded-full transition-all duration-300",
          i18n.language === 'pt' 
            ? "bg-primary/10 text-primary hover:bg-primary/20" 
            : "hover:bg-primary/5"
        )}
      >
        PT
      </Button>
    </div>
  );
};

export default LanguageSwitcher; 