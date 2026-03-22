import { Link, Outlet } from "react-router"

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[13%] px-6 pt-8 pb-6 border-r border-gray-200">
      <div className="mb-4">
        <img className="w-[128px]" src="/logo.dark.svg" width="128" height="24" />
      </div>

      <div className="gap-2.5 flex items-center bg-black text-white rounded-lg px-2.5 py-2 mb-4">
        <span className="fi fi-rr-user  bg-gray-200 shrink-0 size-8 inline-flex items-center rounded-lg justify-center text-black"></span>

        <div className="w-full flex-col flex">
          <span className="text-sm font-bold truncate max-w-[90%]">Henrique Santos Santana</span>
          <span className="text-xs font-medium">Administrador</span>
        </div>
      </div>

      <nav>
        <ul className="flex flex-col gap-2">
          <li className="w-full">
            <Link
              to="/overview"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-sm bg-gray-100 border-gray-200 hover:bg-black hover:text-white transition-colors"
            >
              <span className="fi fi-rr-chart-histogram leading-0"></span>
              <span>Visão geral</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/products"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-sm bg-gray-100 border-gray-200 hover:bg-black hover:text-white transition-colors"
            >
              <span className="fi fi-rr-boxes leading-0"></span>
              <span>Produtos</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/sales"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-sm bg-gray-100 border-gray-200 hover:bg-black hover:text-white transition-colors"
            >
              <span className="fi fi-rr-point-of-sale-bill leading-0"></span>
              <span>Vendas</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-red-500 font-bold text-sm px-4 py-1.5 hover:bg-gray-100 rounded-lg">
        <span className="fi fi-rr-undo-alt leading-3.5 text-xs"></span>
        <span className="leading-5">Sair</span>
      </button>
    </aside>
  )
}

export default function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <div className="ml-[13%] p-8">
        <Outlet />
      </div>
    </>
  )
}
