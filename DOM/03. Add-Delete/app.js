function addItem() {
    const input = document.getElementById(`newItemText`);

    if (input.value == 0) {
        return;
    }
    
    const liElement = document.createElement(`li`);
    liElement.textContent = input.value;

    const deleteEl = document.createElement(`a`);
    deleteEl.textContent = `[Delete]`;
    deleteEl.href = `#`;
    deleteEl.addEventListener(`click`, onDelete);
    liElement.appendChild(deleteEl);

    const list = document.getElementById(`items`);
    list.appendChild(liElement);

    input.value = ``;

    function onDelete(event) {
        const deleteEl = event.currentTarget;
        const liElement = deleteEl.parentElement;
        liElement.remove();
    }
}
