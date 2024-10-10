let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset-btn")
let winp = document.getElementById("winner");
let div = document.getElementById("windiv")

let turno = true;
let winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let winner = ''
let c = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        c++;
        if (turno) {
            box.innerText = "X";
            turno = false
        }
        else {
            box.innerText = "O";
            turno = true;
        }
        box.disabled = true;
        checkWinner();

    })
})

const checkWinner = () => {
    let win = ''
    winners.forEach((pattern) => {
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
            if (c === 9 && p.innerText == '') {
                p.innerText = 'its a draw'
                document.querySelector("body").append(p);
            }
        }

    })


}

const showWinner = (winner) => {
    winp.innerText = `congratulations ${winner} wins`
    div.classList.remove("windiv")
    disableBoxes();
    c = 0;
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

resetbtn.onclick = () => {
    turno = true
    boxesEnable();
    c = 0;
    div.classList.add("windiv")
}
const boxesEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
