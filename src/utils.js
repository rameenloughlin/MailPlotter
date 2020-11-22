const _ = require("lodash");

 const validateUserInput = (userInput) => {
    // Check Basics
    if (
        !userInput ||
        !userInput.length ||
        userInput.indexOf("(") < 0 ||
        userInput.indexOf(")") < 0
    )
        return false;

    // Check Grid
    let dimensions = userInput.slice(0, 4).split("");

    if (!_.isEmpty(dimensions)) {
        dimensions.forEach((gd, index) => {
            if (
                (index === 0 && !Number.isInteger(Number(gd))) ||
                (index === 1 && gd !== "x") ||
                (index === 2 && !Number.isInteger(Number(gd))) ||
                (index === 3 && gd !== " ")
            )
                return false;
        });
    }

    // Validate Co-ordinates
    userInput = userInput.slice(4);
    if (userInput[0] !== "(" || userInput[userInput.length - 1] !== ")") return false;

    let openIndex = 0;
    for (let i = 1; i < userInput.length; i++) {
        if (
            (i === openIndex + 1 && !Number.isInteger(Number(userInput[i]))) ||
            (i === openIndex + 2 && userInput[i] !== ",") ||
            (i === openIndex + 3 && userInput[i] !== " ") ||
            (i === openIndex + 4 && !Number.isInteger(Number(userInput[i]))) ||
            (i === openIndex + 5 && userInput[i] !== ")") ||
            (i === openIndex + 6 && userInput[i] !== " ")
        )
            return false;

        if (userInput[i] === "(") {
            openIndex = i;
        }
    }

    return true;

}


module.exports = { validateUserInput }
