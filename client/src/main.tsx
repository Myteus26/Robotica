import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const appRootElement = rootElement;

let mounted = false;
let fallbackTimer: number | undefined;

function mountApp() {
  if (mounted) return;
  mounted = true;
  if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
  createRoot(appRootElement).render(<App />);
}

const productionStyles = document.querySelector<HTMLLinkElement>("link[data-app-styles]");

if (!productionStyles || productionStyles.sheet || document.documentElement.dataset.appStyles === "ready") {
  mountApp();
} else {
  window.addEventListener("app-styles-ready", mountApp, { once: true });
  fallbackTimer = window.setTimeout(mountApp, 10_000);
}
