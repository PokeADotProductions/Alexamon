  var numToLet = [", AY ", ", B ", ", C ", ", D "];
  var letToNum = {a: 0, bee: 1, c: 2, d: 3, inspect: 4};
  var subjects = {
    oddish: "Oddish is a the dank pokemans.  Watch out for dat poison powder!",
    squirtle: "Squirtle likes to wear sunglasses because he is an edge lord.",
    charmander: "Charmander was abandoned as a young pokeman.  He is very sad.",
    bulbasaur: "Bulbasaur is the best pokemon in the game. He will use his vine whip to carry you like a baby.",
    agumon: "Agumon is a digimon, digital monster. Where are the pokemon?",
    pikachu: "Pikachu is the electric rodent and doesn't like his pokeball.",
    jenny: "Jenny is the pokemon popo.  She will put the evil doers in the pokemon jail.",
    misty: "Misty is a swimmer who likes the water pokemon. She does not have a bike anymore.",
    brock: "Brock likes rock pokemons.  He has squinty eyeballs.",
    charizard: "Charizard is too high of a level to answer to trainers.  He likes to take nappy naps instead.",
    muk: "Muk is a filthy filthy pokeman and likes to eat trash.",
    grimer: "Grimer is a mini muk pokemans.  He eats little trashes.",
    blastoise: "Blastoise has giant hydro pump cannons.  He will destroy you with his water smash special ability!",
    teamRocketGrunt: "Team Rocket are the evil doers and will steal all of your pokeman.  Watch out for Team Rocket spooks!",
    starters: "Bulbasuar, Squirtle, and Charmander are the starter pokemens.  Choose wisely little travelers!"    
  };

  var Branch = function(hint, flavor, branches, isWinner, subject) {
    this.hint = hint;
    this.text = flavor;
    this.branches = branches;
    this.isWinner = isWinner;
    this.invalidChoice = false;
    this.subject = subject;

  this.goDownBranch = function(index) {
    if (this.branches.length <= index) {
      console.log("Invalid index");
      this.invalidChoice = true;
      return this;
    } else {
      return this.branches[index];
    }
  }

  this.isLeaf = function() {
    this.branches.length === 0;
  }

  this.addBranch = function(branch) {
    this.branches.push(branch);
  }

  this.getSubjectDescription = function() {
    if (this.subject == null) {
      return "nothing to inspect."
    }
     // do something
    return subjects[this.subject.toLowerCase()]
  }

  this.getDescription = function() {
    var str = this.text;

    if (this.invalidChoice) {
      str = "I don't believe that was an option.  " + str;
      this.invalidChoice = false;
    }

    if (this.isLeaf()) {
      console.log("        END");
      return this.text;
    }

    for (var i = 0; i < this.branches.length; i ++) {
      if (i == this.branches.length - 1) {
        str = str + ", or"
      }
      str = str + numToLet[i] + this.branches[i].hint;
    }
    return str;
  }
}


  var makeBranch = function (hint, flavor, subject) {
  return new Branch(hint, flavor, [], false, subject)
  }

  var makeLeaf = function (hint, flavor, isWinner, subject) {
  return new Branch(hint, flavor, [], isWinner, subject)
  }

  var makeBranch = function (hint, flavor) {
  return new Branch(hint, flavor, [], false, null)
  }

  var makeLeaf = function (hint, flavor, isWinner) {
  return new Branch(hint, flavor, [], isWinner, null)
  }

  var scriptTree = makeBranch("", "You've begun your adventure as a pokemon trainer! Now time to pick your first pokemon!", "Starters");

  var b = makeBranch("Squritle", "You've choosen Squritle! Do you?", "Squirtle");
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
          b1112.addBranch(b11122);
            b11121.addBranch(b111211);
            b11121.addBranch(b111212);

console.log(b111)

  var currBranch = scriptTree;