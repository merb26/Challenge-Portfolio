export const obtenerMensajeError = (tipo, input) => {
  for (let i = 0; i < tipoErrores.length; i++) {
    const error = tipoErrores[i]

    if (input.validity[error]) {
      return mensajesError[tipo][error]
    }
  }
}

const tipoErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
]

const mensajesError = {
  nombre: {
    valueMissing: "Debe ingresar el nombre",
    patternMismatch: "Solo puede tener 50 carácteres",
  },
  email: {
    valueMissing: "Debe ingresar el email",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "Debe ingresar el asunto",
    patternMismatch: "Solo puede tener 50 carácteres",
  },
  mensaje: {
    valueMissing: "Debe ingresar el mensaje",
  },
}
