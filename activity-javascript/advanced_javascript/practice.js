


function message(arr){

    let newArr = [];

    for(let i of arr){
        firstRemove = arr.shift(i);
        newArr.push(firstRemove);
    }

    return newArr.join(", ") + " and " + arr.length + " others sent you a message!"
}

console.log(message(["Stanley","Geralt","Triss"]));
console.log(message(["Stanley","Keanu","Roger","Clarke"]));
console.log(message(["Stanley","Keanu","Roger","Clarke","8080"]));



