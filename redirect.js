/**
 * Módulo para la redirección de usuarios en función de su dispositivo y ancho de ventana.
 */
const RedirectModule = (function () {
    // Verificar si el dispositivo es móvil
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Función de redirección
    function redirectToGoogle() {
        const targetURL = "https://www.google.com";
        if (window.innerWidth <= 768 && isMobileDevice()) {
            window.location.href = targetURL;
        }
    }

    // Agregar un escuchador de eventos para cuando la página se cargue completamente
    window.addEventListener('load', redirectToGoogle);

    return {
        isMobileDevice,
        redirectToGoogle,
    };
})();

// Ejemplo de cómo podrías usar las funciones en otro momento
if (RedirectModule.isMobileDevice()) {
    console.log("Este es un dispositivo móvil.");
}

// Puedes llamar a RedirectModule.redirectToGoogle() para redirigir manualmente si es necesario.
