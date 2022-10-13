// Parte 1

var frase = 'Sto imparando JavaScript';

document.getElementById('maiuscola').innerHTML = frase.toUpperCase();
document.getElementById('minuscola').innerHTML = frase.toLowerCase();

document.getElementById('strArray').innerHTML = frase.split('');

var caratteri = frase.charAt(2) + frase.charAt(1) + frase.charAt(14) + frase.charAt(18);
document.getElementById('estraiCaratteri').innerHTML = caratteri;

document.getElementById('concatena').innerHTML = frase.concat(' JS');

document.getElementById('estraiStringa').innerHTML = frase.slice(5, 9);


// Parte 2

const arrayPersone = ['Giovanni', 'Carla', 'Piero', 'Mirtilla'];

document.getElementById('array').innerHTML = arrayPersone;

document.getElementById('lunghezza').innerHTML = arrayPersone.length;

document.getElementById('elemento').innerHTML = arrayPersone[2];

arrayPersone.splice(2, 1, 'Massimo');
document.getElementById('modificato').innerHTML = arrayPersone;

document.getElementById('ultimo').innerHTML = arrayPersone.pop();


// Parte 3

const date = [2001, 1990, 1987, 2018, 2010];
const annoCorrente = 2022;

function calcolaEta(date) {
    let calcolo = annoCorrente - date;
    return calcolo;
}

document.getElementById('eta1').innerHTML += `${calcolaEta(date[0])} anni`;
document.getElementById('eta2').innerHTML += `${calcolaEta(date[1])} anni`;
document.getElementById('eta3').innerHTML += `${calcolaEta(date[2])} anni`;
document.getElementById('eta4').innerHTML += `${calcolaEta(date[3])} anni`;
document.getElementById('eta5').innerHTML += `${calcolaEta(date[4])} anni`;

const arrayAnni = [calcolaEta(date[0]), calcolaEta(date[1]), calcolaEta(date[2]), calcolaEta(date[3]), calcolaEta(date[4])];
document.getElementById('arrayEta').innerHTML += arrayAnni;


// Parte 4

const animali = ['coniglio', 'cane', 'gatto', 'criceto'];

document.getElementById('intero').innerHTML = animali;

animali.push('leone');
document.getElementById('aggiunto').innerHTML = animali;

document.getElementById('estratto').innerHTML = animali.slice(0, 4);

document.getElementById('verifica1').innerHTML = animali.includes('cane');

document.getElementById('verifica2').innerHTML = animali.includes('cervo');