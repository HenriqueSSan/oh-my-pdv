import { type PropsWithChildren, type Ref } from "react"
import { createPortal } from "react-dom"

type Portal = PropsWithChildren & {
  ref?: Ref<HTMLElement>
}

export function Portal({ children }: Portal) {
  return createPortal(children, document.body)
}
