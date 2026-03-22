import { createContext } from "react"

export interface FieldContext {
  invalid?: boolean
  required?: boolean
  fieldId: string
}

export const FieldContext = createContext({
  invalid: false,
  required: false,
  fieldId: "",
} as FieldContext)
