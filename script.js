console.log("Calcualtor made by Rajababu Shah")
document.getElementById("answer").readOnly = true;

let screen = document.getElementById('answer');
let buttons = document.querySelectorAll('button');

let screenValue = "";

for (item of buttons) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;
        if (buttonText == "X") {
            buttonText = "*";
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        } else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "=") {
            screen.value = eval(screenValue);
        } else {
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        }
    });
}