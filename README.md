# Memory Game

This game will put your memory to the test.

<hr>

![Memory Game](img/memory.png)

<hr>

## Goal
The goal of the game is to match all the cards in as few moves as possible.

## Try it

[https://jprime81.github.io/memory-game/](https://jprime81.github.io/memory-game/)

## Mechanics

- Click a card to reveal what's behind it

- Click another card to match what has been already revealed

- When the cards are matched, both will disappear

- Finish the game by matching all the remaining cards

## How this game was built

This game was created using HTML, JavaScript, and CSS.

- card deck is initialized as an array, then the cards are randomized using sort() and Math.random() methods

- clicks are tracked using an event listener, which then fires up the move counter

- the move counter fires up the timer once the first move (two clicks) is registered

- the star rating fires up when the allowed unmatched pair (move) threshold is met

- when all of the cards are matched, a pop-up modal window is shown revealing the number of moves made, the time spent, and the star rating

## Dependencies

The main (3) components of this game are the following:

- Index file contains the default HTMl file for launching the game

    - `index.hmtl`

- JavaScript file controls the game logic

    - `js/app.js`

- CSS file defines page format and styling

    - `css/app.css`

Besides HTML, JS, and CSS, this project also requires the following:

- Google Fonts for the font styling

    - Open Sans `<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">`
    - Fira Sans `<link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet">`

- Bootstrap for responsive design

    - 3.3.7 (minified) `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`

- Fontawesome for the star icon

    - 4.6.1 (minified) `<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet">`

- Flaticon for card deck icons

    - Spring `https://www.flaticon.com/packs/spring-31`

    - `img/*.png`
