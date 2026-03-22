import { addDays } from "date-fns"
import { Fragment, useRef, useState } from "react"
import { FormatHelper } from "../../../helper/format.helper"
import { EnumHelper } from "../../../helper/enum.helper"
import type { SALE_PAYMENT_METHOD } from "../../../core/sales/enum/sale.payment-method"
import { Link } from "react-router"
import { Portal } from "../../../components/ui/portal/portal"
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
} from "../../../components/ui/dialog/dialog"
import { DialogTitle } from "../../../components/ui/dialog/dialog.title"
import { DialogDescription } from "../../../components/ui/dialog/dialog.description"
import { productsMock } from "../../../app/(dashboard)/products"

export default function SalesScreen() {
  const [showAdd, setShowAdd] = useState(false)
  const [products, setProducts] = useState([{ id: "sale:product:item:1" }])
  const showAddRef = useRef<HTMLButtonElement | null>(null)
  const dialogBodyRef = useRef<HTMLDivElement | null>(null)

  const salesMock = [
    { id: "1", status: "PENDING", payment_method: "PIX", total: "37.9", created_at: addDays(new Date(), -1) },
    { id: "2", status: "PENDING", payment_method: "BOLETO", total: "47.9", created_at: addDays(new Date(), -1) },
    { id: "3", status: "PENDING", payment_method: "CREDIT", total: "57.9", created_at: addDays(new Date(), -1) },
  ]

  return (
    <div>
      <Portal>
        <DialogRoot show={showAdd} onShowChange={(detail) => setShowAdd(detail.show)} triggerRef={showAddRef}>
          <DialogBackdrop />

          <DialogContent>
            <DialogCloseTrigger />
            <DialogHeader className="mb-2">
              <DialogTitle className="font-bold text-3xl">Adicionar venda</DialogTitle>
              <DialogDescription>Faça a venda para adicionar a lista de vendas.</DialogDescription>
            </DialogHeader>
            <form action="" className="">
              <DialogBody ref={dialogBodyRef} className="overflow-auto max-h-[50dvh] space-y-4 mb-4">
                <fieldset>
                  <label className="block mb-2" htmlFor="name">
                    Método de pagamento
                    <span className="text-red-500 ml-1 leading-0">*</span>
                  </label>
                  <select className="appearance-none border w-full border-gray-200 rounded-lg px-4 h-12" id="name">
                    <option value="PIX">Pix</option>
                    <option value="BOLETO">Boleto</option>
                    <option value="CREDIT">Crédito</option>
                    <option value="DEBIT">Débito</option>
                    <option value="MONEY">Dinheiro</option>
                  </select>
                </fieldset>

                <div className="">
                  <p className="font-bold text-xl border-b border-gray-200 mb-2">Produtos vendidos</p>

                  <div className="mb-2 space-y-4">
                    {products.map(({ id }, idx) => {
                      return (
                        <Fragment key={id}>
                          {idx + 1 > 1 && (
                            <div className="flex items-center justify-between border-b border-gray-200">
                              <p className="font-bold text-xl mb-2">Produto {idx + 1} </p>
                              <button
                                onClick={() => setProducts((prev) => [...prev.filter((item) => item.id !== id)])}
                                className="bg-white rounded-lg text-red-500 h-10 text-sm font-medium px-2.5 ml-auto"
                                type="button"
                              >
                                Remover
                              </button>
                            </div>
                          )}

                          <fieldset>
                            <label className="block mb-2" htmlFor="product">
                              Produto
                              <span className="text-red-500 ml-1 leading-0">*</span>
                            </label>
                            <select
                              className="appearance-none border w-full border-gray-200 rounded-lg px-4 h-12"
                              id="product"
                            >
                              {productsMock.map((product) => (
                                <option key={`sale:option:${product.id}`} value={product.id}>
                                  {product.name}
                                </option>
                              ))}
                            </select>
                          </fieldset>

                          <fieldset>
                            <label className="block mb-2" htmlFor="quantity">
                              Quant.
                              <span className="text-red-500 ml-1 leading-0">*</span>
                            </label>
                            <input
                              id="quantity"
                              className="appearance-none border w-full border-gray-200 rounded-lg px-4 h-12"
                              placeholder="0.00"
                            />
                          </fieldset>
                        </Fragment>
                      )
                    })}
                  </div>

                  <button
                    onClick={() => {
                      setProducts((prev) => [...prev, { id: `sale:product:item:${prev.length + 1}` }])
                    }}
                    className="text-black  rounded-lg h-10 text-sm font-medium px-2.5 flex items-center gap-2"
                    type="button"
                  >
                    <span className="fi fi-rr-plus leading-0"></span>
                    <span>Adicionar</span>
                  </button>
                </div>
              </DialogBody>
              <DialogFooter>
                <button className="bg-black text-white rounded-lg h-12 text-lg font-medium px-4 w-full" type="submit">
                  Confirmar
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </DialogRoot>
      </Portal>

      <div>
        <h1 className="text-4xl font-bold mb-3.5 text-black">Vendas</h1>
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
        {salesMock.map((sale) => {
          return (
            <Sale
              id={sale.id}
              key={sale.id}
              total={sale.total}
              created_at={sale.created_at}
              payment_method={sale.payment_method}
            />
          )
        })}
      </div>
    </div>
  )
}

type SaleProps = {
  id: string
  total: string
  created_at: Date
  payment_method: string
}

export function Sale({ created_at, payment_method, total, id }: SaleProps) {
  return (
    <div className="hover:bg-gray-200 flex gap-3.5 py-2.5 px-3.5 border-b border-gray-200 transition-all hover:rounded-b-2xl relative">
      <div className="bg-gray-800 text-gray-50 size-10 flex items-center justify-center rounded-sm">
        <span className="fi fi-rr-basket-shopping-simple text-2xl leading-0"></span>
      </div>
      <div>
        <p className="text-xs mb-2">Venda: {FormatHelper.toDate(created_at)}</p>
        <p className="text-lg">{EnumHelper.handle().SALE_PAYMENT_METHOD(payment_method as SALE_PAYMENT_METHOD)}</p>
        <p className="text-2xl font-bold">{FormatHelper.toCurrency(total).display}</p>
      </div>

      <Link className="w-full h-full top-0 left-0 absolute" to={`/sales/${id}`}>
        <span className="sr-only">Mostrar mais...</span>
      </Link>
    </div>
  )
}
