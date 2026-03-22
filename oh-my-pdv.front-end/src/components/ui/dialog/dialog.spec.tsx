import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
  DialogBody,
  DialogRoot,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogBackdrop,
  DialogCloseTrigger,
} from "./dialog"

import { DialogDescription } from "./dialog.description"
import { DialogTitle } from "./dialog.title"

const mockFn = () => {}

describe("[UI] | [DIALOG] testing dialog root has WAI-ARIA", () => {
  it("testing is dialog has role attribute", async () => {
    render(<DialogRoot show={true} onShowChange={mockFn} />)

    const dialog = await screen.findByTestId("dialog.root")
    expect(dialog).toBeInTheDocument()
    expect(dialog).toHaveAttribute("role", "dialog")
  })

  it("testing is dialog has aria-modal attribute", async () => {
    render(<DialogRoot show={true} onShowChange={mockFn} />)

    const dialog = await screen.findByTestId("dialog.root")
    expect(dialog).toBeInTheDocument()
    expect(dialog).toHaveAttribute("aria-modal", "true")
  })

  it("testing is dialog has aria-labelledby attribute", async () => {
    render(
      <DialogRoot show={true} onShowChange={mockFn}>
        <DialogTitle>This is title</DialogTitle>
      </DialogRoot>,
    )

    const dialog = await screen.findByTestId("dialog.root")
    const title = dialog.querySelector('[aria-labelledby="modal-title"]')
    expect(dialog).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it("testing is dialog has aria-describedby attribute", async () => {
    render(
      <DialogRoot show={true} onShowChange={mockFn}>
        <DialogDescription>This is description</DialogDescription>
      </DialogRoot>,
    )

    const dialog = await screen.findByTestId("dialog.root")
    const desc = dialog.querySelector('[aria-describedby="modal-desc"]')
    expect(dialog).toBeInTheDocument()
    expect(desc).toBeInTheDocument()
  })
})

describe("[UI] | [DIALOG]", () => {
  it("", async () => {
    render(
      <DialogRoot show={true} onShowChange={mockFn}>
        <DialogBackdrop />

        <DialogContent>
          <DialogCloseTrigger />

          <DialogHeader>
            <DialogTitle>This is title</DialogTitle>
            <DialogDescription>This is description</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p>This the body</p>
          </DialogBody>
          <DialogFooter>
            <p>This the footer</p>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>,
    )

    const dialog = await screen.findByTestId("dialog.root")

    expect(dialog).toBeInTheDocument()
  })
})
