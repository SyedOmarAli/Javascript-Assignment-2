function addParagraph(text) {

    const newParagraph = document.createElement("p");

    newParagraph.textContent = text;

    document.body.appendChild(newParagraph);
}

addParagraph("This is a new paragraph!");
