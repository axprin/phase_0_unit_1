// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//Challenge 1: resuce mission
// javascript // move down x2 // move right // move up x2 // move right x2 // move down // ATTACK
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Challenge 2: grab the mushroom
// javascript // move up // move right // move left // move up // ATTACK
this.moveUp();
this.moveRight();   
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Callenge 3: drink me
// javascript // ATTACK // move right // move down // move up // move right // ATTACK
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
//Challenge 4: taunt the guards
// javascript // move right // break door // move right // taunt guard // move left x2 // call attack // move right // call to follow // move right x2 // move up // move right // taunt guard // move down // move right // move up // ESCAPE!
this.moveRight();
this.bustDownDoor();
// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey BUTTHEAD!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//Challenge 5: it's a trap
// javascript // move down x2 // taunt ogre // move up x2 // yell to attack
this.moveDown();
this.moveDown();
this.say("HEY STUPID!")
this.moveUp();
this.moveUp();
this.say("ATTACK NOW!");

//Challenge 6: taunt
// javascript // taunt ogre x4
this.say("Hey!");
this.say("You are so slow!"
this.say("our mother was a hamster and your father smelt of elderberries!"
this.say("nanny nanny poo poo!");

//Challenge 7: cowardly taunt
// javascript // run out open // run to safety // run back to open // taunt ogres // run back to safety
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
// Run your soldier out where the ogres can hear you.
this.moveXY(58, 29);
// Say something!
this.say("HEY YOU DUMB OGRES!");
// Then run back behind the arrow towers for safety.
this.moveXY(70, 10); 
// You can shift+click on the map to insert coordinates.

//Challenge 8: commanding followers
// javascript // move towards troops // commany troops to follow // lead into battle // ATTACK!
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("FOLLOW ME!"); 
this.moveXY(58, 45); 
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("attack"); 
// Make sure Tharin is safe!

//Challenge 9: mobile artillery
// javascript // move // attack // move // attack // move // attack // move // attack // move // attack
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(51, 45); 
this.attackXY(70, 55);
this.moveXY(43, 38); 
this.attackXY(54, 46);
this.moveXY(51, 45);
this.attackXY(51, 64);
this.moveXY(43, 38); 
this.attackXY(45, 52);
 
 
// Reflection:
// I found this first exercise pretty elementary and didn't really require too much though or outside research. This game, although clevar, donsn't seem to really teach you much actual coding (at least at the beginner level). Since this is the first week of JS, I'm really excited to buckle down and learn a lot more. 