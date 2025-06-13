// form.js
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault(); // prevenimos el envío normal
        event.stopPropagation();

        if (form.checkValidity()) {
          // Si todo es válido, mostramos SweetAlert2
          Swal.fire({
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarnos. Te responderemos a la brevedad.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Opcional: resetear el formulario y clase de validación
            form.reset();
            form.classList.remove("was-validated");
          });
        } else {
          // Si hay algún error, añadimos clases de validación
          form.classList.add("was-validated");
        }
      },
      false
    );
  });
})();
