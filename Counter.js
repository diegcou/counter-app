let count = 0
let countNumber = document.getElementById("count-number")
let saveNumber = document.getElementById("last-count")

function increment() {
    count = count + 1
    countNumber.innerText = count
}

function decrement() {
    count = count - 1
    countNumber.innerText = count
}

function reset() {
    count = 0
    countNumber.innerText = 0
}

function save() {
    saveNumber.innerText = count
    count = 0
    countNumber.innerText = 0
}

function resetall() {
    countNumber.innerText = 0
    saveNumber.innerText = 0
    count = 0
}