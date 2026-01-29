const numbers = [1, 2, 3, 4];

function filterEvenNumbers(arr) {
    return new Promise((resolve) => {
        const evens = arr.filter(num => num % 2 === 0);
        document.getElementById("filterResult").textContent = evens;
        resolve(evens);
    });
}

function multiplyByTwo(arr) {
    return new Promise((resolve) => {
        const multiplied = arr.map(num => num * 2);
        document.getElementById("multiplyResult").textContent = multiplied;
        resolve(multiplied);
    });
}


filterEvenNumbers(numbers)
    .then(result => multiplyByTwo(result))
    .catch(error => console.error(error));

