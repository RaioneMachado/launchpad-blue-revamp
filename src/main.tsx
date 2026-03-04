import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/* =========================
   GOOGLE ADS + GA4
========================= */
(function () {
  const script = document.createElement("script");
  script.async = true;
  script.src =
    "https://www.googletagmanager.com/gtag/js?id=AW-17991120347";
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];

  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }

  (window as any).gtag = gtag;

  gtag("js", new Date());
  gtag("config", "AW-17991120347");
  gtag("config", "G-HC14BJBN1S");
})();

/* =========================
   META PIXEL
========================= */
(function () {
  const w = window as any;

  if (w.fbq) return;

  w.fbq = function (...args: any[]) {
    w.fbq.queue.push(args);
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

/* =========================
   RENDER
========================= */
createRoot(document.getElementById("root") as HTMLElement).render(<App />);
