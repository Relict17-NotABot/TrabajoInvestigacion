import assert from "node:assert/strict"
import { test } from "node:test"
import * as arrowNavigation from "../src/hooks/useArrowKeyNav.js"

function createItem(label, { visible = true } = {}) {
  return {
    label,
    focus() {},
    getClientRects() {
      return visible ? [{}] : []
    },
  }
}

function createEvent(key) {
  return {
    key,
    defaultPrevented: false,
    preventDefault() {
      this.defaultPrevented = true
    },
  }
}

test("las flechas trasladan el foco y omiten controles ocultos", () => {
  assert.equal(typeof arrowNavigation.moveFocusByArrowKey, "function")

  const brand = createItem("Accesibilidad")
  const hiddenMobileControl = createItem("Abrir menú", { visible: false })
  const home = createItem("Inicio")
  const guide = createItem("Guía WCAG")
  const importance = createItem("Importancia")
  const items = [hiddenMobileControl, brand, home, guide, importance]
  const node = { querySelectorAll: () => items }
  let focused = brand

  for (const item of items) {
    item.focus = () => {
      focused = item
    }
  }

  const right = createEvent("ArrowRight")
  arrowNavigation.moveFocusByArrowKey(right, node, {}, focused)
  assert.equal(focused, home)
  assert.equal(right.defaultPrevented, true)

  const left = createEvent("ArrowLeft")
  arrowNavigation.moveFocusByArrowKey(left, node, {}, brand)
  assert.equal(focused, importance)

  const first = createEvent("Home")
  arrowNavigation.moveFocusByArrowKey(first, node, {}, guide)
  assert.equal(focused, brand)

  const last = createEvent("End")
  arrowNavigation.moveFocusByArrowKey(last, node, {}, home)
  assert.equal(focused, importance)
})
