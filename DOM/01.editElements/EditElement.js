function editElement(element, match, replacer) {
    let content = element.textContent;
    let matcher = new RegExp(match, `g`);
    let edited = content.replace(matcher, replacer);
    element.textContent = edited;
}