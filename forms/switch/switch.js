//Used variables to hold data (strings) of the first name, state, and temperature (added the number 2 to differentiate it from if/else)
let firstName2 = prompt("What is your first name?")
let state2 = prompt("What state do you live in (2 letters, capitalized NE or FL)?")
let temp2 = prompt("What is the current outside temperature in Fahrenheit?")
let messages2 = ["wear a warm coat, hat, scarf, and gloves.", "wear a warm coat, but you won't need a hat, scarf, or gloves.", "wear your warmest coat, a warm hat, scarf, and warm gloves.", "wear a warm coat, hat, and gloves. Maybe a scarf too."]
//These messages output based on the state and temperature received from the user using switch statements. They also reference the array "messages" created above using the index positions
switch (true) {
case (state2 == "NE") && (temp2 < 32):
    console.log(`${firstName2}, ${messages[0]}`)
    break
case (state2 == "NE") && (temp2 >= 32) && (temp2 <= 50):
    console.log(`${firstName2}, ${messages[1]}`)
    break
case (state2 == "FL") && (temp2 >= 32) && (temp2 <= 50):
    console.log(`${firstName2}, ${messages[2]}`)
    break
case (state2 == "FL") && (temp2 >= 50) && (temp2 <= 70):
    console.log(`${firstName2}, ${messages[3]}`)
    break
default:
    console.log(`Unable to give recommendation.`)
    break
}