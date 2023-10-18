import { RedirectController } from './redirect-controller.js';

// Crear una instancia única del controlador de redirección (Singleton)
const redirectController = RedirectController.getInstance();

// Inicializar el controlador cuando se cargue la página
window.addEventListener('load', () => {
    redirectController.init();
});
