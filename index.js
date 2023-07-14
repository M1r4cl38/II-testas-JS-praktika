// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

a = 10
b = 77

if (a >= b) {
    console.log(a);
} else if (a <= b){
    console.log(b);
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let i = 0; i < 5; i++) {
    const atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
    console.log(atsitiktinisSkaicius);
}

// 5. Naudojant while cikla, spausdinti atsitiktinius skaicius nuo 1 iki 10. Paskutinis atspausdintas skaicius turi büti 5. (7 taskai)

let y = 10;
let x = 1;
while(x !== y) {
    x = Math.floor((Math.random() * 10) + 1);
    console.log(x);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.

let = length = [];
const masyvoIlgis = Math.floor(Math.random() * (30 - 20 + 1) + 20);

console.log(masyvoIlgis);

for (let i = 0; i < masyvoIlgis; i++) {
    length.push(Math.floor(Math.random() * (20 -1 + 1) + 1));
}
console.log(length);

const didziausiaReiksme = length;

let max = didziausiaReiksme[0];
for (let i = 0; i < didziausiaReiksme.length; i++) {
    if (didziausiaReiksme[i] > max) { max = didziausiaReiksme[i]; }
}
console.log("max = " + max);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai) 

function atsitiktineRaide (array) {
    return array[Math.floor(Math.random() * array.length)]
}

let raides = ["ABCD"];
    result = '';
for (let i = 0; i < 100; i++) {
    result += atsitiktineRaide(raides);
}

console.log(result);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(c, d) {
    if (typeof c === 'number' && typeof d === 'number') {
        return c + d;

    } if (Array.isArray(c) && Array.isArray(d)) {
        return c.length + d.length;
    }
    else {(typeof c === 'number' && typeof d === 'number' || Array.isArray(c) && Array.isArray(d) && sum % 2 !== 0);
        return 'suma nelygine';
    }
}


console.log(lygineSuma([2, 4, 5, 1], [3, 3, 1]));
console.log(lygineSuma(42, 2));