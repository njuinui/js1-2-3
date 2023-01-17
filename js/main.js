//we'll use to console test result 

// variables : let, const and var.
// we use let if the value of the variable will be change in feature 
 let AGe = 25;

let year = 2019;

console.log(AGe, year)//fine out ABOUT THIS 

AGe = 30;
console.log(AGe)

/*const 
we use const when we don't want the variable to be over readen  */
const points =100;
console.log(points)
//const and let are the modern way to create variable 
//before const and let came about var was the variable that was used 
var scor = 80;
console.log(scor)

// Naming variables 
// we can use : 
//   camocase(e,g firstName);
//   special Character(e.g #,$,&)
// we can't use numbers, space and they're some resuve keyword that can't be used, e.g let and const 


// Comment
//You can use double forward slash// or /* */

// Javascript data type 

// Number e.g 1,2,100,3.14

let radius = 10;
const pi = 3.14;

console.log(radius, pi)

// maths operators +, -, *, /, **, % 
console.log(10 / 2); // gives 5
let divis = radius % 3;//give a remainder of 1
let tim = pi * radius**2; // gives 314

// order of operation - B I D M A S 
// Bracket,index,Division,Multiplication,Addition and subtraction 

let multi = 5 * (10-3)**2;

console.log(multi)
let likES =10;
likES = likES + 1;//it is the same as likrs++ ie add1 to the current value of likES
likES--; //to redues the value of likES by one
likES += 10; 
likES -= 5; // take 5 away from likES
likES *= 3; // multiply likES 3times
likES **= 2; //raise likES to the power 2
likES /= 2; //divide likES by 2
console.log(likES)

// NaN - not a number 
console.log(5 / 'hello'); // gives NaN
// Concatinate strings and number 
let conName = 'the blog has ' + likES + ' likes';
console.log(conName);



// String e.g "Hello" , "12@gmail.com"
// we use string to store number and charaters. we store string with double or single quote

 console.log('hello, world');

 let emaIl = 'des@yahoo.com';

 console.log(emaIl);
// string concatination: it is ude to join two strings tpgether
 let fName = 'Desmond';
 let lName = 'Njuinui';

let fullName = fName + ' ' + lName;
// console.log(fullName);
// getting charaters 
 console.log(fullName[3]);

// string has mehod and properties 
// string length 
console.log(fullName.length);

// string has many fuunctions and these functions are called methods 
// string methods
 console.log(fullName.toUpperCase());

let FULLNAME = fullName.toLowerCase();
console.log(FULLNAME);
//these method don't alter the original value
console.log(FULLNAME,fullName)
let index = emaIl.indexOf('@');
console.log(index);

// common string 
let emaiL = 'mario@gthenetninja.co.uk';
let reSUlt = emaiL.lastIndexOf('n'); 
console.log(reSUlt);
//slice() : it take parameters. the first parameter is where the slice start and last parameter is where the slice end 
let resULt = emaIl.slice(2,6);
console.log(resULt);
//substr() is very much like slice but a bit different. it takes two agurment, the first is the starting while the second is the number of characters that will be display 
let resULT = emaIl.substr(0,10) 
console.log(resULT);
//replace()
let reSULT = emaIl.replace('m','w') //this will replace the first m with w

console.log(reSULT);


//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatination way 

let resUlt = 'The blog called ' +  title + ' by ' + author + ' has ' + likes + ' likes';
console.log(resUlt)

// template strings way 

let results = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(results)


// creating html 
let html = `
  <h2>${title}</2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes </p>
`;

console.log(html);



// Boolean "true/false"

console.log(true,false, "true", "false");

// methods can return boolean 
let email= "luigi@thenetninja.co.uk";
let nameS = ['mario', 'luigi', 'toad'];

let resulT = email.includes('@')//the include will loop through the email variable to match @
console.log(resulT);
let resuLt = nameS.includes('luigi')//the include will loop through the names array to match luigi
console.log(resuLt)

// comparison operator 
let aGe = 25;

console.log(aGe == 25)
console.log(aGe == 30)
console.log(aGe != 30)
console.log(aGe > 25)
console.log(aGe < 25)
console.log(aGe <= 25)
console.log(aGe >= 25)

let nAme = 'shaun';

console.log(nAme == 'shaun');
console.log(nAme == 'Shaun');//return false in js
console.log(nAme > 'crystal');//return true because the earlier letter in the alphabet are les than the later ones
console.log(nAme > 'Shaun');// return true because lowerCase letters are greater than upperCase letter
// loose comparison(different types can still be equal) 

console.log(aGe == 25);
console.log(aGe == '25');
// the two comparison yield thesame output true. this is because js convert the string in int before comparing 

 console.log(aGe != 25);

 console.log(aGe != '25');

// strict comparison (different types can't be equal)
console.log(aGe === 25)// is age thesame value and type to 25 which is true
console.log(aGe === '25')// is age thesame value and type to '25' which is false
console.log(aGe !== 25)// is age not thesame value and type to 25 which is false
console.log(aGe !== '25')// is age not thesame value and type to '25' which is true

// Null: explicitly set of values with no value
let AGE = null ;
console.log(AGE, AGE + 3, `the age is ${AGE}`);

// undefined: for variables that have not yet been defined

// Object : Comlex data structures-Arrays, Dates, Literals and many more
// Array: we use array to store collection of things like SVGAnimatedNumberList and strings
let Ninjas = ["shaun", "ryu", "chun-li"]; //an array on ninjas
// we can acess each an everyone of these ninjas using thire bases ie 
//console.log(ninjas[1])//gives ryu. this is because js is a zero base langouge.
//  we can equqlly over write one the in ninjas let say shaun 

