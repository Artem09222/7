let all = [];

for (let f = 0; f < 10; f++){
    let number = prompt("");
    all.push(Number(number));
}

let result = 0;

for (let s of all){
    result += s;
}

console.log(result);