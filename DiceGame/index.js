function gamePlay(){
    var ranNum1 =  Math.round(Math.random()*5)+1;
    var ranNum2 =  Math.round(Math.random()*5)+1;

    // images/dice6.png
    var img1 = "images/dice" + ranNum1 + ".png";
    var img2 = "images/dice" + ranNum2 + ".png";

    document.getElementsByClassName("diceImage")[0].src=img1;
    document.getElementsByClassName("diceImage")[1].src=img2;
    
    if (ranNum1 > ranNum2){
        document.getElementsByClassName("refresh")[0].innerHTML = "<i class='fas fa-flag winner'></i> Player 1 Wins!";
    }
    else if (ranNum2 > ranNum1){
        document.getElementsByClassName("refresh")[0].innerHTML = "Player 2 Wins! <i class='fas fa-flag winner'></i>";
    }
    else{
        document.getElementsByClassName("refresh")[0].textContent = "Draw!";
    }
}