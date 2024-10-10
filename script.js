function myfunction() {
    console.log("my name is anil");
}
myfunction();

function add(x) {
    return function (y) {
        return x + y;
    }
}
let r = add(1)
console.log(r(2));

const addnum = (a, b) => {
    return a + b
}
let a = addnum(5, 5)
console.log(a)

function vow(s) {
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            c += 1;
        }
    }
    return c;
}
console.log(vow("anil"))

let arr = [1, 2, 3, 4]
arr.forEach((val) => {
    console.log(val * val);
})

let arr1 = [1, 2, 3, 4]
let narr = arr.map((val) => {
    return val * 2
})
console.log(narr)

let l = [1, 2, 5, 6, 8, 4]
let nl = l.filter((val) => {
    return val % 2 === 0
})
console.log(nl)

let div = document.querySelector("div")
let val = div.getAttribute("id")
console.log(val)
div.setAttribute("navbar", "123")
let val1 = document.querySelector("div")
console.log(val1)

let newbtn = document.createElement("button")
newbtn.innerText = "Click me"
newbtn.style.backgroundColor = "red"
newbtn.style.color = "white"
document.querySelector("body").prepend(newbtn)

let newp = document.createElement("p")
newp.setAttribute("class", "para")
newp.innerHTML = "<i>new paragraph tag</i>";
document.querySelector("body").prepend(newp)
// newp.setAttribute("class", "para1") it overrides the existing class
newp.classList.add("para1")
// newp.classList.remove("para1") it remove the class

let getbtn = document.getElementById("btn");
getbtn.onclick = () => {
    let p = document.createElement("h1")
    p.innerText = "Thank you"
    document.querySelector("div").append(p)
}

let clrbtn = document.getElementById("clrbtn")
let curstatus = "light"
clrbtn.onclick = () => {
    if (curstatus === "light") {
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light")
        curstatus = "dark"
    }
    else {
        document.querySelector("body").classList.add("light")
        document.querySelector("body").classList.remove("dark")
        curstatus = "light"
    }
}

class car {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log("startrd");
    }
    stop() {
        console.log("stopped");
    }
}

let benz = new car("benz");
benz.start();
benz.stop();

//inheritence

class person {
    constructor(name) {
        this.spe = "humans";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class engineer extends person {// extends keyword inherit the properties and methods of the parent class
    constructor(name) {
        super(name);// it invoke the parent constructor
        this.branch = "cse";
    }
    work() {
        super.eat();// we can access the parent mthods by using super keyword
        console.log("solve problems");
    }
}

let engObj = new engineer("anil");

setTimeout(() => {
    console.log("hello");
}, 3000);

function sum(a, b) {
    console.log(a + b);
}
function cal(a, b, fun) {
    fun(a, b);
}
cal(1, 2, sum);

// callback
function getData(dataId, nextId) {
    setTimeout(() => {
        console.log(dataId);
        if (nextId) {
            nextId();
        }
    }, 2000)
}

getData(1, () => {
    getData(2, () => {
        getData(3)
    })
})

// promise

const getpromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("good");
            //resolve("success");
            reject("fail")
        }, 5000)
    })
}

let promise = getpromise();
promise.then((res) => {
    console.log("res", res);
})
promise.catch((err) => {
    console.log("err", err);
})