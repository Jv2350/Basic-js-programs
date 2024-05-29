function Letstp() {
    let randomNum = Math.round(Math.random() * 10);
    let userNum = Math.round(Math.random() * 10);

    while(randomNum != userNum) {
        userNum = Math.round(Math.random() * 10);
        console.log(`Agian choose a random number: ${userNum}`);
    }
    if(randomNum == userNum) {
        console.log(`Congratulations! You have guessed the right number: ${randomNum}`);
    }
}

Letstp();