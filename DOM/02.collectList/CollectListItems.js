function extractText() {
    let items = document.querySelectorAll(`ul#items li`);
    let textArea = document.querySelector(`#result`);

    for (let line of items) {
        textArea.value += line.textContent + `\n`;
    }
}