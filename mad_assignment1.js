// String Methods
let str = "Gaming is fun!";
console.log("Original String:", str);

// Applying string methods
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0-6):", str.substring(0, 6));
console.log("Replace 'fun' with 'awesome':", str.replace("fun", "awesome"));
console.log("Split string by space:", str.split(" "));

// Array Methods (Games List)
let games = ["GTA 5", "God of War", "Valorant", "PUBG", "Call of Duty"];
console.log("Original Array:", games);

// Applying array methods
games.push("Minecraft"); // Add to the end
console.log("After push:", games);

games.pop(); // Remove last element
console.log("After pop:", games);

games.shift(); // Remove first element
console.log("After shift:", games);

games.unshift("Fortnite"); // Add to the beginning
console.log("After unshift:", games);

console.log("Array joined as string:", games.join(", "));
console.log("Reversed array:", games.reverse());

games.sort(); // Sort alphabetically
console.log("Sorted array:", games);
