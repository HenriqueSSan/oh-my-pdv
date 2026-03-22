import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { FieldRoot } from "./field"
import { FieldLabel } from "./field.label"

describe("[UI] testing field label", () => {
  it("testing is field label get content in children prop", async () => {
    render(<FieldLabel>E-mail</FieldLabel>)

    const label = await screen.findByTestId("label")

    expect(label).toHaveTextContent("E-mail")
  })

  it("testing is field label get fieldId field root", async () => {
    render(
      <FieldRoot id="example">
        <FieldLabel>E-mail</FieldLabel>
      </FieldRoot>,
    )

    const label = await screen.findByTestId("label")

    expect(label).toHaveAttribute("id", "example")
  })

  it("testing is field label get required in field root", async () => {
    render(
      <FieldRoot id="example" required>
        <FieldLabel>E-mail</FieldLabel>
      </FieldRoot>,
    )

    const required = await screen.findByTestId("label.required")

    expect(required).toBeInTheDocument()
  })

  it("testing is field label get required in field root and content is equal", async () => {
    render(
      <FieldRoot id="example" required>
        <FieldLabel>E-mail</FieldLabel>
      </FieldRoot>,
    )

    const label = await screen.findByTestId("label")
    const required = await screen.findByTestId("label.required")

    expect(label).toHaveTextContent("E-mail")
    expect(required).toBeInTheDocument()
  })
})
