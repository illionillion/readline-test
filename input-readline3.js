const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
// readline.question('What is your name? \n > ', (answer) => {
// console.log(`Hello, ${answer}!`);
// readline.close();
// });

let line = new Array(10).fill('')

// console.log(line.length);
// console.log(line);

    for (let i = 0; i < line.length; i++) {
        readline.question('数値を入力 > ',(num) => {
            line[i]=num
        })
        // const element = line[i];
        // console.log(element);
    }
console.log(line);
readline.close();
