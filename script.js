var day = new Date();
var x = day.getDay();
var dayS;

/*if(x == 0)
{
    document.getElementById("data").innerHTML = "Niedziela";
}*/
switch (x) {
    case 0:
        dayS = "Niedziela";
        break;
    case 1:
        dayS = "Poniedziałek";
        break;
    case 2:
        dayS = "Wtorek";
        break;
    case 3:
        dayS = "Środa";
        break;
    case 4:
        dayS = "Czwartek";
        break;
    case 5:
        dayS = "Piątek";
        break;
    case 6:
        dayS = "Sobota";
        break;
    default:
        dayS = "I don't have idea";
        break;
}
document.getElementById("data").innerHTML = dayS;

var tab = ["ogień", "woda", "powietrze", "ziemia"];

for(var i=0; i<tab.length; i++)
{
    document.write(tab[i] + " ");
}

var nick = prompt("Please enter your name");
var token = 0;
var nick2 = nick;

while(token < nick.length)
{
    nick2 = nick2 + "a";
    token++;
}
document.write("<br>" + nick2);

token = 0;
nick2 = nick;
do
{
    nick2 = nick2 + "x";
    token++;
}
while(token < nick.length)
document.write("<br>" + nick2);