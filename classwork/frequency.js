const readline = require('readline');
function removePunctuation(text) {
    return text.replace(/[.,<>'"`~]/g, "").replace(/\s{2,}/g, " ");
}

function wordFrequency(text) {
    const words = text.toLowerCase().split(" ");
    const wordMap = new Map();

    words.forEach(word => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    });
    const sortedWordArray = [...wordMap.entries()].sort((a, b) => b[1] - a[1]);
    const sortedWordMap = new Map(sortedWordArray);

    return sortedWordMap;
}

function displayWordFrequency(wordMap) {
    wordMap.forEach((count, word) => {
        console.log(`${word}: ${count}`);
    });
}




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a text string: ', (input) => {
    const cleanedText = removePunctuation(input);
    const wordMap = wordFrequency(cleanedText);
    displayWordFrequency(wordMap);
    rl.close();
});
