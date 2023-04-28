'use strict';

// Challenge I
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
  scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log();

// Task 1: Group players by teams
const [players1, players2] = game.players;

console.log(`${game.team1}: ${players1}`);
console.log();
console.log(`${game.team2}: ${players2}`);

console.log();

// Task 2: Seperate goal keeper from field players
const [gk, ...fieldPlayers] = players1;
console.log('Goal keeper:', gk);
console.log('Field players:', fieldPlayers);

console.log();

// Task 3: Combine players from both teams
const allPlayers = [...players1, ...players2];
console.log('All players:', allPlayers);

console.log();

// Task 4: Include substitutes to Bayern Munich team
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(`${game.team1}'s overall list: ${players1Final}`);

console.log();

// Task 5: Store odds in seperate varaibles
// Method 1
// const { team1, x: draw, team2 } = game.odds;

// Method 2
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log('Team 1:', team1);
console.log('Draw:', draw);
console.log('Team 2:', team2);

console.log();

// Task 6: Create printGoals function
const printGoals = (...players) =>
  console.log(`${players} scored ${players.length} goals in total.`);

printGoals('Pavard', 'Martinez', 'Alaba', 'Davies');

console.log();

printGoals(...game.scored);
console.log();

// Task 7: Print likely winner
team1 < team2 && console.log('Team 1 is more likely to win.');
team2 < team1 && console.log('Team 2 is more likely to win.');
console.log();

// Challenge 2
// Part 1
// For players who scored goals, print player name and number of goals each scored
for (const [index, player] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${player}.`);

console.log();

// Compute and print averge odds
let totalOdds = 0;
const odds = Object.values(game.odds);

for (const odd of odds) totalOdds += odd;

const averageOdds = totalOdds / odds.length;
console.log('Average odds:', averageOdds.toFixed(2));

console.log();

// Print odds
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

console.log();

// Create scorers object
const scorers = {};

for (const scorer of game.scored) {
  scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
}
console.log(scorers);

console.log();

// Challenge 3
// Given
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Part 1 - Create events array
const events = [...new Set(gameEvents.values())];
console.log(events);
console.log();

// Part 2 - Remove event at minute 64
gameEvents.delete(64);
console.log(gameEvents);
console.log();

// Part 3 - Create events log message
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);
console.log();
