// Javascript ES6
const args = process.argv;
let userInput = args[2];

const validateUserInput = require('./utils').validateUserInput;

class SliceChallenge {
  constructor(name) {
    this.name = name || "Slice Code Challenge";
    this.dimensions = "";
    this.drops = "";
    this.direction = "";
  }

  initDrops(userInput) {
    //If the user has input an incorrect co-ordinate to terminal (2 co-ordinate objects required), the console will inform them the have input the wrong information.
    if (!validateUserInput(userInput)) {
      console.log("You have entered the incorrect input for Pizza Deliveries. Please make sure you have entered co-ordinates for drop offs.");
      return;
    }

    this.dimensions = userInput[0];
    this.drops = this.parseDirectionsUserInput(userInput);
  }

  parseDirectionsUserInput(userInput) {
    return userInput
      .slice(userInput.indexOf("(") + 1, -1)
      .split(") (")
      .map(element => {
        return element.split(", ").map(element => Number(element));
      });
  }

  //binds drops object to getDrops function
  getDrops() {
    return this.drops;
  }

  setDirection() {
    const drops = this.drops;
    //Assign co-ordinates for start point (pizzaShop)
    let pizzaShop = [0, 0];
    let direction = "";

    for (let targetDrop of drops) {
      //map coords
      let [startPointX, startPointY] = pizzaShop,
        [targetDropX, targetDropY] = targetDrop;

      // bearing direction
      let XDirection = this.getBearing("x", startPointX, targetDropX),
        YDirection = this.getBearing("y", startPointY, targetDropY);

      // while start point X is not equal to target point X
      while (startPointX !== targetDropX) {
        //concatenate direction and XDirection (+=)
        direction += XDirection;
        //if startPointX is smaller than TargetPointX then increment startPointX
        if (startPointX < targetDropX) startPointX++;
        // else if greater than decrement startPointX
        else startPointX--;
      }

      // while start point Y is not equal to target point Y
      while (startPointY !== targetDropY) {
        //concatenate direction and YDirection (+=)
        direction += YDirection;
        //if startPointY is smaller than TargetPointY then increment startPointY
        if (startPointY < targetDropY) startPointY++;
        // else if greater than decrement startPointY
        else startPointY--;
      }

      //concatenate direction variable with string "D" after differntial between startPoint X Y and TargetPoint X Y determined 
      direction += "D";
      //.slice method will return slected element in targetDrop array as a new array object and apply it to pizza shop variable
      pizzaShop = targetDrop.slice();
    }

    this.direction = direction;
  }

  getDirection() {
    return this.direction;
  }
//getBearing Function with bearing array using Map Contructor with 
  getBearing(axis, start, end) {
    const bearing = new Map([
      ["north", "N"],
      ["south", "S"],
      ["west", "W"],
      ["east", "E"],
      ["drop", "D"]
    ]);

    //drop (assign "D") if pizza has reached end point
    if (start === end) 
        return bearing.get("drop");
        //else assign N, E, W or S
    if (axis === "x")
        return start < end ? bearing.get("east") : bearing.get("west");
        return start < end ? bearing.get("north") : bearing.get("south");
  }

}

const slicePizzaBot = new SliceChallenge();
slicePizzaBot.initDrops(userInput);
slicePizzaBot.setDirection();
console.log(slicePizzaBot.getDirection());

module.exports = { SliceChallenge };
