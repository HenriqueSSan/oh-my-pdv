import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import faro from "@grafana/faro-rollup-plugin"

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === "build")
    return {
      plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        tailwindcss(),
        faro({
          verbose: true,
          gzipContents: true,
          endpoint: process.env.GRAFRANA_API as string,
          appId: process.env.GRAFRANA_APP_ID as string,
          apiKey: process.env.GRAFRANA_API_KEY as string,
          appName: process.env.GRAFRANA_APP_NAME as string,
          stackId: process.env.GRAFRANA_STACK_ID as string,
        }),
      ],
    }

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  }
})
