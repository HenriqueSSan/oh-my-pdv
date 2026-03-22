import { useId, type PropsWithChildren } from "react"
import { FieldContext } from "./context"

type FieldRootProps = Omit<FieldContext, "fieldId"> &
  PropsWithChildren & {
    id?: string
  }

export function FieldRoot({ children, id, required = false, invalid = false }: FieldRootProps) {
  const rawFieldId = useId()
  const fieldId = id || rawFieldId

  return (
    <FieldContext.Provider value={{ required, invalid, fieldId }}>
      <div data-ui="field.root" data-invalid={invalid} data-required={required} data-testid="field.root">
        {children}
      </div>
    </FieldContext.Provider>
  )
}
