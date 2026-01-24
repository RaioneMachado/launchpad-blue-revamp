import { useEffect } from "react";

const Pixel = () => {
  useEffect(() => {
    // Verifica se o Pixel já foi carregado
    if ((window as any).fbq) return;

    // Cria o script do Meta Pixel
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    // Inicializa o fbq após carregar o script
    script.onload = () => {
      const fbq = (window as any).fbq || function() {
        (fbq as any).callMethod
          ? (fbq as any).callMethod.apply(fbq, arguments)
          : (fbq as any).queue.push(arguments);
      };
      (window as any).fbq = fbq;
      fbq.queue = fbq.queue || [];
      fbq.loaded = true;
      fbq.version = "2.0";

      fbq("init", "238045384187854");
      fbq("track", "PageView");
    };

    return () => {
      // opcional: remover script quando o componente desmontar
      // document.head.removeChild(script);
    };
  }, []);

  return null; // não renderiza nada
};

export default Pixel;
