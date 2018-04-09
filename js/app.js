// Initialize an array object as card deck
const cardDeck = [
     {
         'name': 'bear',
         'img': 'img/bear.png',
     },
     {
         'name': 'bird',
         'img': 'img/bird.png',
     },
     {
         'name': 'chick',
         'img': 'img/chick.png',
     },
     {
         'name': 'deer',
         'img': 'img/deer.png',
     },
     {
         'name': 'flamingo',
         'img': 'img/flamingo.png',
     },
     {
         'name': 'flower',
         'img': 'img/flower.png',
     },
     {
         'name': 'fox',
         'img': 'img/fox.png',
     },
     {
         'name': 'mushroom',
         'img': 'img/mushroom.png',
     },
 ];

// Assign select DOM methods to variables and create DOM element and attributes
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// Duplicate card deck and assign as gameDeck variable
const gameDeck = cardDeck.concat(cardDeck);

// @description shuffles game deck array
// @returns shuffled game deck array
gameDeck.sort(function () {
    return 0.5 - Math.random();
});

// Loop over the gameDeck array object, create DOM elements, and assign dataset and class to the objects inside
gameDeck.forEach(function (item) {

    const name = item.name;
    const img = item.img;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

// Initialize matchPairs
let matchPairs = 0;

// @description match is called when picked cards match, then increments the value of matchPairs until actual number of pairs is reached
const match = function () {

    const picked = document.querySelectorAll('.picked');

    picked.forEach(function (card) {
        card.classList.add('match');
    });

    matchPairs++;
    console.log('match:' + matchPairs);

    if (matchPairs === 8) {
        stopTimer();
        console.log('Game over');
        console.log('Total moves: ' + moves);
        console.log('Total time: ' + hours + ' : ' + minutes + ' : ' + seconds);
    }

}

// Initialize attemps values, previous clicked card (target), delay time in milliseconds
let firstAttempt = '';
let secondAttempt = '';
let countAttempt = 0;
let previousTarget = null;

// @description rest attemps is called when picked cards do not match.
const resetAttempts = function () {

    firstAttempt = '';
    secondAttempt = '';
    countAttempt = 0;
    previousTarget = null;

    var picked = document.querySelectorAll('.picked');

    picked.forEach(function (card) {
        card.classList.remove('picked');
    });

}

let moves = 0;
let counter = document.querySelector('.moves');
const stars = document.querySelectorAll(".fa-star");
let starsList = document.querySelectorAll(".stars li");

const moveCounter = function () {

    moves++;
    counter.innerHTML = moves;

    if (moves === 1) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        timer();
    }

    if (moves > 14 && moves < 20) {
        for (let i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.display = "none";
                console.log('substract star');
            }
        }
    } else if (moves > 21) {
        for (let i = 0; i < 3; i++) {
            if (i > 0) {
                stars[i].style.display = "none";
                console.log('substract star');
            }
        }
    }

    console.log(moves);

}

// @description click function listens for picked cards, then increments attempt values
grid.addEventListener('click', function (event) {

    const clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('picked')) {
        return;
    }

    if (countAttempt < 2) {

        countAttempt++;

        if (countAttempt === 1) {
            firstAttempt = clicked.parentNode.dataset.name;
            console.log(firstAttempt);
            clicked.parentNode.classList.add('picked');

        } else {
            secondAttempt = clicked.parentNode.dataset.name;
            console.log(secondAttempt);
            clicked.parentNode.classList.add('picked');
        }

        if (firstAttempt && secondAttempt) {
            if (firstAttempt === secondAttempt) {
                setTimeout(match, 750);
                moveCounter();
            }
            setTimeout(resetAttempts, 750);
            moveCounter();
        }

        previousTarget = clicked;

    }

});

const h3 = document.getElementsByTagName('h3')[0];
const start = document.getElementById('start');
let seconds = 0;
let minutes = 0;
let hours = 0;
let time;

function countTimer() {

    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h3.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();

}

let timer = function () {
    time = setTimeout(countTimer, 1000);
}

let stopTimer = function () {
    clearTimeout(time);
}

let clearTimer = function () {
    h3.textContent = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
}


// @description reloads the page when called
function resetGame() {
    location.reload(false);
}

