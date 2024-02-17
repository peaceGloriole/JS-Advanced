window.addEventListener("load", solve);

function solve() {
  let snowManRef = document.getElementById(`snowman-name`);
  let heightRef = document.getElementById(`snowman-height`);
  let locationRef = document.getElementById(`location`);
  let creatorNameRef = document.getElementById(`creator-name`);
  let specialAttributeRef = document.getElementById(`special-attribute`);
  let addBtn = document.querySelector(`.add-btn`);
  let snowManPreviewUl = document.querySelector(`.snowman-preview`);
  let snowManFinishedUl = document.querySelector(`.snow-list`);
  let mainId = document.getElementById(`hero`);
  let bodyId = document.querySelector(`.body`);

  addBtn.addEventListener(`click`, onAdd);

  function onAdd(e) {
    e.preventDefault();

    if (
      snowManRef.value == `` ||
      heightRef.value == `` ||
      locationRef.value == `` ||
      creatorNameRef.value == `` ||
      specialAttributeRef.value == ``
    ) {
      return
    }

    let previewLi = document.createElement(`li`);
    previewLi.classList.add(`snowman-info`);

    let previewArticle = document.createElement(`article`);

    let previewName = document.createElement(`p`);
    previewName.textContent = `Name: ${snowManRef.value}`;

    let previewHeight = document.createElement(`p`);
    previewHeight.textContent = `Height: ${heightRef.value}`;

    let previewLocation = document.createElement(`p`);
    previewLocation.textContent = `Location: ${locationRef.value}`;

    let previewCreatorName = document.createElement(`p`);
    previewCreatorName.textContent = `Creator: ${creatorNameRef.value}`;

    let previewSpecialAttribute = document.createElement(`p`);
    previewSpecialAttribute.textContent = `Attribute: ${specialAttributeRef.value}`;

    let previewDiv = document.createElement(`div`);
    previewDiv.classList.add(`btn-container`);

    let editBtn = document.createElement(`button`);
    editBtn.textContent = `Edit`;
    editBtn.classList.add(`edit-btn`);

    let nextBtn = document.createElement(`button`);
    nextBtn.textContent = `Next`;
    nextBtn.classList.add(`next-btn`);

    previewArticle.appendChild(previewName);
    previewArticle.appendChild(previewHeight);
    previewArticle.appendChild(previewLocation);
    previewArticle.appendChild(previewCreatorName);
    previewArticle.appendChild(previewSpecialAttribute);

    previewDiv.appendChild(editBtn);
    previewDiv.appendChild(nextBtn);

    previewLi.appendChild(previewArticle);
    previewLi.appendChild(previewDiv);

    snowManPreviewUl.appendChild(previewLi);

    addBtn.disabled = true;

    let previewNameRef = snowManRef.value;
    let previewHeightRef = heightRef.value;
    let previewLocationRef = locationRef.value;
    let previewCreatorRef = creatorNameRef.value;
    let previewAttributeRef = specialAttributeRef.value;

    snowManRef.value = ``;
    heightRef.value = ``;
    locationRef.value = ``;
    creatorNameRef.value = ``;
    specialAttributeRef.value = ``;

    editBtn.addEventListener(`click`, onEdit);

    function onEdit() {
      addBtn.disabled = false;

      snowManRef.value = previewNameRef;
      heightRef.value = previewHeightRef;
      locationRef.value = previewLocationRef;
      creatorNameRef.value = previewCreatorRef;
      specialAttributeRef.value = previewAttributeRef;

      previewLi.remove();
    }

    nextBtn.addEventListener(`click`, onNext);

    function onNext() {
      let finishLi = document.createElement(`li`);
      finishLi.classList.add(`snowman-content`);

      let finishArticle = document.createElement(`article`);

      let finishName = document.createElement(`p`);
      finishName.textContent = `Name: ${previewNameRef}`;

      let finishHeight = document.createElement(`p`);
      finishHeight.textContent = `Height: ${previewHeightRef}`;

      let finishLocation = document.createElement(`p`);
      finishLocation.textContent = `Location: ${previewLocationRef}`;

      let finishCreator = document.createElement(`p`);
      finishCreator.textContent = `Creator: ${previewCreatorRef}`;

      let finishAttribute = document.createElement(`p`);
      finishAttribute.textContent = `Attribute: ${previewAttributeRef}`;

      let sendBtn = document.createElement(`button`);
      sendBtn.classList.add(`send-btn`);
      sendBtn.textContent = `Send`;

      finishArticle.appendChild(finishName);
      finishArticle.appendChild(finishHeight);
      finishArticle.appendChild(finishLocation);
      finishArticle.appendChild(finishCreator);
      finishArticle.appendChild(finishAttribute);
      finishArticle.appendChild(sendBtn);

      finishLi.appendChild(finishArticle);

      snowManFinishedUl.appendChild(finishLi);

      previewLi.remove();

      sendBtn.addEventListener(`click`, onSend);

      function onSend() {
        mainId.remove();

        let backBtn = document.createElement(`button`);
        backBtn.textContent = `Back`;
        backBtn.classList.add(`back-btn`);

        let loadImg = document.createElement(`img`);
        loadImg.id = `back-img`;
        loadImg.src = `./style/images/back-Snowman.png`;

        bodyId.appendChild(loadImg);
        bodyId.appendChild(backBtn);

        backBtn.addEventListener(`click`, onBack);

        function onBack() {
          window.location.reload();
        }
      }
    }
  }
}
