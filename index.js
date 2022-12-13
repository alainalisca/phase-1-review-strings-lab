const currentUser = "Grace Hopper ";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const myString = 'template literal';

const myNumber = 10; 
const myBoolean = false; 

`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!`

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;