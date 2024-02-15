window.addEventListener('load', solution);

function solution() {
  let employeeRef = document.getElementById(`employee`);
  let categoryRef = document.getElementById(`category`);
  let urgencyRef = document.getElementById(`urgency`);
  let assignTeamRef = document.getElementById(`team`);
  let descRef = document.getElementById(`description`);
  let addBtn = document.getElementById(`add-btn`);
  let previewUl = document.querySelector(`.preview-list`);
  let pendingUl = document.querySelector(`.pending-list`);
  let resolveUl = document.querySelector(`.resolved-list`);

  addBtn.addEventListener(`click`, onAdd);

  function onAdd(e) {
    e.preventDefault();

    if (employeeRef.value == `` ||
      categoryRef.value == `` ||
      urgencyRef.value == `` ||
      assignTeamRef.value == `` ||
      descRef.value == ``) {
      return
    }

    let previewLi = document.createElement(`li`);
    previewLi.classList.add(`problem-content`);

    let previewArticle = document.createElement(`article`);

    let previewEmployee = document.createElement(`p`);
    previewEmployee.textContent = `From ${employeeRef.value}`;

    let previewCategory = document.createElement(`p`);
    previewCategory.textContent = `Category: ${categoryRef.value}`;

    let previewUrgency = document.createElement(`p`);
    previewUrgency.textContent = `Urgency: ${urgencyRef.value}`;

    let previewAssignTeam = document.createElement(`p`);
    previewAssignTeam.textContent = `Assigned to: ${assignTeamRef.value}`;

    let previewDesc = document.createElement(`p`);
    previewDesc.textContent = `Description: ${descRef.value}`;

    let editBtn = document.createElement(`button`);
    editBtn.textContent = `Edit`;
    editBtn.classList.add(`edit-btn`);

    let continueBtn = document.createElement(`button`);
    continueBtn.textContent = `Continue`;
    continueBtn.classList.add(`continue-btn`);

    previewArticle.appendChild(previewEmployee);
    previewArticle.appendChild(previewCategory);
    previewArticle.appendChild(previewUrgency);
    previewArticle.appendChild(previewAssignTeam);
    previewArticle.appendChild(previewDesc);

    previewLi.appendChild(previewArticle);
    previewLi.appendChild(editBtn);
    previewLi.appendChild(continueBtn);

    previewUl.appendChild(previewLi);

    addBtn.disabled = true;

    let previewEmployeeRef = employeeRef.value;
    let previewCategoryRef = categoryRef.value;
    let previewUrgencyRef = urgencyRef.value;
    let previewAssignTeamRef = assignTeamRef.value;
    let previewDescRef = descRef.value;

    employeeRef.value = ``;
    categoryRef.value = ``;
    urgencyRef.value = ``;
    assignTeamRef.value = ``;
    descRef.value = ``;

    editBtn.addEventListener(`click`, onEdit);

    function onEdit() {
      addBtn.disabled = false;

      employeeRef.value = previewEmployeeRef;
      categoryRef.value = previewCategoryRef;
      urgencyRef.value = previewUrgencyRef;
      assignTeamRef.value = previewAssignTeamRef;
      descRef.value = previewDescRef;

      previewLi.remove();
    }

    continueBtn.addEventListener(`click`, onContinue);

    function onContinue() {
      let pendingLi = document.createElement(`li`);
      pendingLi.classList.add(`problem-content`);

      let pendingArticle = document.createElement(`article`);

      let pendingEmployee = document.createElement(`p`);
      pendingEmployee.textContent = `From: ${previewEmployeeRef}`;

      let pendingCategory = document.createElement(`p`);
      pendingCategory.textContent = `Category: ${previewCategoryRef}`;

      let pendingUrgency = document.createElement(`p`);
      pendingUrgency.textContent = `Urgency: ${previewUrgencyRef}`;

      let pendingAssign = document.createElement(`p`);
      pendingAssign.textContent = `Assigned to: ${previewAssignTeamRef}`;

      let pendingDesc = document.createElement(`p`);
      pendingDesc.textContent = `Description: ${previewDescRef}`;

      let resolveBtn = document.createElement(`button`);
      resolveBtn.classList.add(`resolve-btn`);
      resolveBtn.textContent = `Resolve`;

      pendingArticle.appendChild(pendingEmployee);
      pendingArticle.appendChild(pendingCategory);
      pendingArticle.appendChild(pendingUrgency);
      pendingArticle.appendChild(pendingAssign);
      pendingArticle.appendChild(pendingDesc);

      pendingLi.appendChild(pendingArticle);
      pendingLi.appendChild(resolveBtn);

      pendingUl.appendChild(pendingLi);

      previewLi.remove();

      resolveBtn.addEventListener(`click`, onResolve);

      function onResolve() {
        let resolveLi = document.createElement(`li`);
        resolveLi.classList.add(`problem-content`);

        let resolveArticle = document.createElement(`article`);

        let resolveEmployee = document.createElement(`p`);
        resolveEmployee.textContent = `From: ${pendingEmployee.textContent}`;

        let resolveCategory = document.createElement(`p`);
        resolveCategory.textContent = `Category: ${pendingCategory.textContent}`;

        let resolveUrgency = document.createElement(`p`);
        resolveUrgency.textContent = `Urgency: ${pendingUrgency.textContent}`;

        let resolveAssign = document.createElement(`p`);
        resolveAssign.textContent = `Assigned to: ${pendingAssign.textContent}`;

        let resolveDesc = document.createElement(`p`);
        resolveDesc.textContent = `Description: ${pendingDesc.textContent}`;

        let clearBtn = document.createElement(`button`);
        clearBtn.textContent = `Clear`;
        clearBtn.classList.add(`clear-btn`);

        resolveArticle.appendChild(resolveEmployee);
        resolveArticle.appendChild(resolveCategory);
        resolveArticle.appendChild(resolveUrgency);
        resolveArticle.appendChild(resolveAssign);
        resolveArticle.appendChild(resolveDesc);

        resolveLi.appendChild(resolveArticle);
        resolveLi.appendChild(clearBtn);

        resolveUl.appendChild(resolveLi);

        pendingLi.remove();

        clearBtn.addEventListener(`click`, onClear);

        function onClear() {
          clearBtn.remove();
          resolveLi.remove();
        }
      }
    }
  }
}