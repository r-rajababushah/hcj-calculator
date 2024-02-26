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
            try {
                screen.value = eval(screenValue);
            } catch (err) {
                screen.value = "Error! Please Type Numbers and Operators Correctly";
                screen.style.fontSize = '17px';
                setTimeout(() => location.reload(), 4000);
            }
        } else {
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        }
    });
}