(() => {
    const getFlashButton = document.querySelector('[href$="adobe.com/go/getflash/"]') as HTMLAnchorElement;

    if (getFlashButton) {
        setTimeout(() => getFlashButton.click(), 0); // automatically request flash (setTimeout is sometimes required for Chrome responses)
    }
})();
