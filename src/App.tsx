import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

const App = () => {
  useEffect(() => {
    // Se o Pixel já existe, não faz nada
    if (window.fbq) return;

    // Cria o script do Facebook Pixel
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.async = true;
    document.head.appendChild(script);

    // Inicializa o fbq quando o script carregar
    script.onload = () => {
      !(function(f: any,b,e,v,n,t,s){
        if(f.fbq) return;
        n=f.fbq=function(){ n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
        if(!f._fbq) f._fbq=n;
        n.push=n;
        n.loaded=!0;
        n.version='2.0';
        n.queue=[];
      })(window, document, 'script');

      window.fbq?.("init", "238045384187854");
      window.fbq?.("track", "PageView");
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
