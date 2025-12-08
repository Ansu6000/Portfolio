import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

// Initialize Vercel Web Analytics for tracking user behavior
inject();

// Initialize Vercel Speed Insights for performance monitoring
injectSpeedInsights();

createRoot(document.getElementById("root")!).render(<App />);
