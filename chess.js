console.log("Welcome to chessgame")
// object of queen
queen = {
    direction: "S",
    position: {
        xo: 4,
        yo: 4
    }
}


console.log("Default position of queen: " + queen.position.xo, queen.position.yo);// Default position



function updatePosition(x, y) {// position update
    queen.position.xo = x;
    queen.position.yo = y;
}



function moveforward(direction) {//one step
    // direction = queen.direction;
    switch (direction) {
        case "S":
            if (queen.position.yo > 0 && queen.position.yo < 8) {
                queen.position.yo = queen.position.yo - 1;

            } else {
                console.log("Out of order move.");
            }
            break;

        case "N":
            if (queen.position.yo >= 0 && queen.position.yo < 7) {
                queen.position.yo = queen.position.yo + 1;

            } else {
                console.log("Out of order move.");
            }
            break;

        case "E":
            if (queen.position.xo >= 0 && queen.position.xo < 7) {
                queen.position.xo = queen.position.xo + 1;

            } else {
                console.log("Out of order move.");
            }
            break;

        case "W":
            if (queen.position.xo > 0 && queen.position.xo < 8) {
                queen.position.xo = queen.position.xo - 1;

            } else {
                console.log("Out of order move.");
            }
            break;

        case "SW":
            if (queen.position.yo > 0 && queen.position.yo < 8) {
                if (queen.position.xo > 0 && queen.position.xo < 8) {
                    let x = queen.position.xo - 1;
                    let y = queen.position.yo - 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of order move.");
            }
            break;

        case "SE":
            if (queen.position.xo >= 0 && queen.position.xo < 7) {
                if (queen.position.yo > 0 && queen.position.yo <= 7) {
                    let x = queen.position.xo + 1;
                    let y = queen.position.yo - 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of order move.");
            }
            break;

        case "NE":
            if (queen.position.xo >= 0 && queen.position.xo < 7) {
                if (queen.position.yo >= 0 && queen.position.yo < 7) {
                    let x = queen.position.xo + 1;
                    let y = queen.position.yo + 1;
                    updatePosition(x, y);
                }

            } else {
                console.log("Out of order move.");
            }
            break;

        case "NW":
            if (queen.position.xo > 0 && queen.position.yo < 7) {
                if (queen.position.xo <= 7 && queen.position.yo >= 0) {
                    let x = queen.position.xo - 1;
                    let y = queen.position.yo + 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of order move.");
            }
            break;
    }
}

// let s = changeDirection("S")
// moveforward(s);



//  changeDirection function
function changeDirection(direction) {
    let dir = direction
    queen.direction = dir;
    return dir;
}


// JumpForward Function 
function jumpForward(direction, Steps) {
    var temp = 0;
    var temp1 = 0;
    switch (direction) {
        case "N":
            temp = queen.position.yo + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.yo = queen.position.yo + Steps;
            } else {
                console.log("Out of order move");
            }
            break;

        case "S":
            temp = queen.position.yo - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.yo = queen.position.yo - Steps;
            } else {
                console.log("Out of order move");
            }
            break;

        case "E":
            temp = queen.position.xo + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.xo = queen.position.xo + Steps;
            } else {
                console.log("Out of order move");
            }
            break;

        case "W":
            temp = queen.position.xo - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.xo = queen.position.xo - Steps;
            } else {
                console.log("Out of order move");
            }
            break;

        case "NE":
            temp = queen.position.yo + Steps;
            temp1 = queen.position.xo + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.yo = queen.position.yo + Steps;
                    queen.position.xo = queen.position.xo + Steps;
                }
            }
            break;

        case "SE":
            temp = queen.position.yo - Steps;
            temp1 = queen.position.xo + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.yo = queen.position.yo - Steps;
                    queen.position.xo = queen.position.xo + Steps;
                }
            }
            break;

        case "NW":
            temp = queen.position.yo + Steps;
            temp1 = queen.position.xo - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.yo = queen.position.yo + Steps;
                    queen.position.xo = queen.position.xo - Steps;
                }
            }
            break;

        case "SW":
            temp = queen.position.yo - Steps;
            temp1 = queen.position.xo - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.yo = queen.position.yo - Steps;
                    queen.position.xo = queen.position.xo - Steps;
                }
            }
            break;

    }
}


//testing>

let north = changeDirection("N");
jumpForward(north,3);
console.log("Queen’s position : "+queen.position.xo,queen.position.yo);

let northeast = changeDirection("NE");
jumpForward(northeast,2)
console.log("Queen’s position : "+queen.position.xo,queen.position.yo);

let northwest = changeDirection("NW");
jumpForward(northwest,2)
console.log("Queen’s position : "+queen.position.xo,queen.position.yo);

let south = changeDirection("S");
jumpForward(south,3)
console.log("Queen’s position : "+queen.position.xo,queen.position.yo);

let southeast = changeDirection("SE");
jumpForward(southeast,1)
console.log("Queen’s position : "+queen.position.xo,queen.position.yo);

let southwest = changeDirection("SW");
jumpForward(southwest,3)
console.log("Queen’s position : "+queen.position.xo,queen.position.yo);

let east = changeDirection("E");
jumpForward(east,2)
console.log("Queen’s position : "+queen.position.xo,queen.position.yo);

let west = changeDirection("W");
jumpForward(west,3)
console.log("Queen’s position : "+queen.position.xo,queen.position.yo);

