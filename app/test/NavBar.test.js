import assert from "node:assert/strict"
import { after, before, test } from "node:test"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { MemoryRouter } from "react-router"
import { createServer } from "vite"

let vite

before(async () => {
  vite = await createServer({
    appType: "custom",
    logLevel: "silent",
    server: { middlewareMode: true },
  })
})

after(async () => {
  await vite?.close()
})

test("el ámbito de navegación por flechas incluye todos los enlaces del navbar", async () => {
  const { NavBar } = await vite.ssrLoadModule("/src/components/NavBar.jsx")
  const html = renderToStaticMarkup(
    createElement(MemoryRouter, null, createElement(NavBar))
  )
  const navigation = html.match(
    /<nav[^>]*aria-label="Navegación principal"[^>]*>([\s\S]*?)<\/nav>/
  )

  assert.ok(navigation, "debe existir la navegación principal")
  for (const label of ["Accesibilidad", "Inicio", "Guía WCAG", "Importancia"]) {
    assert.match(navigation[1], new RegExp(label), `${label} debe estar dentro del nav`)
  }
})
