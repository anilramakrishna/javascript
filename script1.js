// let heading = document.querySelector("h2")
// console.log(heading)
// heading.innerText += "Apna collage";

// const getData = (dataId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data:", dataId);
//             resolve("Success");
//         }, 2000)
//     })
// }
// getData(1).then((res) => {
//     return getData(2).then((res) => {
//         return getData(3);
//     })
// }).then((res) => {
//     console.log(res);
// })

// const data = (dataId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve(200);
//         }, 2000)
//     })
// }

// async function allData() {
//     await data(1);
//     await data(2);
//     await data(3);
// }

const url = "https://cat-fact.herokuapp.com/facts";
let para = document.querySelector("#para");
let btn = document.querySelector(".btn");


const getresponse = async () => {
    let res = await fetch(url);
    let je = await res.json();
    console.log(je);
    para.innerText = je[0].text;
}
btn.addEventListener("click", getresponse);