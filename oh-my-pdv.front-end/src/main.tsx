import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import "./logger"

import { BrowserRouter, Route } from "react-router"
import { FaroRoutes } from "@grafana/faro-react"

import OverviewScreen from "./app/(dashboard)/overview"
import ProductsScreen from "./app/(dashboard)/products"
import SalesScreen from "./app/(dashboard)/sales"
import SignInScreen from "./app/sign-in"
import DashboardLayout from "./app/(dashboard)/layout"
import SaleIdScreen from "./app/(dashboard)/sales/[saleId]"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FaroRoutes>
        <Route index element={<SignInScreen />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="overview" element={<OverviewScreen />} />
          <Route path="products">
            <Route index element={<ProductsScreen />} />
          </Route>

          <Route path="sales">
            <Route index element={<SalesScreen />} />
            <Route path=":sale_id" element={<SaleIdScreen />} />
          </Route>
        </Route>
      </FaroRoutes>
    </BrowserRouter>
  </StrictMode>,
)
