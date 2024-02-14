window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById(`first-name`);
    let lastNameElement = document.getElementById(`last-name`);
    let checkInElement = document.getElementById(`date-in`);
    let checkOutElement = document.getElementById(`date-out`);
    let pplCountElement = document.getElementById(`people-count`);
    let nextBtn = document.getElementById(`next-btn`);
    let reservationInfo = document.querySelector(`.info-list`);
    let confirmInfo = document.querySelector(`.confirm-list`);
    let verificationInfo = document.getElementById(`verification`);

    nextBtn.addEventListener(`click`, onNext);

    function onNext(e) {
        e.preventDefault();

        if (firstNameElement.value == `` ||
            lastNameElement.value == `` ||
            pplCountElement.value == `` ||
            checkOutElement.value == `` ||
            checkInElement.value == `` ||
            new Date(checkInElement.value) >= new Date(checkOutElement.value)) {
            return;
        }


        let liElementInfo = document.createElement(`li`);
        liElementInfo.setAttribute(`class`, `reservation-content`);

        let articleElementInfo = document.createElement(`article`);

        let fullName = document.createElement(`h3`);
        fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        let dateIn = document.createElement(`p`);
        dateIn.textContent = `From date: ${checkInElement.value}`;

        let dateOut = document.createElement(`p`);
        dateOut.textContent = `To date: ${checkOutElement.value}`;

        let peopleCount = document.createElement(`p`);
        peopleCount.textContent = `For ${pplCountElement.value} people`;

        let editBtn = document.createElement(`button`);
        editBtn.setAttribute(`class`, `edit-btn`);
        editBtn.textContent = `Edit`;

        let continueBtn = document.createElement(`button`);
        continueBtn.setAttribute(`class`, `continue-btn`);
        continueBtn.textContent = `Continue`;

        articleElementInfo.appendChild(fullName);
        articleElementInfo.appendChild(dateIn);
        articleElementInfo.appendChild(dateOut);
        articleElementInfo.appendChild(peopleCount);

        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);

        reservationInfo.appendChild(liElementInfo);

        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editCheckIn = checkInElement.value;
        let editCheckOut = checkOutElement.value;
        let editPeopleCount = pplCountElement.value;

        firstNameElement.value = ``;
        lastNameElement.value = ``;
        checkInElement.value = ``;
        checkOutElement.value = ``;
        pplCountElement.value = ``;

        nextBtn.disabled = true;

        editBtn.addEventListener(`click`, onEdit);

        function onEdit() {
            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName;
            checkInElement.value = editCheckIn;
            checkOutElement.value = editCheckOut;
            pplCountElement.value = editPeopleCount;

            liElementInfo.remove();
            nextBtn.disabled = false;
        }

        continueBtn.addEventListener(`click`, onContinue);

        function onContinue() {
            let liElementConfirm = document.createElement(`li`);
            liElementConfirm.setAttribute(`class`, `reservation-content`);

            let articleConfirm = articleElementInfo;

            let confirmBtn = document.createElement(`button`);
            confirmBtn.setAttribute(`class`, `confirm-btn`);
            confirmBtn.textContent = `Confirm`;

            let cancelBtn = document.createElement(`button`);
            cancelBtn.setAttribute(`class`, `cancel-btn`);
            cancelBtn.textContent = `Cancel`;

            liElementConfirm.appendChild(articleConfirm);
            liElementConfirm.appendChild(confirmBtn);
            liElementConfirm.appendChild(cancelBtn);

            confirmInfo.appendChild(liElementConfirm);

            reservationInfo.remove();

            confirmBtn.addEventListener(`click`, onConfirm);

            function onConfirm() {
                liElementConfirm.remove();

                nextBtn.disabled = false;

                verificationInfo.setAttribute(`class`, `reservation-confirmed`);
                verificationInfo.textContent = `Confirmed.`;
            }

            cancelBtn.addEventListener(`click`, onCancel);

            function onCancel() {
                liElementConfirm.remove();

                nextBtn.disabled = false;

                verificationInfo.setAttribute(`class`, `reservation-cancelled`);
                verificationInfo.textContent = `Canceled.`;
            }

        }
    }
}