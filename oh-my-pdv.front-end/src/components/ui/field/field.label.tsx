import { use, type DetailedHTMLProps, type LabelHTMLAttributes, type PropsWithChildren } from "react"
import { FieldContext } from "./context"

type FieldLabelProps = PropsWithChildren & DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export function FieldLabel({ children, className, ...props }: FieldLabelProps) {
  const fieldContext = use(FieldContext)

  return (
    <label
      data-ui="field.label"
      id={fieldContext.fieldId}
      className={[className].join()}
      data-testid="label"
      {...props}
    >
      {children}
      {fieldContext.required && (
        <span data-testid="label.required" className="text-red-500">
          *
        </span>
      )}
    </label>
  )
}
