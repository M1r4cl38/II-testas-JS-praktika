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
