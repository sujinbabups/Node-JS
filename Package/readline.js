const readline = require('readline'); //importing readline module

//create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askName() {
    rl.question("what is your name :", function (name1) {
        console.log(`hello ${name1}`)
        askforFavLang();
    });
}
function askforFavLang() {
    rl.question("what is your fav pro language :", function (lang) {
        console.log(`${lang} is a geat choice`);
        rl.close()

    });
}

console.log("Welcome to comand line interface");
askName();