(() => {
    const app = document.getElementById('Employee_Main') as HTMLEmbedElement;

    if (app) {
        app.addEventListener('mousewheel', (e) => e.preventDefault()); // prevent month scrolling
    }
})();
