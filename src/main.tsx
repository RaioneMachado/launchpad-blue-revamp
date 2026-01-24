import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// META PIXEL – VERSÃO 100% COMPATÍVEL COM TYPESCRIPT
(function () {
  const w = window as any;

  if (w.fbq) return;

  w.fbq = function (...args: any[]) {
    if (w.fbq.callMethod) {
      w.fbq.callMethod(...args);
    } else {
      w.fbq.queue.push(args);
    }
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

// RENDER
createRoot(document.getElementById("root")!).render(<App />);
