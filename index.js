var random1=Math.floor(Math.random()*6+1);


var randomdice="dice"+random1+".jpeg";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice);

var random2=Math.floor(Math.random()*6+1);


var randomdice2="dice"+random2+".jpeg";

document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

if(random1>random2)
{
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
}
else if(random2>random1)
{
    document.querySelector("h1").innerHTML= "Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML= "Draw!";
}