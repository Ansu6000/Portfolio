import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { injectSpeedInsights } from "@vercel/speed-insights";

// Initialize Vercel Speed Insights for performance monitoring
injectSpeedInsights();

createRoot(document.getElementById("root")!).render(<App />);
