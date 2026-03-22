import { addDays } from "date-fns"
import { useRef, useState } from "react"
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
} from "../../components/ui/dialog/dialog"
import { DialogDescription } from "../../components/ui/dialog/dialog.description"
import { DialogTitle } from "../../components/ui/dialog/dialog.title"
import { FormatHelper } from "../../helper/format.helper"
import { Portal } from "../../components/ui/portal/portal"
import { FieldRoot } from "../../components/ui/field/field"
import { FieldLabel } from "../../components/ui/field/field.label"

// eslint-disable-next-line react-refresh/only-export-components
export const productsMock = [
  {
    id: "1",
    name: "Filtro de Papel 102",
    description: "Um simples filtro de papel para coar para filtro de 102",
    base_price: "3.79",
    created_at: addDays(new Date(), -1),
  },
  {
    id: "2",
    name: "Filtro de Papel 103",
    description: "Um simples filtro de papel para coar para filtro de 103",
    base_price: "4.79",
    created_at: addDays(new Date(), -2),
  },

  {
    id: "3",
    name: "Filtro de Papel 104",
    description: "Um simples filtro de papel para coar para filtro de 104",
    base_price: "5.79",
    created_at: addDays(new Date(), -3),
  },
]

export default function ProductsScreen() {
  const [showAdd, setShowAdd] = useState(false)
  const [products] = useState(productsMock)
  const showAddRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div>
      <Portal>
        <DialogRoot show={showAdd} onShowChange={(detail) => setShowAdd(detail.show)} triggerRef={showAddRef}>
          <DialogBackdrop />

          <DialogContent>
            <DialogCloseTrigger />
            <DialogHeader className="mb-2">
              <DialogTitle className="font-bold text-3xl">Adicionar produto</DialogTitle>
              <DialogDescription>Faça a criação de um produto para adicionar a lista de vendas.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <form action="" className="space-y-4">
                <fieldset>
                  <FieldRoot required>
                    <FieldLabel className="block mb-2" htmlFor="name">
                      Nome
                    </FieldLabel>
                    <input
                      className="appearance-none border w-full border-gray-200 rounded-lg px-4 h-12"
                      type="name"
                      id="name"
                      placeholder="Digite seu nome"
                    />
                  </FieldRoot>
                </fieldset>

                <fieldset>
                  <FieldRoot required>
                    <FieldLabel className="block mb-2" htmlFor="base_price">
                      Preço
                    </FieldLabel>
                    <input
                      className="appearance-none border w-full border-gray-200 rounded-lg px-4 h-12"
                      type="base_price"
                      id="base_price"
                      placeholder="0.00"
                    />
                  </FieldRoot>
                </fieldset>

                <fieldset>
                  <FieldRoot>
                    <FieldLabel className="block mb-2" htmlFor="description">
                      Descrição
                    </FieldLabel>
                    <textarea
                      className="appearance-none border w-full border-gray-200 rounded-lg px-4 py-3"
                      id="description"
                      placeholder="Uma breve descrição..."
                    />
                  </FieldRoot>
                </fieldset>

                <button className="bg-black text-white rounded-lg h-12 text-lg font-medium px-4 w-full" type="submit">
                  Confirmar
                </button>
              </form>
            </DialogBody>
          </DialogContent>
        </DialogRoot>
      </Portal>

      <div>
        <h1 className="text-4xl font-bold mb-3.5 text-black">Produtos</h1>
        <p className="mb-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, inventore officiis! Dicta velit quas impedit
          nobis repellat consequatur distinctio eius eaque, earum at deserunt, obcaecati laboriosam natus doloremque,
          dolorum quia?
        </p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <form action="">
          <fieldset>
            <label htmlFor="search">
              <span className="sr-only">Pesquisar</span>
              <div className="border border-gray-200 rounded-lg h-12 flex relative">
                <input
                  id="search"
                  className="appearance-none w-full rounded-lg pl-4 pr-[80px]"
                  type="text"
                  placeholder="Busque por nome..."
                />
                <button
                  className="bg-black shrink-0 text-white rounded-lg text-sm font-medium h-10 px-2.5 absolute right-1 top-1/2 -translate-y-1/2"
                  type="button"
                >
                  Buscar
                </button>
              </div>
            </label>
          </fieldset>
        </form>

        <button
          ref={showAddRef}
          onClick={() => setShowAdd(true)}
          className="bg-black text-white rounded-lg h-12 text-lg font-medium px-4 flex gap-2 items-center"
        >
          <span className="fi fi-rr-plus-small leading-0 text-xl"></span>
          <span>Adicionar</span>
        </button>
      </div>

      <div>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              base_price={product.base_price}
              created_at={product.created_at}
              description={product.description}
            />
          )
        })}
      </div>
    </div>
  )
}

type ProductProps = {
  name: string
  base_price: string
  description: string
  created_at: Date
}

function Product({ name, base_price, description, created_at }: ProductProps) {
  return (
    <div className="hover:bg-gray-200 flex gap-3.5 py-2.5 px-3.5 border-b border-gray-200 transition-all hover:rounded-b-2xl">
      <div className="bg-gray-800 text-gray-50 size-10 flex items-center justify-center rounded-sm">
        <span className="fi fi-rr-box inline-block text-2xl leading-0"></span>
      </div>
      <div>
        <p className="font-bold text-xl">{name}</p>
        <p className="text-lg font-bold">{FormatHelper.toCurrency(base_price).display}</p>
        <p className="text-sm">{description}</p>
        <p className="text-xs mb-2">Criado em: {FormatHelper.toDate(created_at)}</p>
      </div>
    </div>
  )
}
