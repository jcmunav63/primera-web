// Función Alert de la Sesión 4
function showAlert() {
  alert("¡Hola, esta es una alerta desde JavaScript!");
}

// Función validateEmail para validar el email
function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

// Función validateForm para validar el formulario
function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

// Agregar addEventListener al botón submit
const form = document.getElementById('myForm');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  })};

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
                      