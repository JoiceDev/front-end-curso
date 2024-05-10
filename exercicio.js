//Herança

function Animal(raça, nome){
    this.raça = raça;
    this.nome = nome;
    this.fazSom = function() {
        console.log('Som do animal', this.som);
    }
}

function Gato() {
    Animal.call(this, 'Persa', 'Garfield');
    this.som = 'miau';
}

function Cão() {
    Animal.call(this, 'Labrador', 'Max');
    this.som = 'au au';
}

// Criando instâncias de Gato e Cão
const gato1 = new Gato();
const cachorro1 = new Cão();