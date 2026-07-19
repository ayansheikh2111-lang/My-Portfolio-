class Calculator {

    constructor(previousElement, currentElement) {

        this.previousElement =
            previousElement;

        this.currentElement =
            currentElement;

        this.clear();

    }


    clear() {

        this.current = "";

        this.previous = "";

        this.operation = undefined;

        this.updateDisplay();

    }


    delete() {

        this.current =
            this.current.toString()
            .slice(0, -1);

        this.updateDisplay();

    }


    appendNumber(number) {

        if (
            number === "." &&
            this.current.includes(".")
        ) {
            return;
        }

        this.current =
            this.current.toString()
            + number.toString();

        this.updateDisplay();

    }


    chooseOperation(operation) {

        if (
            this.current === "" &&
            this.previous === ""
        ) {
            return;
        }

        if (this.current !== "") {

            if (this.previous !== "") {

                this.compute();

            } else {

                this.previous =
                    this.current;

            }

        }

        this.operation =
            operation;

        this.current = "";

        this.updateDisplay();

    }


    compute() {

        const previous =
            parseFloat(this.previous);

        const current =
            parseFloat(this.current);

        if (
            isNaN(previous) ||
            isNaN(current)
        ) {
            return;
        }

        let result;

        switch (this.operation) {

            case "+":

                result =
                    previous + current;

                break;


            case "-":

                result =
                    previous - current;

                break;


            case "×":

                result =
                    previous * current;

                break;


            case "÷":

                if (current === 0) {

                    alert(
                        "Cannot divide by zero."
                    );

                    return;

                }

                result =
                    previous / current;

                break;


            default:

                return;

        }

        this.current = result;

        this.previous = "";

        this.operation = undefined;

        this.updateDisplay();

    }


    updateDisplay() {

        this.currentElement.innerText =
            this.current || "0";

        this.previousElement.innerText =
            this.operation
            ? `${this.previous} ${this.operation}`
            : "";

    }

}


const previousElement =
    document.getElementById(
        "previous"
    );


const currentElement =
    document.getElementById(
        "current"
    );


const calculator =
    new Calculator(
        previousElement,
        currentElement
    );


document
    .querySelectorAll(
        "[data-number]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                calculator.appendNumber(
                    button.dataset.number
                );

            }

        );

    });


document
    .querySelectorAll(
        "[data-operation]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                calculator.chooseOperation(
                    button.dataset.operation
                );

            }

        );

    });


document
    .querySelector(
        '[data-action="equals"]'
    )
    .addEventListener(
        "click",
        () => {

            calculator.compute();

        }
    );


document
    .querySelector(
        '[data-action="clear"]'
    )
    .addEventListener(
        "click",
        () => {

            calculator.clear();

        }
    );


document
    .querySelector(
        '[data-action="delete"]'
    )
    .addEventListener(
        "click",
        () => {

            calculator.delete();

        }
    );