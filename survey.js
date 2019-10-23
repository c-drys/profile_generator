const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable ', (answer) => {
rl.question('What is an activity you like doing? ', (answer) => {
rl.question('What do you listen to while doing that ', (answer) => {
rl.question('What meal time is your favourite? ', (answer) => {
rl.question('Favourite food at your favourite meal time? ', (answer) => {
rl.question('What is your favourite sport? ', (answer) => {
rl.question('What is your favourite way to waste time? ', (answer) => {
rl.question('What is your superpower? In a few words, tell us what you are amazing at ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.close();
});
});
});
});
});
});
});
});



