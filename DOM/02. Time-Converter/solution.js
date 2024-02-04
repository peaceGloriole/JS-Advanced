function attachEventsListeners() {

    const btns = Array.from(document.querySelectorAll(`input[type="button"]`));

    for (let btn of btns) {
        btn.addEventListener("click", onClick)
    }

    function onClick(e) {
        let currentUnit = e.currentTarget.parentElement.children[1];
        let value = Number(currentUnit.value);
        let unit = currentUnit.id;

        if (unit == `days`) {
            propagateNewValue(value)
        } else if (unit == `hours`) {
            propagateNewValue(value / 24);
        } else if (unit == `minutes`) {
            propagateNewValue(value / 24 / 60);
        } else if (unit == `seconds`) {
            propagateNewValue(value / 24 / 60 / 60);
        }
    }

    function propagateNewValue(days) {
        let inputs = document.querySelectorAll(`input[type="text"]`);
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}