Ninjas[0] = "ken";
console.log(Ninjas[0])// now you will have ken at the begining og the array ninjas

let agE = [20,30,40,45];
console.log(agE[2])

// you can mixe the array with numbers and strings 
let random = ['shaun', 'crystal', '30,35'];
console.log(random)//to log the array on the browser
console.log(random.length)

// array method 
let reSult = Ninjas.join(',')//join() will join the strings in ninjas and sepaaete them with a comma
console.log(reSult)
let REsult = Ninjas.indexOf('chun-li');
let RESult = Ninjas.concat(['ken', 'crystal'])//concat is used to join to arrays together
let RESULT = Ninjas.push('Ken');//push() add at value in to the array and display the length of the new array
RESULT = Ninjas.pop();//it changes the original value of ninjas. it pop-off the last value inthe array.
console.log(RESULT) 


// Symbol : use with objects



// type conversion 

let score = '100';

console.log(score + 1)// gives 1001 because you are concatinating string and number

let scores = Number(score);
console.log(scores + 1)// gives 101 because you've converted string to number version before adding

console.log(typeof score); // gives a string
console.log(typeof scores); // gives a number

// you can't convert string to number 
let rEsult = Number('hello');

console.log(rEsult)// give NaN

// you can convert number to string 
let Result = String(50);
console.log(Result, typeof Result)// give '50' and string

let result = Boolean('');

console.log(result, typeof result)// give '50' and string

// for loop 
// to create a for loop we start with a for keyword then a bracket. Inside the bracket we've three difference thing. 
// the first is an initialization variable(let i = 0), second(i < 5) the condition. this is going to evaluate to true or false. If the condition is true igoing to excute the code in currly braces.
// third(i++) each time codeblock is excuted, we take i and add plus 1 to it. 
for(let i = 0; i < 5 ; i++){
    console.log('in loop:', i)
}

console.log('loop finished');


const Name = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < Name.length; i++) {
    // console.log(Name[i])

    let html = `<div> ${Name[i]}</div>`;
    console.log(html);
    
}


// while loop 
// While loop is similar to for loop, just inside the paranthesis we've only the condition statement. The initializationis done outside the while loop. and the increement is done in the codeblock 

let s = 0;
while (s < 5) {
    console.log('in loop: ',s);
    s++;
    
}

const names = ['shaun', 'mario', 'luigi'];

let j = 0;

while (j < names.length) {
    console.log(names[j]);
    j++;
}//this will loops through the names array and display them

// Do while loop: it is a litle extension of while. It always execute at least once before the loop extends. 


let i = 5;
do {
    console.log('in loop: ',i);
    i++;
    
}while (i < 5)

// if statement 
const age = 25;

if (age > 20) {
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

const password = 'p@ss';

if (password.length >= 12) {
    console.log('that password is mighty strong');
}else if (password.length >= 8) {
    console.log("that password is long enough!");
}else{
    console.log("this password is not log enough");
}

// Logica operator - Or || and &&: you these conditions into if check to check a combination of different condition

const pass = 'p@ss';

if (pass.length >= 12 && pass.includes('@')) {//we're checking if the pass is greater than or equal to 12 and it include @ symbol
    console.log('that password is mighty strong');// if the condition is true it will execute this
}else if (pass.length >= 8 || pass.includes('@') && pass.length >= 5) {//we're checking if the pass is greater than or equal to 8 or  it include @ symbol and pass is greater than or equql to 5. pass.include('@') && pass.length >= 5 is treated as one condition
    console.log("that password is long enough!");// if the condition is true it will execute this
}else{
    console.log("this password is not log enough");
}

// logical NOT (!)

let user = false;

if (!user) {//the result in the codeblock will run because the logical not operator switch user.
    console.log('you must be logged in to continue');
}

console.log(!true);// display false. it takes the true value and change it to false
console.log(!false);// display true. it takes the false value and change it to true

// break and continue 

const ScoreS = [50,25,0, 30, 100, 20, 10];

for (let i = 0; i < ScoreS.length; i++) {

    // let say we don't want to show the score 0 
    if(ScoreS[i] === 0 ){
        continue;
    }
    console.log('Your scores: ', ScoreS[i]);

    if (ScoreS[i] === 100) {
        console.log('Congrats, you got the top score!');
        break;//Break enable you go out of the loop when the condition is reach even if the remaining values still satify the condition.
    }
    
}

// Switch statement : 

// switch statement use strick equality ie (if grade = '50' and one of the cases = 50. it display but Not a valid grade)

const grade = 'A';

switch (grade) {
    case 'A':
        console.log('You got an A!');
        break;// this break is to enable go out of the loop when the condition is reach else it continue to run
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log("Not a valid grade");
}

// variable and block scope 

let Age = 30;
// const can still be use inthe place of let 
// this variable can be acess and change any where inthe code because it is declear globally 
if (true) {
    let Age = 50;//here we're declearing a new local variable Age which can't be acess outside this codeblock
   // Age = 40;//change Age from 30 to 40
   let name = 'shaun';
    console.log('inside 1st code block: ', Age, name);

    // nested code block if 
    if (true) {
        let Age = 60;
        console.log('inside 2nd code block: ', Age, name)
    }
}

 console.log('outside code block: ', Age, name);//the name shaun won't display because it wasn't declear globally(outside the codeblok)
