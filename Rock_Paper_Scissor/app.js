let you = document.querySelector(".user-score");
let comp = document.querySelector(".comp-score");
let y = 0;
let c = 0;
let msg = document.getElementById("msg");

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        let userId = choice.getAttribute("id");
        playgame(userId);
    })
})

const showWinner = (win) => {
    if (win) {
        console.log("win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        y++;
        you.innerText = y;
    }
    else {
        console.log("loose");
        msg.innerText = "You loose!";
        msg.style.backgroundColor = "red";
        c++;
        comp.innerText = c;
    }
}

const draw = () => {
    console.log("draw");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const playgame = (choice) => {
    const compChoice = genChoice();
    let userWin = true;
    if (choice === compChoice) {
        draw();
    } else {
        if (choice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (choice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        }
        else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }

}

const genChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    let compchoice = Math.floor(Math.random() * 3);
    return options[compchoice];
}