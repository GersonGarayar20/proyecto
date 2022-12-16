const d = document

const $form = d.getElementById("formulario")

$form.addEventListener("submit",e=>{

  e.preventDefault()

  const user = {
    [e.target.nombre.name]: e.target.nombre.value,
    [e.target.codigo.name]: +e.target.codigo.value,
    [e.target.edad.name]: +e.target.edad.value,
    [e.target.año.name]: +e.target.año.value,
    [e.target.promedio.name]: +e.target.promedio.value,
  }
  
  const {nombre, codigo, edad, año, promedio} = user

  let mensaje = `hola ${nombre}`

  if ( codigo === 2020 || codigo === 2021 ) {
    
    if (edad <= 21 ) mensaje += " tienes una beca de matricula"

    if (año === 3 && promedio >= 17) mensaje += ` daras practica pagadas para ser programador web en la empresa "MASTER WEB PERUVIAN"`

  }

  alert(mensaje)

})