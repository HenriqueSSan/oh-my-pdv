import { createElement } from "react"
import type { DialogWithAsElement } from "./dialog"

type DialogTitle<T extends HTMLElement> = DialogWithAsElement<T>

export function DialogTitle<T extends HTMLElement>({ key, ref, as = "h2", children, ...props }: DialogTitle<T>) {
  const rawProps = { ref, key, "aria-labelledby": "modal-title", "data-ui": "dialog.title", ...props }

  return createElement(as, rawProps, children)
}
