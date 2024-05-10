//criar objetos (1ªforma - objetos literais)

const animalDoNicolas = {
    tipo: 'cachorro',   //propriedades tipo e raça
    raça: 'caramelo',
    fazSom: function() {    //método
        console.log('au au');
    }
}

const animalDoMatheus = {
    tipo: 'cachorro',   //propriedades tipo e raça
    raça: 'pastor alemão',
    fazSom: function(){     //método
        console.log('au au');
    }
}

//criar objetos (2ª forma - função construtora)

function Animal(tipo, raça) {
    this.tipo = tipo;
    this.raça = raça;
    this.fazSom = function() {
        console.log('au au');
    }
}

const animalDaRita  = new Animal("cachorro", "pinscher"); //instância 
const animalDoPaulo = new Animal("cachorro", "dalmata"); //instância 

