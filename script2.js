function searchArray(arr, value) {
    if (arr.length === 0) {
        return false;
    }

    if (arr[0] === value) {
        return true;
    }

    return searchArray(arr.slice(1), value);
}

const myArray = [1, 2, 3, 4, 5];

console.log(searchArray(myArray, 3)); 
console.log(searchArray(myArray, 6)); 