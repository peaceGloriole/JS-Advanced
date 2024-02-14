window.addEventListener('load', solve);

function solve() {
  let firstName = document.getElementById(`first-name`);
  let lastName = document.getElementById(`last-name`);
  let peopleCount = document.getElementById(`people-count`);
  let dateIn = document.getElementById(`from-date`);
  let days = document.getElementById(`days-count`);
  let nextBtn = document.getElementById(`next-btn`);
  let ticketInfoList = document.querySelector(`.ticket-info-list`);
  let confirmInfoList = document.querySelector(`.confirm-ticket`);
  let mainDivElement = document.getElementById(`main`);
  let body = document.getElementById(`body`);

  nextBtn.addEventListener(`click`, onNext);

  function onNext(e) {
    e.preventDefault()

    if (
      firstName.value == `` ||
      lastName.value == `` ||
      peopleCount.value == `` ||
      dateIn.value == `` ||
      days.value == ``
    ) {
      return;
    }

    let liElement = document.createElement(`li`);
    liElement.setAttribute(`class`, `ticket`);

    let articleElement = document.createElement(`article`);

    let namePreview = document.createElement(`h3`);
    namePreview.textContent = `Name: ${firstName.value} ${lastName.value}`;

    let datePrewiew = document.createElement(`p`);
    datePrewiew.textContent = `From date: ${dateIn.value}`;

    let daysPreview = document.createElement(`p`);
    daysPreview.textContent = `For ${days.value} days`;

    let peoplePreview = document.createElement(`p`);
    peoplePreview.textContent = `For ${peopleCount.value} people`;

    let editBtn = document.createElement(`button`);
    editBtn.setAttribute(`class`, `edit-btn`);
    editBtn.textContent = `Edit`;

    let continueBtn = document.createElement(`button`);
    continueBtn.setAttribute(`class`, `continue-btn`);
    continueBtn.textContent = `Continue`;

    articleElement.appendChild(namePreview);
    articleElement.appendChild(datePrewiew);
    articleElement.appendChild(daysPreview);
    articleElement.appendChild(peoplePreview);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    ticketInfoList.appendChild(liElement);

    nextBtn.disabled = true;

    let ticketFirstName = firstName.value;
    let ticketLastName = lastName.value;
    let ticketPeopleCount = peopleCount.value;
    let ticketDateIn = dateIn.value;
    let ticketDays = days.value;

    firstName.value = ``;
    lastName.value = ``;
    peopleCount.value = ``;
    dateIn.value = ``;
    days.value = ``;

    editBtn.addEventListener(`click`, onEdit);

    function onEdit() {
      firstName.value = ticketFirstName;
      lastName.value = ticketLastName;
      peopleCount.value = ticketPeopleCount;
      dateIn.value = ticketDateIn;
      days.value = ticketDays;

      liElement.remove();
      nextBtn.disabled = false;
    }

    continueBtn.addEventListener(`click`, onContinue);

    function onContinue() {
      let liConfirmElement = document.createElement(`li`);
      liConfirmElement.setAttribute(`class`, `ticket-content`);

      let articleConfirmElement = document.createElement(`article`);

      let fullName = document.createElement(`h3`);
      fullName.textContent = `Name: ${ticketFirstName} ${ticketLastName}`;

      let fromDate = document.createElement(`p`);
      fromDate.textContent = `From date: ${ticketDateIn}`;

      let forDays = document.createElement(`p`);
      forDays.textContent = `For ${ticketDays} days`;

      let forPeopleCount = document.createElement(`p`);
      forPeopleCount.textContent = `For ${ticketPeopleCount} people`;

      let confirmBtn = document.createElement(`button`);
      confirmBtn.setAttribute(`class`, `confirm-btn`);
      confirmBtn.textContent = `Confirm`;

      let cancelBtn = document.createElement(`button`);
      cancelBtn.setAttribute(`class`, `cancel-btn`);
      cancelBtn.textContent = `Cancel`;

      articleConfirmElement.appendChild(fullName);
      articleConfirmElement.appendChild(fromDate);
      articleConfirmElement.appendChild(forDays);
      articleConfirmElement.appendChild(forPeopleCount);

      liConfirmElement.appendChild(articleConfirmElement);
      liConfirmElement.appendChild(confirmBtn);
      liConfirmElement.appendChild(cancelBtn);

      confirmInfoList.appendChild(liConfirmElement);

      liElement.remove();

      cancelBtn.addEventListener(`click`, onCancel);

      function onCancel() {
        confirmInfoList.remove();
        nextBtn.disabled = false;
      }

      confirmBtn.addEventListener(`click`, onConfirm);

      function onConfirm() {
        let thankYou = document.createElement(`h1`);
        thankYou.setAttribute(`id`, `thank-you`);
        thankYou.textContent = `Thank you, have a nice day!`;

        let backBtn = document.createElement(`button`);
        backBtn.id = `back-btn`;
        backBtn.textContent = `Back`;

        body.appendChild(thankYou);
        body.appendChild(backBtn);

        mainDivElement.remove();
      }

      backBtn.addEventListener(`click`, onBack);

      function onBack() {
        location.reload();
      }

    }
  }
}