const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log();

// Task 1: Group players by teams
const players1 = game.players[0];
const players2 = game.players[1];

console.log('Bayern Munich:', players1);
console.log();
console.log('Borrussia Dortmund:', players2);

console.log();

// Task 2: Seperate goal keeper from field players
const [gk, ...fieldPlayers] = players1;
console.log('Goal keeper:', gk);
console.log('Field players:', fieldPlayers);

console.log();

// Task 3: Combine players from both teams
const allPlayers = [...players1, ...players2];
console.log('Combined players:', allPlayers);

console.log();

// Task 4: Include substitutes to Bayern Munich team
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log("Bayern's final list:", players1Final);

console.log();

// Task 5: Store odds in seperate varaibles
const { team1, x: draw, team2 } = game.odds;
console.log('Team 1:', team1);
console.log('Draw:', draw);
console.log('Team 2:', team2);

console.log();

// Task 5: Create printGoals function
const printGoals = function (...players) {
  console.log('Players:', ...players);
  console.log('Goals (total):', players.length);
};

printGoals('Pavard', 'Martinez', 'Alaba', 'Davies');
