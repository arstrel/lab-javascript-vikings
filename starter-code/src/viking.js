// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack () {
    return this.strength;
  }
  receiveDamage(ammountOfDamage) {
    this.health  -= ammountOfDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }
  receiveDamage (ammountOfDamage) {
    super.receiveDamage(ammountOfDamage)
    if(this.health > 0) {
      return `${this.name} has received ${ammountOfDamage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg)
  }
  receiveDamage(ammountOfDamage) {
    super.receiveDamage(ammountOfDamage)
    if(this.health > 0) {
      return `A Saxon has received ${ammountOfDamage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingBraveWarrior) {
    this.vikingArmy.push(vikingBraveWarrior)
  }
  addSaxon(saxonTimidJokeOfAMan) {
    this.saxonArmy.push(saxonTimidJokeOfAMan)
  }
  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    let resultOfBattle = randomSaxon.receiveDamage(randomViking.strength)
    if(randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
    } 
    return resultOfBattle
  }
  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let resultOfBattle = randomViking.receiveDamage(randomSaxon.strength)
    if(randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
    }
    return resultOfBattle
  }
  showStatus() {
    if(this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!"
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
