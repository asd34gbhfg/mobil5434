// Módulo de redirección
class RedirectController {
    constructor(targetURL, maxWidth) {
        this.targetURL = targetURL;
        this.maxWidth = maxWidth;
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

export { RedirectController };
