window.addEventListener('load', solve);

function solve() {
  let timeRef = document.getElementById(`time`);
  let dateRef = document.getElementById(`date`);
  let placeRef = document.getElementById(`place`);
  let eventRef = document.getElementById(`event-name`);
  let emailRef = document.getElementById(`email`);
  let addBtnRef = document.getElementById(`add-btn`);
  let lastCheckUl = document.getElementById(`check-list`);
  let upcomingUl = document.getElementById(`upcoming-list`);
  let finishUl = document.getElementById(`finished-list`);
  let clearBtn = document.getElementById(`clear`);

  addBtnRef.addEventListener(`click`, onAdd);

  function onAdd() {
    // Checking if input is empty
    if (
      timeRef.value == `` ||
      dateRef.value == `` ||
      placeRef.value == `` ||
      eventRef.value == `` ||
      emailRef.value == ``
    ) {
      return
    }

    // Creating elements in the Last Check section and appending them
    let lastCheckLi = document.createElement(`li`);
    lastCheckLi.classList.add(`event-content`);

    let lastCheckArticle = document.createElement(`article`);

    let lastCheckDateBegins = document.createElement(`p`);
    lastCheckDateBegins.textContent = `Begins: ${dateRef.value} at: ${timeRef.value}`

    let lastCheckInPlace = document.createElement(`p`);
    lastCheckInPlace.textContent = `In: ${placeRef.value}`;

    let lastCheckEventEl = document.createElement(`p`);
    lastCheckEventEl.textContent = `Event: ${eventRef.value}`;

    let lastCheckEmailEl = document.createElement(`p`);
    lastCheckEmailEl.textContent = `Contact: ${emailRef.value}`;

    let editBtn = document.createElement(`button`);
    editBtn.textContent = `Edit`;
    editBtn.classList.add(`edit-btn`);

    let continueBtn = document.createElement(`button`);
    continueBtn.textContent = `Continue`;
    continueBtn.classList.add(`continue-btn`);

    addBtnRef.disabled = true;

    lastCheckArticle.appendChild(lastCheckDateBegins);
    lastCheckArticle.appendChild(lastCheckInPlace);
    lastCheckArticle.appendChild(lastCheckEventEl);
    lastCheckArticle.appendChild(lastCheckEmailEl);

    lastCheckLi.appendChild(lastCheckArticle);
    lastCheckLi.appendChild(editBtn);
    lastCheckLi.appendChild(continueBtn);

    lastCheckUl.appendChild(lastCheckLi);

    // Last Check elements reference keeping
    let lastCheckTime = timeRef.value;
    let lastCheckDate = dateRef.value;
    let lastCheckPlace = placeRef.value;
    let lastCheckEvent = eventRef.value
    let lastCheckEmail = emailRef.value;

    // Deleting initial input
    timeRef.value = ``;
    dateRef.value = ``;
    placeRef.value = ``;
    eventRef.value = ``;
    emailRef.value = ``;

    editBtn.addEventListener(`click`, onEdit);

    function onEdit() {
      addBtnRef.disabled = false;

      timeRef.value = lastCheckTime;
      dateRef.value = lastCheckDate;
      placeRef.value = lastCheckPlace;
      eventRef.value = lastCheckEvent;
      emailRef.value = lastCheckEmail;

      lastCheckLi.remove();
    }

    continueBtn.addEventListener(`click`, onContinue);

    function onContinue() {
      addBtnRef.disabled = false;

      let upcomingLi = document.createElement(`li`);
      upcomingLi.classList.add(`event-content`);

      let upcomingArticleEl = document.createElement(`article`);

      let upcomingDateEl = document.createElement(`p`);
      upcomingDateEl.textContent = `Begins: ${lastCheckDate} ${lastCheckTime}`;

      let upcomingPlaceEl = document.createElement(`p`);
      upcomingPlaceEl.textContent = `In: ${lastCheckPlace}`;

      let upcomingEventEl = document.createElement(`p`);
      upcomingEventEl.textContent = `Event: ${lastCheckEvent}`;

      let upcomingEmailEl = document.createElement(`p`);
      upcomingEmailEl.textContent = `Contact: ${lastCheckEmail}`;

      let finishedBtn = document.createElement(`button`);
      finishedBtn.textContent = `Move to Finished`;
      finishedBtn.classList.add(`finished-btn`);

      upcomingArticleEl.appendChild(upcomingDateEl);
      upcomingArticleEl.appendChild(upcomingPlaceEl);
      upcomingArticleEl.appendChild(upcomingEventEl);
      upcomingArticleEl.appendChild(upcomingEmailEl);

      upcomingLi.appendChild(upcomingArticleEl);
      upcomingLi.appendChild(finishedBtn);

      upcomingUl.appendChild(upcomingLi);

      lastCheckUl.remove();

      finishedBtn.addEventListener(`click`, onFinish);

      function onFinish() {
        let finishLi = document.createElement(`li`);

        let finishArticle = document.createElement(`article`);

        let finishDateEl = document.createElement(`p`);
        finishDateEl.textContent = upcomingDateEl.textContent;

        let finishPlaceEl = document.createElement(`p`);
        finishPlaceEl.textContent = upcomingPlaceEl.textContent;

        let finishEventEl = document.createElement(`p`);
        finishEventEl.textContent = upcomingEventEl.textContent;

        let finishEmailEl = document.createElement(`p`);
        finishEmailEl.textContent = upcomingEmailEl.textContent;

        finishArticle.appendChild(finishDateEl);
        finishArticle.appendChild(finishPlaceEl);
        finishArticle.appendChild(finishEventEl);
        finishArticle.appendChild(finishEmailEl);

        finishLi.appendChild(finishArticle);

        finishUl.appendChild(finishLi);

        upcomingLi.remove();
        finishedBtn.remove();

        clearBtn.addEventListener(`click`, onClear);

        function onClear() {
          finishLi.remove();
          clearBtn.remove();
        }
      }
    }
  }
}