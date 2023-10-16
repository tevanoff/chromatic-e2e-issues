import { defineConfig } from "@playwright/test";
import { ChromaticConfig } from "@chromaui/test-archiver";

export default defineConfig<ChromaticConfig>({
  use: {
    baseURL: "http://localhost:3000",
    disableAutoCapture: true,
  },
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
  },
});
