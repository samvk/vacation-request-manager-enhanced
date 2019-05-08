(() => {
    const getFlashButton = document.querySelector('[href$="adobe.com/go/getflash/"]') as HTMLAnchorElement;

    if (getFlashButton) {
        getFlashButton.click(); // automatically request flash
    }
})();
