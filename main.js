class Ataque {
    constructor(player, type, name, damage) {
        this.player = player;
        this.type = type;
        this.name = name;
        this.damage = damage;
    }

    att() {
        console.log(`${this.player} used ${this.name}(${this.type}) and dealt ${this.damage} damage.`)
    }
};

class AtaqueFisico extends Ataque {
    constructor(player, type, name, damage, arma){
        super(player, type, name, damage);
        this.arma = arma
    }

    att() {
        console.log(`${this.player} using ${this.arma} casted ${this.name}(${this.type}) attack and dealt ${this.damage} damage.`)
    }
};

class AtaqueMagico extends Ataque {
    constructor(player, type, name, damage, CustoMana){
        super(player, type, name, damage);
        this.CustoMana = CustoMana;
    }
    att() {
        console.log(`${this.player} casted ${this.name}(${this.type}) magic attack and dealt ${this.damage} damage. It takes ${this.CustoMana} mana.`)
    }

}


const Attack1 = new AtaqueFisico("Player1", "Physical", "Quick Slash", "10d8", "Katana");
const Attack2 = new AtaqueMagico("Player2", "Fire", "Fireball", "10d8", 25);
const Attack3 = new AtaqueFisico("Player3", "Fire", "Blazing sword", "16d8", "Sword")

Attack1.att()
Attack2.att()
Attack3.att()
