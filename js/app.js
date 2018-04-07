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

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);
const gameDeck = cardDeck.concat(cardDeck);

gameDeck.sort(function () {
    return 0.5 - Math.random();
});

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
