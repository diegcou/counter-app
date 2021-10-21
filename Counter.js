let count = 0
let countNumber = document.getElementById("count-number")

function increment() {
    count = count + 1
    countNumber.innerText = count
}

function decrement() {
    count = count - 1
    countNumber.innerText = count
}
