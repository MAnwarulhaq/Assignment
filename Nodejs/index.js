//Declare a variable called “age” and assign it a value of 25. Convert the value of age to a string data type and store it in a new variable called “ageAsString”.
var age=25
ageAsString=age.toString();
console.log(ageAsString);


//Create a program that prompts the user to enter a number and then checks whether that number is even or odd. Display the result to the user using an alert box.
var input=12
if(input%2==0)
{
    console.log("This is even number");

}
else
{
    console.log("this is not even number");
}

//Declare a variable called “temperature” and assign it a value of 72. Convert the temperature to Celsius and store the result in a new variable called “celsius”. Display the value of celsius to the console.
var temperature=72;
var celsius=(temperature-32)*(5/9);
console.log(celsius);

//Create a program that asks the user to enter their name and age. If the user’s age is greater than or equal to 18, display a message to the console that says “Welcome [name], you are an adult”. If the user’s age is less than 18, display a message that says “Sorry [name], you are not yet an adult”.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is your age? ', (age) => {
    if (age >= 18) {
      console.log(`Welcome ${name}, you are an adult.`);
    } else {
      console.log(`Sorry ${name}, you are not yet an adult.`);
    }
    rl.close();
  });
});
//Declare a variable called “isRaining” and assign it a value of true. Using an if...else statement, display a message to the console that says “Bring an umbrella” if it is raining, and “Leave the umbrella at home” if it is not raining.
const isRaining = true;

if (isRaining) {
  console.log('Bring an umbrella');
} else {
  console.log('Leave the umbrella at home');
}