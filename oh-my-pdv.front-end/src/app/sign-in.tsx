import { Link } from "react-router"

export default function SignInScreen() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1">
      <div className="bg-white border-r border-gray-100 flex items-center justify-center h-screen w-full col-span-1">
        <img className="w-[256px]" src="/logo.dark.svg" width="128" height="24" />
      </div>
      <div className="col-span-1 flex items-center">
        <div className="mx-auto max-w-1/2 p-8 rounded-lg border border-gray-200">
          <h1 className="text-3xl font-bold mb-4">Entrar</h1>
          <p className="text-sm mb-3">
            <strong>'Oh My PDV'</strong> é um sistema de gestão de ponto de venda simples e minimalista.
          </p>

          <form action="" className="space-y-4">
            <fieldset>
              <label className="block mb-2" htmlFor="email">
                E-mail
                <span className="text-red-500 ml-1 leading-0">*</span>
              </label>
              <input
                className="appearance-none border w-full border-gray-200 rounded-lg px-4 h-12"
                type="email"
                id="email"
                placeholder="Digite seu email"
              />
            </fieldset>

            <fieldset>
              <label className="block mb-2" htmlFor="password">
                Senha
                <span className="text-red-500 ml-1 leading-0">*</span>
              </label>

              <div className="border border-gray-200 rounded-lg h-12 flex relative">
                <input
                  id="password"
                  className="appearance-none w-full rounded-lg pl-4 pr-[80px]"
                  type="password"
                  placeholder="Digite sua senha"
                />
                <button
                  className="bg-black shrink-0 text-white rounded-lg text-sm font-medium h-10 px-2.5 absolute right-1 top-1/2 -translate-y-1/2"
                  type="button"
                >
                  Mostrar
                </button>
              </div>

              <Link
                className="text-black underline font-medium py-2 inline-block w-full text-right"
                to="/forgot-password"
              >
                Esqueceu sua senha?
              </Link>
            </fieldset>

            <button className="bg-black text-white rounded-lg h-12 text-lg font-medium px-4 w-full" type="submit">
              Entrar
            </button>

            <img className="w-[128] mx-auto py-6" src="/logo.dark.svg" width="128" height="24" />
          </form>
        </div>
      </div>
    </div>
  )
}
