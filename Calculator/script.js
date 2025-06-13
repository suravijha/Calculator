let input = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

let string = "";
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btn = e.target.innerText;
        if (btn === "AC") {
            string = "";
            input.value = string;
        } else if (btn === "DE") {
            string = string.slice(0, -1);
            input.value = string;
        } else if (btn === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else {
            string += btn;
            input.value = string;
        }
    });
});
