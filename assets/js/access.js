
function calculatePrice() {
    let barrels = Number(document.getElementById("barrels").value);

    let price = 11000;

    let total = barrels * price;

   return `Total sales is ${total} NGN`
}
function displayPrice() {
    let result = calculatePrice();

    document.getElementById("result").innerHTML =
        "Total crude oil price is $" + result;
}