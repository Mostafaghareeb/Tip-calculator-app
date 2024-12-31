let coastInp = document.querySelector(".coast-inp");
let peopleInp = document.querySelector(".people-inp");
let tipBtns = document.querySelectorAll(".tip-btns button");
let tipAmount = document.querySelector("#tip-amount");
let totalTip = document.querySelector("#total-tip");
let customBtn = document.querySelector(".custom-btn");
let resetBtn = document.querySelector(".reset");

let mainAmount = tipAmount.innerHTML;

tipBtns.forEach((e) => {
    e.onclick = function () {
        if (coastInp.value && peopleInp.value > 0) {
            let amount = (coastInp.value * e.value) / peopleInp.value;
            tipAmount.innerHTML = `$${amount.toFixed(2)}`;
            
            let total = (Number(coastInp.value) + (coastInp.value * e.value)) / peopleInp.value;
            totalTip.innerHTML = `$${total.toFixed(2)}`
            reset();
        }
    }
})

customBtn.onblur = function () {
    if (customBtn.value !== "") {
        customTip();
        reset();
    }
}


function reset() {
    resetBtn.classList.add("active");
    resetBtn.onclick = function () {
        if (tipAmount.innerHTML !== mainAmount) {
            tipAmount.innerHTML = mainAmount;
            totalTip.innerHTML = mainAmount;
            coastInp.value = "";
            peopleInp.value = "";
            customBtn.value = "";
            setTimeout(() => {
                resetBtn.classList.remove("active"); 
            }, 250);
        };
    };
};

function customTip() {
    let customValue = customBtn.value / 100;

    amount = (coastInp.value * customValue) / peopleInp.value
    tipAmount.innerHTML = `$${amount.toFixed(2)}`

    let total = (Number(coastInp.value) + (coastInp.value * customValue)) / peopleInp.value;
    totalTip.innerHTML = `$${total.toFixed(2)}`
}


