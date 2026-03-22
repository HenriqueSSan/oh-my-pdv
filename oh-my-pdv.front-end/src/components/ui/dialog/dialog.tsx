import {
  use,
  useEffect,
  useRef,
  type HTMLAttributes,
  type Key,
  type PropsWithChildren,
  type ReactNode,
  type Ref,
  type RefObject,
} from "react"
import { DialogContext } from "./context"

export type DialogElement<T extends HTMLElement> = {
  ref?: Ref<T>
  key?: Key
  children: ReactNode
} & HTMLAttributes<T>

export type DialogWithAsElement<T extends HTMLElement> = DialogElement<T> & {
  as?: keyof HTMLElementTagNameMap
} & HTMLAttributes<T>

export function DialogBackdrop() {
  const { show, onShowChange } = use(DialogContext)

  return (
    <div
      onClick={() => onShowChange({ show: !show })}
      className="w-full h-full bg-black/5 fixed left-0 top-0 z-80"
      data-ui="dialog.backdrop"
      data-testid="dialog.backdrop"
      aria-hidden={!show}
    />
  )
}

export function DialogContent({ children }: PropsWithChildren) {
  return (
    <div className="bg-white  relative z-1000 w-2/8 mx-auto py-8 rounded-xl" data-ui="dialog.content">
      {children}
    </div>
  )
}

export function DialogHeader({ children, className }: PropsWithChildren & DialogElement<HTMLDivElement>) {
  return (
    <div className={["px-10", className].join(" ")} data-ui="dialog.header">
      {children}
    </div>
  )
}

export function DialogBody({ children, className, ...props }: DialogElement<HTMLDivElement>) {
  return (
    <div data-ui="dialog.body" className={["px-10", className].join(" ")} {...props}>
      {children}
    </div>
  )
}

export function DialogFooter({ children, className, ...props }: DialogElement<HTMLDivElement>) {
  return (
    <div data-ui="dialog.footer" className={["px-10", className].join(" ")} {...props}>
      {children}
    </div>
  )
}

export function DialogCloseTrigger() {
  const { show, onShowChange } = use(DialogContext)

  return (
    <button
      onClick={() => onShowChange({ show: !show })}
      className="absolute top-4 right-5 text-xl text-gray-400 hover:bg-gray-100 size-10 rounded-lg transition-colors flex items-center justify-center"
      data-ui="dialog.close.trigger"
    >
      <span className="fi fi-rr-cross-small leading-0"></span>
    </button>
  )
}

type DialogRoot = DialogContext &
  PropsWithChildren & {
    triggerRef?: RefObject<HTMLButtonElement | null>
  }

export function DialogRoot({ children, show, onShowChange, triggerRef }: DialogRoot) {
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const focus = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onShowChange({ show: !show })
        return
      }

      if (e.key !== "Tab") return

      if (dialogRef.current) {
        const focusable = [
          ...dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ].filter((el) => !el.ariaDisabled)

        const firstEl = focusable[0]
        const lastEl = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault()
          lastEl.focus()
          return
        }

        if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault()
          firstEl.focus()
        }
      }
    }

    const retryFocus = () => {
      if (triggerRef?.current) triggerRef?.current.focus()
      document.removeEventListener("keydown", focus)
    }

    if (typeof window !== "undefined") {
      document.addEventListener("keydown", focus)

      return () => {
        retryFocus()
      }
    }
  }, [show, triggerRef, onShowChange])

  if (show)
    return (
      <DialogContext.Provider value={{ onShowChange, show }}>
        <div
          ref={dialogRef}
          data-ui="dialog.root"
          data-testid="dialog.root"
          aria-modal={show}
          role="dialog"
          tabIndex={-1}
          className="flex items-center w-full h-full fixed left-0 top-0"
        >
          {children}
        </div>
      </DialogContext.Provider>
    )
}
