class RedirectController {
    constructor() {
        if (RedirectController.instance) {
            return RedirectController.instance;
        }
        RedirectController.instance = this;

        this.targetURL = 'https://www.google.com';
        this.maxWidth = 768;
    }

    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    shouldRedirect() {
        return window.innerWidth <= this.maxWidth && this.isMobileDevice();
    }

    redirectToURL(url) {
        window.location.href = url;
    }

    redirectToGoogle() {
        if (this.shouldRedirect()) {
            this.redirectToURL(this.targetURL);
        }
    }

    init() {
        this.redirectToGoogle();
    }
}

// Exportamos un Singleton
export const RedirectController = new RedirectController();
