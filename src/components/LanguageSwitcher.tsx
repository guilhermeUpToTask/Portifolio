import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center gap-1 p-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 shadow-lg">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => changeLanguage('en')}
        className={cn(
          "h-7 w-7 rounded-full transition-all duration-300 text-xs",
          i18n.language === 'en' 
            ? "bg-primary/10 text-primary hover:bg-primary/20" 
            : "hover:bg-primary/5"
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => changeLanguage('pt')}
        className={cn(
          "h-7 w-7 rounded-full transition-all duration-300 text-xs",
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