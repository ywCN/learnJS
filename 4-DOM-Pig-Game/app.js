/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;

/* to set or get text content of an element */
document.querySelector('#current-' + activePlayer).textContent = dice; // used as a setter
// id="current-0"  This is one way to change the content.
// # for selecting ids
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // do not use .textContent here, it will display the code as the content

console.log(document.querySelector('#score-0').textContent); // used as a getter

/* to change the CSS of an element*/
document.querySelector('.dice').style.display = 'none'; // . for selecting classes // makes dice invisible














