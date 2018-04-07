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
