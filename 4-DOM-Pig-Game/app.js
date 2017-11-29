/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. Display the result
        var diceDOM = document.querySelector('.dice'); // variable stores the selection
        diceDOM.style.display = 'block'; // set the display style
        diceDOM.src = 'dice-' + dice + '.png';
        // 3. Update the round score IF the rolled number was not a 1
        if (dice !== 1) {
            // accumulate score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
}); // not btn() because the function is not call by us, it is called by another function, which is a callback function


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if play won the game
        if (scores[activePlayer] >= 20) { // should be 100, 20 just for easy testing
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0'; // also need to change the display
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none'; // make dice disapper when it is the turn of the new player
}

document.querySelector('.btn-new').addEventListener('click', init); // not init(), pass the function to the event listener, if init() it will be called immediately, but we only want it to be called when the button is clicked

function init() {
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; // can be used to access current player's score
    //dice = Math.floor(Math.random() * 6) + 1;
    
    /* to change the CSS of an element*/ // querySelector is one way to select element, there are more ways to select elements
    document.querySelector('.dice').style.display = 'none'; // . for selecting classes // makes dice invisible

    document.getElementById('score-0').textContent = '0'; // another way to select elements, faster than querySelector
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

///* to set or get text content of an element */
//document.querySelector('#current-' + activePlayer).textContent = dice; // used as a setter
//// id="current-0"  This is one way to change the content.
//// # for selecting ids
////document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // do not use .textContent here, it will display the code as the content
//var x = document.querySelector('#score-0').textContent; // used as a getter





