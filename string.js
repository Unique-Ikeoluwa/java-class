// String Operators and Conditions Practice
// how to check if a String Contains a Word
let sentence = "I am a voiceover artist.";
if (sentence.includes("artist")) {
    console.log("The sentence contains the word 'artist'.");
} else {
    console.log("The word 'artist' is not found in the sentence.");
}

// how to check String Start and End
let jobl = "I really want coldstone"
if (jobl.startsWith("The")) {
    console.log("The sentence starts with 'The'.");
}
if (jobl.endsWith("coldstone")) {
    console.log("The sentence ends with 'coldstone'.");
}

// Trimming Whitespace
let trimm = "   Get out   ";
console.log("Trimmed Text:", trimm.get());

// Replace Text
let sayo= "She is very uncultured"
let kate = sayo.replace("uncultured", "ill mannered");
console.log("Modified Sentence:", kate);

// Using Conditional (Ternary) Operator
let age = 30;
let checked = age >= 18 ? "Allowed" : "Denied";
console.log("Access:", checked);

// Switching Case with String Conditions
let fruit = "kiwi";
switch (fruit) {
    case "kiwi":
        console.log("You chose a kiwi.");
        break;
    case "pawpaw":
        console.log("You chose a pawpaw.");
        break;
    default:
        console.log("Unknown fruit.");
}

// Example 10: Checking for Empty String
let emptyStr = "";
if (!emptyStr) {
    console.log("The string is empty.");
}
