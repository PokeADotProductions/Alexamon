var numToLet = [", A ", ", B ", ", C ", ", D "]

var Branch = function(hint, flavor, branches, isWinner) {
    this.hint = hint;
    this.text = flavor;
    this.branches = branches;
    this.isWinner = isWinner;
    this.invalidChoice = false;

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

  this.getDescription = function() {
    var str = this.text + "  Do you";

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


var makeBranch = function (hint, flavor) {
  return new Branch(hint, flavor, [], false)
}

var makeLeaf = function (hint, flavor, isWinner) {
  return new Branch(hint, flavor, [], isWinner)
}

var b = makeBranch("", "You come across a pikachu.")

// console.log( new Branch("hint", "flavor", [], false, false));

b.addBranch(makeLeaf("pick it up", "the pikachu shocks you and you die", false))
  var leaveIt = makeBranch("walk away", "it follows you to the pokemon center.")
  b.addBranch(leaveIt);
    var healit = makeBranch("heal it", "it now trusts you and joins your team.")
    leaveIt.addBranch(healit)
    leaveIt.addBranch(makeLeaf("kick it", "it dies and you win the world", true))

var currBranch = b;
console.log(currBranch);
console.log(currBranch.getDescription());

currBranch = currBranch.goDownBranch(1)

console.log(currBranch);
console.log(currBranch.getDescription())

currBranch.goDownBranch(7);

console.log(currBranch);
console.log(currBranch.getDescription())
