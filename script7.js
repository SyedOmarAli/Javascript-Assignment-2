function getObjectFromLocalStorage(key) {
    const objString = localStorage.getItem(key);

    return JSON.parse(objString);
}

const myObject = getObjectFromLocalStorage("myObject");

console.log(myObject.name);
console.log(myObject.age); 
