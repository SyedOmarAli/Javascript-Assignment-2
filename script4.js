function addListItem(text) {
    const newListItem = document.createElement("li");

    newListItem.textContent = text;

    const unorderedList = document.querySelector("ul");

    unorderedList.appendChild(newListItem);
}

addListItem("New List Item");
