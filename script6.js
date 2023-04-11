function saveObjectToLocalStorage(key, obj) {
    const objString = JSON.stringify(obj);

    localStorage.setItem(key, objString);
}


const myObject = { name: "John", age: 30 };

saveObjectToLocalStorage("myObject", myObject);

