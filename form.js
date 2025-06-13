// form.js
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        // 1. Capturamos el nombre que ingresó el usuario
        const nombre = form.querySelector('#nombrevalidar').value;

        // 2. Mostramos SweetAlert2 con mensaje personalizado
        Swal.fire({
          title: `¡Gracias por su contacto, ${nombre}!`,
          text: 'En breve le estaré respondiendo.',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        }).then(() => {
          // 3. Opcional: resetear el formulario
          form.reset();
          form.classList.remove('was-validated');
        });
      } else {
        // marca los campos inválidos
        form.classList.add('was-validated');
      }
    }, false);
  });
})();

