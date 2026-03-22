import {
  createReactRouterV7Options,
  getWebInstrumentations,
  initializeFaro,
  ReactIntegration,
} from "@grafana/faro-react"
import { TracingInstrumentation } from "@grafana/faro-web-tracing"
import { createRoutesFromChildren, matchRoutes, Routes, useLocation, useNavigationType } from "react-router"

initializeFaro({
  url: "https://faro-collector-prod-sa-east-1.grafana.net/collect/317cd4b072eb1cc60737e417f36022ff",
  app: {
    name: "oh-my-pdv:application",
    version: "1.0.0",
    environment: "production",
  },

  instrumentations: [
    // Mandatory, omits default instrumentations otherwise.
    ...getWebInstrumentations(),

    // Tracing package to get end-to-end visibility for HTTP requests.
    new TracingInstrumentation(),

    // React integration for React applications.
    new ReactIntegration({
      router: createReactRouterV7Options({
        createRoutesFromChildren,
        matchRoutes,
        Routes,
        useLocation,
        useNavigationType,
      }),
    }),
  ],
})
