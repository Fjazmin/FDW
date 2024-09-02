
//Validaciones
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        let hasError = false;
        let error = '';

        const nombre = document.getElementById('nombres').value.trim();
        if (nombre === '') {
            error += 'Por favor, ingresa tu nombre.\n';
            hasError = true;
        }

        const apellidos = document.getElementById('apellidos').value.trim();
        if (apellidos === '') {
            error += 'Por favor, ingresa tus apellidos.\n';
            hasError = true;
        }

        const correo = document.getElementById('correo').value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (correo === '') {
            error += 'Por favor, ingresa tu correo electrónico.\n';
            hasError = true;

        } else if (!emailPattern.test(correo)) {
            error += 'Por favor, ingresa un correo electrónico válido.\n';
            hasError = true;
        }

        const telefono = document.getElementById('telefono').value.trim();
        const telefonoPattern = /^[0-9]{10}$/;
        if (telefono === '') {
            error += 'Por favor, ingresa tu número de teléfono.\n';
            hasError = true;
        } else if (!telefonoPattern.test(telefono)) {
            error += 'Por favor, ingresa un número de teléfono válido. (10 dígitos).\n';
            hasError = true;
        }

//mensaje
        const tipoMensaje = document.getElementById('tipoMensaje').value;
        if (tipoMensaje === '') {
            error += 'Por favor, seleccione el tipo de mensaje.\n';
            hasError = true;
        }

        const mensaje = document.getElementById('mensaje').value.trim();
        if (mensaje === '') {
            error += 'Por favor, ingresa el cuerpo del mensaje.\n';
            hasError = true;
        }

        const privacidad = document.getElementById('privacidad').checked;
        if (!privacidad) {
            error += 'Debe aceptar la política de privacidad.\n';
            hasError = true;
        }

        if (hasError) {
            alert(error);
            event.preventDefault();
        } else {
            alert(`Mensaje enviado, gracias ${nombre}`);
            form.reset();
        }
    });
});
