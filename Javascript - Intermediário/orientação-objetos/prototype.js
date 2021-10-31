/*

const myText = 'Hello prototype!';

myText.constructor -> String
// o construtor de myText é uma String

myText.__proto__ -> String.prototype
// o __proto__ é uma String prototype

----------------------------------------

'use strict';

function Animal () {

    console.log(Animal.constructor);
    // f Function () { [native code] }
    // o construtor de Animal é uma função
}


*/

function Animal (qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro (morde) {
    Animal.call(this, 4);
    // A função Animal receberá o this (morde) e o número 4
    this.morde = morde;
    // o morde dessa função será igual ao morde do paramêtro
}

const pug = new Cachorro (false);
    // pug receberá uma função Cachorro, e como a função cachorro
    //  recebe a função Animal com o paramêtro 4 já definido, na impressão, 
    //  teremos como resultado: false e 4
console.log(pug);
    // resultado: qtdePatas: 4, morde: false






