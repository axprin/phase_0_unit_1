// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Andy Principe
//  2. Matt Hein


// 1. "YOU SIGNED... WHO?!"

var TomHanks = {
  name: "Tom Hanks",
  age: 55,
  quote: "WILSON!"
};

var JenniferLawrence = {
	name: "Jennifer Lawrence",
	age: 23,
	quote: "Peeta!"
};

// 2. "Here they Come!"

var AdamSandler = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?"
};

var KristenBell = {
	name: "Kristen Bell",
	age: 33, 
	quote: "Do you wanna build a snowman?"
};

var JimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "So you're telling me there's a chance? YEAH!"
};

// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

function client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 4. "SHOW 'EM OFF!"

var clients = [];
function client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    clients.push(name, age, quote)
};

// ** BONUS **


//  Your Reflection:
//I found this GPS activity really interesting. With the exception of the coding combat exercise, this was the first REAL dive into JavaScript that I have had so far. My partner, Matt, seemed to be more knowledgable than me on the topic, but I think we balanced each other well. I started off as the driver, and we completed the first two parts before switching. Due to his greater understanding of javascript, I think our experience worked out well for ourselves and each other. Also, our instructor, Emily, was awesome. She was quick to point out when we were going in the wrong direction, but never really gave us any answers. She let us figure them out by asking questions that would steer us in the proper direction. After the hour was up, Emily had to go, but Matt and I stayed on the hangout and were able to finish this up. I'd say this challenge was a success. Looking forward to more peer pairing with Matt. 