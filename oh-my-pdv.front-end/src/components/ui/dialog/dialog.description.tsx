import { createElement } from "react"
import type { DialogWithAsElement } from "./dialog"

type DialogDescription<T extends HTMLElement> = DialogWithAsElement<T> & {
  hidden?: boolean
}

export function DialogDescription<T extends HTMLElement>({
  as = "p",
  ref,
  key,
  hidden,
  children,
  className,
  ...props
}: DialogDescription<T>) {
  const hiddenElClass = [hidden && "sr-only", className].join(" ")
  const rawProps = {
    ref,
    key,
    className: hiddenElClass,
    "aria-describedby": "modal-desc",
    "data-testid": "dialog.description",
    "data-ui": "dialog.description",
    ...props,
  }
  return createElement(as, { ...rawProps }, children)
}
