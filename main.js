let names = [];
let number;

for (let n = 0; n < 7; n++) {
    number = Number(prompt("Enter one"));
    names.push(number);
}

names.push(8);
names.unshift(1);
console.log(names);
console.log(names.length);

