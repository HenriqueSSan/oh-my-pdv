import { createContext } from "react"

export interface DialogContext {
  show: boolean
  onShowChange: (details: { show: boolean }) => void
}

export const DialogContext = createContext({} as DialogContext)
