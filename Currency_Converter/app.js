const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.4/v1/currencies";


const dropdown = document.querySelectorAll(".dropdown select");

let btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

let i = 0;
for (let select of dropdown) {
    for (let currcode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newoption.selected = "selected";
        }
        else if (select.name === "to" && currcode === "INR") {
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change", (e) => {
        updateflag(e.target);
    })
}

const updateflag = (ele) => {
    let currvalue = ele.value;
    let countrycode = countryList[currvalue];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = newsrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    console.log('entered');
    let amount = document.querySelector("form input");
    let amtval = amount.value;
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = '1';
    }
    console.log(fromCurr.value.toLowerCase());
    const URL = `${base_url}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    console.log(response, "yes");
    let data = await response.json();
    console.log(data);
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtval * rate;
    msg.innerText = `${amtval} ${fromCurr.value}=${finalAmount} ${toCurr.value}`
})