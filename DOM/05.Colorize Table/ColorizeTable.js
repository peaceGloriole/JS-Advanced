function colorize() {
    let info = document.querySelectorAll(`table tr`);
    let index = 0;
    for (let row of info) {
        index++;
        if (index % 2 == 0) {
            row.style.background = `teal`;
        }
    }
}