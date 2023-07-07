const currencyFirst = document.querySelector("#currencyFirst")
const currencySecond = document.querySelector("#currencySecond")
const count = document.querySelector("#count")
const equal = document.querySelector(".equal")
const summary = document.querySelector(".summary")

update();
function update(){
    fetch(`https://v6.exchangerate-api.com/v6/c9baaab22e1c8f37fbb935b2/latest/${currencyFirst.value}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.conversion_rates[currencySecond.value])
        const birim = data.conversion_rates[currencySecond.value]
        equal.textContent = (count.value*birim).toFixed(2)
        summary.textContent=`1 ${currencyFirst.value} = ${birim} ${currencySecond.value}`
    })

}

currencyFirst.addEventListener("change",update)
currencySecond.addEventListener("change",update);
count.addEventListener("input",update)