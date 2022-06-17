let highest = window.prompt('Enter highest range:');

document.getElementById('subBtn').onclick = function main() {
    let value = document.getElementById('value').value;
    let match = Math.ceil(Math.random() * highest);

    if (match == value) {
        let wonResult = `You won! <br> Actual number: ${match} <br> Guessed number: ${value}`;
        document.getElementById('result').innerHTML = wonResult;
    }
    else if (match != value) {
        let loseResult = `Boo! <br> Actual number: ${match} <br> Guessed number: ${value}`;
        document.getElementById('result').innerHTML = loseResult;
    }
}