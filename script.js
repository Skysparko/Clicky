let count = 0
// let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("increment-btn")

function increment() {
    count += 1
    countEl.innerText = count
}

// function save() {
//     let countStr = count + " - "
//     // saveEl.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }

console.log("Let's count people on the subway!")
