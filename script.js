
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    /* using the value property will return the attributes value. 
    In this case it will be the ID targeted */
    const billAmount = document.getElementById('billAmount').value
    const tipPercent = document.getElementById('tipPercent').value
    /* billAmount * (tipPercent / 100) is the formula used to calculate the tip amount*/
    const tipAmount = document.getElementById('tipAmount').value = billAmount * (tipPercent / 100)
    /* the reason parseFloat will be used is because when adding the bill amount to 
    tip amount it won't attach the tip Amount to bill total. With parseFloat 
    we want it to be an actual number not a string so we can use it to do math*/
    const billTotal = document.getElementById('billTotal').value = parseFloat(billAmount) + parseFloat(tipAmount)
})