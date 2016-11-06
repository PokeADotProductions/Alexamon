var scriptTree = makeBranch("", "You've begun your adventure as a pokemon trainer! Now time to pick your first pokemon!", "Starters");

var b = makeBranch("Squritle", "You've choosen Squritle! Do you?", "Squritle");
var b1 = makeBranch("Fight the gym leader Brock?", "Rocks are weak to water obviously. You crush Brock and move on to Misty. Do you?");
var b2 = makeLeaf("Say hi to Officer Jenny?", "Officer Jenny mistakes you for a master criminal and puts you in jail. Game Over.", false, "Jenny");

var b11 = makeBranch("Grab an Oddish, a grass pokemon?", "You fight a tough battle and win but team rocket steals your Oddish pokemon. Do you.", "Oddish");
var b12 = makeLeaf("Believe in your Squirtle and face her.", "You got wrecked. Game Over.", false);

var b111 = makeBranch("Leave your Oddish behind.", "You venture off from gym, the saddness of your Oddish's soul weighing against you. Do you.");
var b112 = makeBranch("Prepare to take back your Oddish.", "You and your Squirtle bond as you form an epic training montage preparing for the upcoming battle.");

var b1111 = makeLeaf("Keep moving foward?", "The Battles keep weighing you down. Team Rocket returns with your Oddish. Oddish has trained hard in order to seek revenge against the trainer who abondoned it. Oddish wrecks your Squritle. Game Over", false);
var b1112 = makeBranch("Take a break?", "Squritle knows you're not a quitter. Don't let him down. Do you.");
var b1121 = makeLeaf("Fight Team Rocket.", "Squritle is squritle no more. He has evovled into the tank known as Blastoise. You rain destruction down upon your enemies, get it rain? As in the water that falls from the sky? You easily destroy the team rocket headquarters. The eilte four is no match for your greatness. The both of you easily conquer the world... Good Game WINNER.", true, "Blastoise");
var b1122 = makeLeaf("End training a little early.", "Training is hard... why not try your hand at cooking? -> You and squritle build a cooking empire across the entire poke region. You become the one who knocks. You single handlely destroy the rest of the cooking industry with your amazing cook. Ratings of your cooking soar to 99%. Your little known sister in law, officer Jenny, catches on to your shady cooking methods and sends you jail. Game Over.", false);

var b11121 = makeBranch("Get Revenge and fight Team Rocket to get oddish back?", "You run into the Team Rocket member who stole your pokemon. He looks pretty scary. Do you.");
var b11122 = makeLeaf("Call officer Jenny.", "Officer Jenny finds and defeats Team Rocket, returning your Oddish. You are traumatized by your jounrey and the world is too scary for you now. You head home and open a bakery. Game Over.", false);

var b111211 = makeLeaf("Fight", "The Team Rocket grunt only has a Zubat and your Squritle easily defeats him. You rescue your Oddish and continue on your journey. After several months of training you, Squritle and Oddish destroy Team Rocket and win the Pokemon League. You are da Best. WINNER!", true);
var b111212 = makeLeaf("Run.", "You don't get very far. Team Rocket steals the rest of your pokemon. You are no longer trainer. You go into the wonderful world of accounting. Game over.", false);

scriptTree.addBranch(b);
b.addBranch(b1);
b.addBranch(b2);
  b1.addBranch(b11);
  b1.addBranch(b12);
    b11.addBranch(b111);
    b11.addBranch(b112);
      b111.addBranch(b1111);
      b111.addBranch(b1112);
      b112.addBranch(b1121);
      b112.addBranch(b1122);
        b1112.addBranch(b11121);
        b1112.addBranch(b11122)l
          b11121.addBranch(b111211);
          b11121.addBranch(b111212);


