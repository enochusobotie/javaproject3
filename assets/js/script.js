
function calculateTotal() {
    let bags = Number(document.getElementById("bags").value);
    let quantity = Number(document.getElementById("quantity").value);

    return bags * quantity;
}

function evaluateCement() {
    let total = calculateTotal();

    switch (true) {
        case (total == 0):
            document.getElementById("result").innerHTML = "Please enter valid values";
            break;

        case (total < 50):
            document.getElementById("result").innerHTML = "Small cement quantity";
            break;

        case (total >= 50 && total <= 250):
            document.getElementById("result").innerHTML = "Medium cement quantity";
            break;

        case (total > 250):
            document.getElementById("result").innerHTML = "Large cement quantity";
            break;

        default:
            document.getElementById("result").innerHTML = "Invalid input";
    }
}

// Calling the function
calculateTotal();
evaluateCement();