// Game logic is inspired from this blog post: https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

// Initialize card deck as array object
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

// Assign 'id' DOM selector to a variable
const game = document.getElementById('game');

// Assign 'section' createElement method to a variable
const grid = document.createElement('section');

// Use setAttribute method to assign grid as class to section
grid.setAttribute('class', 'grid');

// Use appenChild method to create the section element inside the game div
game.appendChild(grid);

// Duplicate card deck using concat method then assign as gameDeck variable
const gameDeck = cardDeck.concat(cardDeck);

// @description shuffles game deck array
// @returns shuffled game deck array
gameDeck.sort(function () {
    return 0.5 - Math.random();
});

// @description Loop over the gameDeck array object, create DOM elements, and assign dataset and class to the objects inside
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
        setTimeout(gameOver, 1000);
    }

}

// Initialize attemps values, previous clicked card (target), delay time in milliseconds
let firstAttempt = '';
let secondAttempt = '';
let countAttempt = 0;
let previousTarget = null;

// @description reset attemps is called when picked cards do not match.
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

// Initialize move value
let moves = 0;

// Assign querySelectors for count, stars
let counter = document.querySelector('.moves');
let stars = document.querySelectorAll(".fa-star");

// @description uses the setTimeout method to increment time per second
let timer = function () {
    time = setTimeout(countTimer, 1000);
}

// @description uses the clearTimeout method to stop time
let stopTimer = function () {
    clearTimeout(time);
}

// @description counts the moves or clicks by pairs, stats timer function, then applies star rating logic
const moveCounter = function () {

    moves++;
    counter.innerHTML = moves;

    if (moves === 1) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        timer();
    }

    if (moves > 16 && moves < 25) {
        for (let i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.display = "none";
                console.log('substract star');
            }
        }
    } else if (moves > 27) {
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

// Assign 'h3' DOM selector to a variable
const h3 = document.getElementsByTagName('h3')[0];

// @description increments the seconds, minutes, and hours, and then prints text content to the h3 element in realtime
let countTimer = function () {

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

// Assign 'popup-modal' DOM selector to a variable
let modal = document.getElementById("popup-modal");

// @description fires up when match pairs reach 8 (as there are only 16 cards), shows hidden popup-modal, and prints moves made, actual time, and star rating
let gameOver = function () {

    modal.classList.add("show");

    let totalRating = document.querySelector(".stars").innerHTML;

    document.getElementById("total-moves").innerHTML = moves;
    document.getElementById("total-hours").innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00");
    document.getElementById("total-minutes").innerHTML = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00");
    document.getElementById("total-seconds").innerHTML = (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00");
    document.getElementById("total-rating").innerHTML = totalRating;

}

// @description reloads the page when called
function resetGame() {
    location.reload(false);
}