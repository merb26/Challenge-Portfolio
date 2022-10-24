// import { nombre } from "./validar.js"
import { obtenerMensajeError } from "./obtenerMensajeError.js"

const inputs = document.querySelectorAll("[data-input]")
inputs.forEach(input => {
  input.addEventListener("blur", informacion => {
    validar(informacion.target)
  })
})

const validar = input => {
  const tipo = input.dataset.input
  console.log(input.validity)
  console.log(tipo)

  input.validity.valid
    ? (document.querySelector(`[data-error-${tipo}]`).innerHTML = "")
    : (document.querySelector(`[data-error-${tipo}]`).innerHTML =
        obtenerMensajeError(tipo, input))
}
