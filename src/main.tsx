import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/* =========================
   GOOGLE TAG MANAGER
========================= */
(function () {
  const w = window as any;
  const d = document;
  const s = "script";
  const l = "dataLayer";
  const i = "GTM-N62GPLGJ";

  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const f = d.getElementsByTagName(s)[0];
  const j = d.createElement(s);
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i;
  f.parentNode?.insertBefore(j, f);
})();

/* =========================
   GOOGLE ADS + ANALYTICS
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

/* =========================
   RENDER
========================= */
createRoot(document.getElementById("root") as HTMLElement).render(<App />);
