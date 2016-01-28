function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = 'wooden sword';
    this.power = Math.floor((Math.random() * 100) + 1);
    
}

Warrior.prototype = {
    fight: function() {
        console.log("Rushes to the arena with ");
    },
    faceoff: function(opponent) {
        if (this.power < opponent.power) {
            console.log(this.name + " hath ascended to Valhalla as a slain warrior");
        } else if (this.power > opponent.power) {
        console.log("victory belongs to " + this.name + " and his mighty " + this.weapon);
    } else {
        console.log("There shall be no victor on this day")
    }
    }
};

var bernie = new Warrior("Bernie","Male");
var donald = new Warrior("Donald", "Orc");
console.log(bernie, donald);
bernie.faceoff(donald);