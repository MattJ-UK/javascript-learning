var GameCharacter = {
    name: 'Matt',
    pos: 2,
    health: 100,

    move: function(byAmount){
        this.pos += byAmount;
    }
};

var name = GameCharacter.name;
console.log(name);

console.log(GameCharacter.health);
GameCharacter.health = 50;
console.log(GameCharacter.health);

GameCharacter.move(10);

console.log(GameCharacter.pos);