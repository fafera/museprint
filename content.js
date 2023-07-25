chrome.runtime.onMessage.addListener(function (request) {
    if ('download-content' !== request) {
        return;
    }
    const muse = document.getElementById('jmuse-scroller-component');
    const divs = muse.getElementsByClassName('EEnGW F16e6');
    const length = divs.length;
    const isElementLoaded = async (element, selector) => {
        while (element.querySelector(selector) === null || '' === element.querySelector(selector).src) {
            await new Promise(resolve => requestAnimationFrame(resolve))
        }
        return element.querySelector(selector);
    };
    (async () => {
        confirm("Please wait till download is finished. Don't reload this page.")
        for (let div of divs) {
            div.scrollIntoView();
            const imgElement = await isElementLoaded(div, 'img');
            const anchor = document.createElement('a');
            console.log(imgElement.src);
            anchor.href = imgElement.src;
            anchor.download = 'score';
            anchor.click();
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 
        }
        alert('Images downloaded successfully!');
    })();

});