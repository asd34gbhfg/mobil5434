import { RedirectController } from './redirect-controller.js';

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const redirectController = new RedirectController('https://www.facebook.com', 768);
    redirectController.init();
});
