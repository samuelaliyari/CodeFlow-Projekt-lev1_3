
let counter = document.body.querySelector("p");

function math(numberOne) {
    let result = Number(counter.textContent) + Number(numberOne);
    counter.textContent = result
    console.log(result)
}


function multi() {
    let result = Number(counter.textContent) * 2
    counter.textContent = result
}