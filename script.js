// Create a candy object
function Candy(x, y) {
  this.x = x;
  this.y = y;
  this.element = document.createElement('div');
  this.element.className = 'candy';
}

// Place candies on the board
function placeCandies(count) {
  const board = document.getElementById('candy-board');
  for (let i = 0; i < count; i++) {
    const candy = new Candy(i % 5, Math.floor(i / 5));
    candy.element.style.top = candy.y * 60 + 'px';
    candy.element.style.left = candy.x * 60 + 'px';
    board.appendChild(candy.element);
  }
}

// Check for a match
function checkMatch() {
  const candies = document.getElementsByClassName('candy');
  const matchCount = [];

  for (let i = 0; i < candies.length; i++) {
    if (matchCount[candies[i].style.backgroundColor]) {
      matchCount[candies[i].style.backgroundColor]++;
    } else {
      matchCount[candies[i].style.backgroundColor] = 1;
    }
  }

  for (const color in matchCount) {
    if (matchCount[color] >= 3) {
      alert('You have a match!');
    }
  }
}

// Initialize the game
document.getElementById('check-match').addEventListener('click', checkMatch);
placeCandies(25);
