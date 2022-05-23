function randomNum()
{
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    return randomNumber;
}
var random1 = randomNum();
var random2 = randomNum();
class Secret {};
var magicTrick = new Secret();

//console.log(random1 + " " + random2);

var mathHelp =
{
    add()
    {
        return random1 + random2;
    },
    subtract()
    {
        return random1 - random2;
    },
    multiply()
    {
        return random1 * random2;
    },
    divide()
    {
        return random1 / random2;
    }
}
var choice = prompt("You have this numbers: " + random1 + " and " + random2 + " Chose what do you do with this (add, subtract, multiply or divide).", "add");

if (choice == "add")
{
    alert(mathHelp.add());
}
else if (choice == "subtract")
{
    alert(mathHelp.subtract());
}
else if (choice == "multiply")
{
    alert(mathHelp.multiply());
}
else if (choice == "divide")
{
    alert(mathHelp.divide());
}
else if (choice == "dick")
{
    alert(magicTrick.magic());
}
else
{
    alert("You type wrong comand");
}