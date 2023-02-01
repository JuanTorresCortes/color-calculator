const prompt = require('prompt-sync')({sigint: true});

let question = prompt("do you want to combine colors? or deconstruct colors? enter (c) for combine or (d) for deconstruct: ");
//console.log(`User entered ${question}`);

if(question === "c"){
    let color1 = prompt("choose 2 colors from (red), (blue), or (Yellow), (your first color will be) =: ")
    let color2 = prompt("choose a 2nd color remember to only input (red), (blue) or (Yellow), (your second color) =: ")
    if(color1 === 'red' && color2 === 'blue' || color2 === 'red' && color1 === 'blue'){
        console.log("if you combine red and blue you get purple 🟣")
    }else if(color1 === 'red' && color2 === 'yellow' || color2 === 'red' && color1 === 'yellow'){
        console.log("if you combine red and yellow you get orange 🟠")
    }else if(color1 === 'blue' && color2 === 'yellow' || color2 === 'blue' && color1 === 'yellow'){
        console.log("if you combine blue and yellow you get green 🟢")
    }else{console.log("🚫 Error not a valid color combo 🚫")}
}else if(question === "d"){
    let color = prompt("Ok lets deconstruct a color choose a color (Purple), (Orange) or (Green) : = ")
    console.log(color);
    if(color === 'purple'){
        console.log("When you deconstruct purple 🟣 you get red 🔴 and blue 🔵")
    }else if(color === 'orange'){
        console.log("When you deconstruct orange 🟠 you get red 🔴 and yellow 🟡")
    }else if(color === 'green'){
        console.log("When you deconstruct green 🟢 you get blue 🔵 and yellow 🟡")
    }else{console.log("🚫 Error not a valid color 🚫")}
}else{console.log("🚫 Not a valid input 🚫")}
