function suffix(i) {
    let j = i % 10;
    let k = i % 100;

    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

function question(question, hint, answer1, answer2, answer3) {

    let answer;
    let tries = 1;

    document.write(`<h3>${question}</h3>`);

    while (tries != 4) {

        answer = prompt(question);

        if (answer == answer1 || answer == answer2 || answer == answer3)
        {
            document.write(`<p class="right">You got the ${suffix(tries)} answer right!</p>`)
            break;
        }
        else 
        {
            document.write(`<p class="wrong">You got the ${suffix(tries)} answer wrong!</p>`);

            if (tries == 2) {
                document.write(`<p class="hint">${hint}</p>`);
            }
        }

        tries = tries + 1;
    }

}

// Start of Quiz

document.write("<h1>The Big Quiz!</h1>")

// Question One

question("How many books are part of the Lord of the Rings collection?", "Hint: There's less than 5", "3", "three", "Three")

// Question Two

question("How many colours in the Brazilian Flag? ", "Hint: There's less than 6", "4", "four", "Four")

// Question Three

question("How many minutes are in a full week? ", "Hint: There's a lot", "10080", "10,080", "10080")

// End of Quiz

document.write("<h2>End of Quiz</h2>")