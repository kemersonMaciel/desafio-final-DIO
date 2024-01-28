class Heroi {
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
            switch (this.tipo){
                case 'mago':
                    ataque = ' magia';
                    break;
                case 'guerreiro':
                    ataque = ' espada';
                    break;
                case 'monge':
                    ataque = ' artes marcias';
                    break;
                case 'ninja':
                    ataque = ' shuriken';
                    break;
                    default:
                        ataque = 'usou um ataque indefinido';
            }
            console.log("o " +  this.tipo  + " " + this.nome + " atacou usando" + ataque);
            }
}

const heroi1 = new Heroi ('Aragorn', 35, 'guerreiro');
const heroi2 = new Heroi ('Gandalf', 1000, 'mago');

heroi1.atacar();
heroi2.atacar();