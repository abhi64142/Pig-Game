let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let currentScore0El = document.getElementById("current--0");
let currentScore1El = document.getElementById("current--1");
let scores, currentScore, playing, activeplayer;

let init = function () {
  currentScore0El.textContent =  0;
  currentScore1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  scores = [0, 0];
  playing = true;
  currentScore = 0;
  activeplayer = 0;

  diceEl.classList.add("hidden");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

let switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer == 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

init();

// FOr rolling the dice----------

btnRoll.addEventListener("click", function () {
  if (playing) {
    // for random rolling dice
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    if (dice != 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
      // console.log(currentScore);
      //
    } else {
      // Switching the Player---------
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] = scores[activeplayer] + currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    // if score=100 ;
    if (scores[activeplayer] >= 100) {
      //    finish game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
    } else {
      // if not ; switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
