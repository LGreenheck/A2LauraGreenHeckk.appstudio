//used variables to hold the data (strings) of the first name, state, and temperature.
let firstName = prompt("What is your first name?")
let state = prompt("What state do you live in (2 letters, capitalized NE or FL)?")
let temp = prompt("What is the current outside temperature in Fahrenheit?")
let messages = ["wear a warm coat, hat, scarf, and gloves.", "wear a warm coat, but you won't need a hat, scarf, or gloves.", "wear your warmest coat, a warm hat, scarf, and warm gloves.", "wear a warm coat, hat, and gloves. Maybe a scarf too."]
//These messages  output based on the state and temperature received from the user using if/else statements. They also reference the array "messages" above using the indexes. There are 4 different possible outcomes:
if (state === 'NE' && temp < 32)
    console.log(`${firstName}, ${messages[0]}`)
else if (state === 'NE' && temp >= 32 && temp <= 50)
    console.log(`${firstName}, ${messages[1]}`)
else if (state === 'FL' && temp >= 32 && temp <= 50)
    console.log(`${firstName}, ${messages[2]}`)
else if (state === 'FL' && temp >= 50 && temp <= 70)
    console.log(`${firstName}, ${messages[3]}`)
else
    console.log(`Unable to give recommendation.`)
