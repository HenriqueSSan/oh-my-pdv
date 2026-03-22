import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { FieldRoot } from "./field"

describe("", () => {
  it("testing field root has data-invalid and data-required attribute", async () => {
    render(<FieldRoot />)

    const field = screen.queryByTestId("field.root")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("data-invalid")
    expect(field).toHaveAttribute("data-required")
  })

  it("testing field root has data-required true attribute", async () => {
    render(<FieldRoot invalid={true} />)

    const field = screen.queryByTestId("field.root")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("data-invalid", "true")
  })

  it("testing field root has data-required true and data-invalid true attribute", async () => {
    render(<FieldRoot required={true} invalid={true} />)

    const field = screen.queryByTestId("field.root")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("data-required", "true")
    expect(field).toHaveAttribute("data-invalid", "true")
  })

  it("testing field root has data-required false and data-invalid false attribute", async () => {
    render(<FieldRoot required={false} invalid={false} />)

    const field = screen.queryByTestId("field.root")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("data-required", "false")
    expect(field).toHaveAttribute("data-invalid", "false")
  })
})
