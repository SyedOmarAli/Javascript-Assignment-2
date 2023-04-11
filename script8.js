function saveObjectPropertiesToLocalStorage(obj) {
    for (let prop in obj) {
        localStorage.setItem(prop, obj[prop]);
    }

    const retrievedObj = {};


    for (let prop in obj) {

        retrievedObj[prop] = localStorage.getItem(prop);
    }

    return retrievedObj;
}

const myObject = { name: "John", age: 30 };

const retrievedObject = saveObjectPropertiesToLocalStorage(myObject);

console.log(retrievedObject.name);
console.log(retrievedObject.age);

