import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// META PIXEL (FORMA SEGURA PARA VITE)
(function () {
  const w = window as any;

  if (w.fbq) return;

  w.fbq = function () {
    w.fbq.callMethod
      ? w.fbq.callMethod.apply(w.fbq, arguments)
      : w.fbq.queue.push(arguments);
  };

  w.fbq.queue = [];
  w.fbq.loaded = true;
  w.fbq.version = "2.0";

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  w.fbq("init", "238045384187854");
  w.fbq("track", "PageView");
})();

// RENDER APP
createRoot(document.getElementById("root")!).render(<App />);
