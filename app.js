


const getelement = id => {
    const ele = document.getElementById(id);
    // console.log(ele);
    return ele;
}



const plusBtn = getelement("plus")
const minusBtn = getelement("minus")
const resetBtn = getelement("reset")
const saveBtn = getelement("save")
const clearBtn = getelement("clear")
const countValue = getelement("count");

let counter = localStorage.getItem('counter');
plusBtn.addEventListener("click", () => {
    counter++;
    // console.log(counter);
    const countValue = getelement("count");
    countValue.innerText = counter
});

minusBtn.addEventListener("click", () => {
    counter--;
    // console.log(counter);
    countValue.innerText = counter
});

resetBtn.addEventListener("click", () => {
    counter = 0
    countValue.innerText = counter
});

saveBtn.addEventListener("click", () => {
    localStorage.setItem('counter', counter);
    const count = localStorage.getItem('counter');

    countValue.innerText = count;
});

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("counter");
    const count = localStorage.getItem('counter');
    countValue.innerText = count;
});


const render = () => {
    const count = localStorage.getItem('counter');
    // console.log('default', count)
    countValue.innerText = count;

}


render();
