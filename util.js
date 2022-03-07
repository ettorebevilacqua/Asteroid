// si auto esegue per caricare tutti gli html
(() => {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    });
})();


// custom element version
customElements.define('ui-include', class extends HTMLElement {
    async connectedCallback() {
        let src = this.getAttribute('src');
        this.innerHTML = await (await fetch(src)).text();;
    }
})

function canvasPixel() {

    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    // disegna dei pixel
    // That's how you define the value of a pixel
    function drawPixel(x, y, r, g, b, a) {
        var index = (x + y * canvasWidth) * 4;

        canvasData.data[index + 0] = r;
        canvasData.data[index + 1] = g;
        canvasData.data[index + 2] = b;
        canvasData.data[index + 3] = a;
    }

    // That's how you update the canvas, so that your
    // modification are taken in consideration
    function updateCanvas() {
        ctx.putImageData(canvasData, 0, 0);
    }
    updateCanvas();
}