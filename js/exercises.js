//      HOMEWORK

// Begin1

// var a = 6;
// var b = 8;

// var S = a * b;

// var P = 2 * (a + b);

// console.log("Tomon a =", a);
// console.log("Tomon b =", b);
// console.log("Yuzasi S =", S);
// console.log("Perimetri P =", P);


// Begin2.

// var d = 10;

// var pi = 3.14;

// var L = pi * d;

// var r = d / 2;

// var S = pi * Math.pow(r, 2);

// console.log("Diametri d =", d);
// console.log("Uzunligi L =", L);
// console.log("Yuzasi S =", S);


// Begin3.

// var a = 4;

// var V = Math.pow(a, 3);

// var S = 6 * Math.pow(a, 2);

// console.log("Tomon a =", a);
// console.log("Hajmi V =", V);
// console.log("To'la sirti S =", S);


// Begin4.

// var a = 3;
// var b = 4;
// var c = 5;

// var V = a * b * c;

// var S = 2 * (a * b + b * c + a * c);

// console.log("Tomon a =", a);
// console.log("Tomon b =", b);
// console.log("Tomon c =", c);
// console.log("Hajmi V =", V);
// console.log("To'la sirti S =", S);


// Begin5.

// var a = 8;
// var b = 12;

// var M = (a + b) / 2;

// console.log("Son a =", a);
// console.log("Son b =", b);
// console.log("O'rta arifmetigi M =", M);


// Begin6.

// var a = 3;
// var b = 4;

// var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// var P = a + b + c;

// console.log("Katet a =", a);
// console.log("Katet b =", b);
// console.log("Gipotenuza c =", c.toFixed(2));
// console.log("Perimetri P =", P.toFixed(2));




// Begin8.

// var L = 10;

// var pi = 3.14;

// var R = L / (2 * pi);

// var S = pi * Math.pow(R, 2);

// console.log("Uzunlik (L) =", L);
// console.log("Radius (R) =", R.toFixed(2));
// console.log("Yuzasi (S) =", S.toFixed(2));




// Begin10

// var A = 5;
// var B = 8;
// var C = 12;

// var temp = A;
// A = B;
// B = C;
// C = temp;

// console.log("Yangi qiymatlar:");
// console.log("A =", A);
// console.log("B =", B);
// console.log("C =", C);


// Begin11

// var x = 5;

// var y = 4 * Math.pow((x - 3), 6) - 7 * Math.pow((x - 3), 3) + 2;

// console.log("y =", y);



// Begin12

// var A = 2;

// var daraja3 = Math.pow(A, 3);
// var daraja6 = Math.pow(A, 6);
// var daraja9 = Math.pow(A, 9);
// var daraja15 = Math.pow(A, 15);

// console.log("A^3 =", daraja3);
// console.log("A^6 =", daraja6);
// console.log("A^9 =", daraja9);
// console.log("A^15 =", daraja15);



// Begin13

// var Tf = 98.6;

// var Tc = (Tf - 32) * 5 / 9;

// console.log("Fahrenheit temperaturasi:", Tf);
// console.log("Celsius temperaturasi:", Tc.toFixed(2));



// Begin14

// var vaznShokolad = 0.5;
// var narxShokolad = 1200;

// var vaznKonfet = 0.3;
// var narxKonfet = 800;

// var qimmatlikPerKg = (narxShokolad / vaznShokolad) - (narxKonfet / vaznKonfet);

// console.log("1 kg shokolad 1 kg konfetdan", qimmatlikPerKg, "so'm qimmat");



// Begin15

// var X = 10;
// var A = 1200;

// var Y = 7;
// var B = 800;

// var jamiSavdoSummasi = X * A + Y * B;

// console.log("Jami savdo summasi:", jamiSavdoSummasi, "so'm");

// Integer1.

// var son = 879;

// var birliklar = son % 10;
// var onliklar = Math.floor((son % 100) / 10);

// console.log("Birliklar:", birliklar);
// console.log("Onliklar:", onliklar);


// Integer2

// var son = 246;

// var birliklar = son % 10;
// var unliklar = Math.floor((son % 100) / 10);
// var yuzliklar = Math.floor(son / 100);

// var yigindi = birliklar + unliklar + yuzliklar;

// console.log("Birliklar:", birliklar);
// console.log("Unliklar:", unliklar);
// console.log("Yuzliklar:", yuzliklar);
// console.log("Raqamlar yig`indisi:", yigindi);


// Integer3

// var son = 789; 

// var teskariSon = parseInt(son.toString().split("").reverse().join(""), 10);

// console.log("Berilgan son:", son);
// console.log("Teskari tartibdagi son:", teskariSon);


// Integer4

// var son = 123; 

// var yuzlik = Math.floor(son / 100); 
// var onlik = Math.floor((son % 100) / 10); 
// var birlik = son % 10; 

// var hosilSon = onlik * 100 + yuzlik * 10 + birlik;

// console.log("Berilgan son:", son);
// console.log("Hosil bo'lgan son:", hosilSon);


// Integer5

// var son = 123; 

// var yuzlik = Math.floor(son / 100); 
// var onlik = Math.floor((son % 100) / 10); 
// var birlik = son % 10; 

// var hosilSon = onlik * 10 + birlik * 1 + yuzlik * 100;

// console.log("Berilgan son:", son);
// console.log("Hosil bo'lgan son:", hosilSon);


// Integer6

var son = 9812;

var mingliklar = Math.floor(son / 1000);

console.log("Berilgan son:", son);
console.log("Mingliklar xonasidagi son:", mingliklar);


// Integer7

// var sekundlar = 1500; 

// var minutlar = Math.floor(sekundlar / 60);

// console.log("Berilgan sekundlar soni:", sekundlar);
// console.log("Aylangan minutlar soni:", minutlar);


// Integer8

// var sekundlar = 7200; 

// var soatlar = Math.floor(sekundlar / 3600);

// console.log("Berilgan sekundlar soni:", sekundlar);
// console.log("Aylangan soatlar soni:", soatlar);


// Integer9

// var sekundlar = 3665; 

// var minutlar = Math.floor(sekundlar / 60);
// var qolganSekundlar = sekundlar % 60;

// console.log("Berilgan sekundlar soni:", sekundlar);
// console.log("Aylangan minutlar soni:", minutlar);
// console.log("Qolgan sekundlar soni:", qolganSekundlar);


// Integer10

// var sekundlar = 7225; 

// var soatlar = Math.floor(sekundlar / 3600);
// var qolganSekundlar = sekundlar % 3600;

// console.log("Berilgan sekundlar soni:", sekundlar);
// console.log("Aylangan soatlar soni:", soatlar);
// console.log("Qolgan sekundlar soni:", qolganSekundlar);
