const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  //
//console.log(game)
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
Solve Exercise 3 here:
*/
game.Difficulty = "Med"
console.log('Exercise 3 Result:', game)
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:
*/
game.party.push(pokemon[3])
console.log('Exercise 4 Result:', game.party)
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
Solve Exercise 5 here:
*/
// Add chosen Pokémon to the party using the push method
game.party.push(pokemon[24], pokemon[143], pokemon[149]);
console.log('Exercise 5 Result:', game.party)
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
Solve Exercise 6 here:
*/
for (gym of game.gyms) {
    if (gym.difficulty < 3) {
        gym.completed = "True"
    } 
}
console.log('Exercise 6 Result:', game.gyms);
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?
Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu
More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 
Solve Exercise 7 here:
*/

// Define the evolution mapping
const evolutions = {
    1: 2, // Bulbasaur -> Ivysaur
    4: 5, // Charmander -> Charmeleon
    7: 8, // Squirtle -> Wartortle
    25: 26 // Pikachu -> Raichu
  };

  // Iterate through the party and replace starters with their evolved forms
  for (let i = 0; i < game.party.length; i++) {
    let partyPokemon = game.party[i];
    if (partyPokemon.starter) {
      let evolvedPokemonNumber = evolutions[partyPokemon.number];
      let evolvedPokemon = pokemon.find(p => p.number === evolvedPokemonNumber);
      game.party.splice(i, 1, evolvedPokemon);
    }
  }

  console.log('Exercise 7 Result:', game.party);
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.
Solve Exercise 8 here:
*/
const pokeNames = [];
// Loop through each Pokémon in the party and add its name to the pokeNames array
for (const party of game.party) {
    pokeNames.push(party.name);
}

console.log('Exercise 8 Result:', pokeNames)
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.
Solve Exercise 9 here:
*/
const theStarters = []
//poke is just a variable name choice for each Pokémon object in the loop.
for (const poke of pokemon) {
    if (poke.starter === true) {
        theStarters.push(poke.name)
    }

}
console.log('Exercise 9 Result:',theStarters)
/*
Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything
After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Solve Exercise 10 here:
*/
// Add the catchPokemon method to the existing game object
game.catchPokemon = function(pokemonObj) {
  // Add the passed Pokemon object to the game's party array
  this.party.push(pokemonObj);
};

// Choose a Pokemon to catch (for demonstration, we choose the second Pokemon from the Pokemon array)
const catchAPokemon = pokemon[1];

// Call the catchPokemon function and pass the chosen Pokemon object as an argument
game.catchPokemon(catchAPokemon);

// Output the game's party array to the console
console.log('Exercise 10 Result:', game.party);


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?
Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.
Solve Exercise 11 here:
*/

// Define the modified catchPokemon method
game.catchPokemon = function(pokemonObj) {
  // Add the passed Pokemon object to the game's party array
  this.party.push(pokemonObj);

  // Find the index of the pokeball item in the game's items array
  const pokeballIndex = this.items.findIndex(item => item.name === "pokeball");

  // If pokeball is found in the items array, decrease its quantity by 1
  if (pokeballIndex !== -1) {
      this.items[pokeballIndex].quantity--;
  }
};

// Call the modified catchPokemon method and pass in a Pokemon object to catch it
const pokemonToCatch = pokemon[2]; // Choose a Pokemon object from the `pokemon` data
game.catchPokemon(pokemonToCatch);

// Log the updated game items array to confirm that the pokeball quantity is being decremented
console.log('Exercise 11 Result:', game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).
Solve Exercise 12 here:
*/

// Iterate through the gyms array
for (let gym of game.gyms) {
    // Check if the difficulty of the gym is below 6
    if (gym.difficulty < 6) {
        // If the difficulty is below 6, mark the gym as completed by setting its completed property to true
        gym.completed = true;
    }
}

// Log the updated gyms array to confirm completion
console.log('Exercise 12 Result:', game.gyms);
/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.
This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.
For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.
Solve Exercise 13 here:
*/
// Add the gymStatus method to the existing game object
game.gymStatus = function() {
  // Initialize the tally object
  const gymTally = { completed: 0, incomplete: 0 };

  // Iterate through the gyms array
  for (let gym of this.gyms) {
      // Update the tally based on the completed property
      if (gym.completed) {
          gymTally.completed++;
      } else {
          gymTally.incomplete++;
      }
  }

  // Log the final tally
  console.log('Exercise 13 Result:', gymTally);
};

// Call the gymStatus method to see the tally
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.
This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.
Solve Exercise 14 here:
*/
// Add the partyCount method to the existing game object
game.partyCount = function() {
  // Return the length of the party array
  return this.party.length;
};
// Call the partyCount method to get the number of Pokemon in the party
const numberOfPokemonInParty = game.partyCount();
console.log('Exercise 14 Result:', numberOfPokemonInParty);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).
Solve Exercise 15 here:
*/
for (let gym of game.gyms) {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
}

console.log('Exercise 15 Result:', game.gyms);
/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.
Solve Exercise 16 here:
*/
// Log the entire game object to the console
console.log('Exercise 16 Result:', game);