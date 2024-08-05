//variable
//1. var = Old School
//2. let = ES6
//3. const = ES6

var x = 0;
x = 15
console.log(x);

//variable modern
//1. let
// let 0 = tidak boleh pakai angka
let z = 10;
z = 5;
let _a = 10
let $a = 10
let isCarBroken = true //best Practice
// let *a = 10 //tidak boleh diawali simbol selain 
console.log(z);

//2. const
const y = 10;
const COLOR_RED = 'red'; //best Practice
console.log(y)

//type data
let text = "lorem ipsum"; //string
let number = 10; //number
let boolean = true; //boolean
let nullValue = null; //null
let undefinedValue = undefined; //undefined
let symbol = Symbol("my-symbol"); //symbol

//non primitive
let array = [1, 2, 3]; //array untuk list

const zenix = {
    brand: 'Toyota',
    machine: 'Hybrid',
    color: 'red',
    year: 2020,
    spec: { //nested object
        cc: [1500,2000,3000,4000,5000],
        type: 'SUV'
    }
} //object untuk mendeskripsikan
console.log(zenix);
console.log(zenix.brand);
console.log(zenix.spec.cc[1]);
zenix.mesin = 'Diesel';
console.log(zenix.mesin);

//array
const mobilToyota = ['Avanza', 'Innova', 'Fortuner', 'Yaris'];
console.log(mobilToyota);
console.log(mobilToyota[1]);
mobilToyota[3] = 'Vios';
console.log(mobilToyota[3]);

const mobil = [
    {
        brand: 'Toyota',
        machine: 'Hybrid',
        color: 'red',
        year: 2020,
        spec: { //nested object
            cc: [1500,2000,3000,4000,5000],
            type: 'SUV'
        }
    },
    {
        brand: 'Honda',
        machine: 'Hybrid',
        color: 'red',
        year: 2020,
        spec: { //nested object
            cc: [1500,2000,3000,4000,5000],
            type: 'SUV'
        }
    }
]

console.log(mobil[1].brand); 

//object on array
//array on object
//array on array
//object on object

//operator =-+*&%/!
//1.arimatika
const tambah = 1 + 1; //1 = operand , + = operator , 1 operand = unary operand , 2 operand = binary operator
const kurang = 1 - 1;
const kali = 1 * 1;
const bagi = 1 / 1;
const mod = 1 % 1;
const pangkat = 1 ** 1;
console.log(tambah,kurang,kali,bagi,mod,pangkat);

//string concatenation
const firstName = 'Zenix';
const lastName = 'TMMIN';
const fullName = firstName + ' ' +	  lastName;
console.log(fullName);
console.log('1'+1)
console.log('1'-1)

//Assignment
let a = 1;
a += 1;
a -= 1;
a *= 1;
a /= 1;
a %= 1;
a **= 1;
a <<= 1;
a >>= 1;
a >>>= 1;
a |= 1;
a ^= 1;
a &= 1;
console.log(a);

//string interpolation
const tipe = 'Zenix';
const age = 20;
const greeting = `Hello, my name is ${tipe} and I am ${age} years old.`;

//2. comparison >,<,>=,<=,==,===,!==,!=
const isEqual = 1 == 1;
const isNotEqual = 1 != 1;
const isGreaterThan = 1 > 1;
const isLessThan = 1 < 1;
const isGreaterThanOrEqual = 1 >= 1;
const isLessThanOrEqual = 1 <= 1;
console.log(isEqual,isNotEqual,isGreaterThan,isLessThan,isGreaterThanOrEqual,isLessThanOrEqual);

//3. logical
const and = true && true;
const or = true || true;
const not = !true;
console.log(and,or,not);

const x1 = 1;
const x2 = 2;
const result = x2 > x1;
console.log(result);

console.log(1 === 1); //true
console.log('1' == 1); //true
console.log('1' === 1); //false -> tipe data di cek
console.log('1' !== 1); //true -> tipe data di cek
console.log('1' != 1); //false -> tipe data di cek

//4. ternary
const ternary = 1 > 1 ? 'true' : 'false';
console.log(ternary);

//5. switch
const switchValue = 1;
switch(switchValue){
    case 1:
        console.log('value is 1');
        break;
    case 2:
        console.log('value is 2');
        break;
    default:
        console.log('value is not 1 or 2');
        break;
}





