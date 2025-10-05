// 1-09-25
// // // // // Switch

// switch(condition){
    // case 
    // expression1
    // case 
    // expressionN
//     default:
//         defaultExpression
// }

// const pm = prompt("Enter your wallet amount: ");
// switch(pm) {
//     case "4000":
//         alert("Visit Lazarus");
//         break;
//     case "1100":
//         alert("Visit Kachi");
//         break;
//     case "600":
//         alert("Visit Seun");
//         break;
//     default:
//         alert("Kill Nate");
// }

// "Think like a Coder" on YouTube.
// "Gold & Silver" YouTube
// Terms in software dev
// What causes blue screen of death?


//////// Loop
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// for
// for (init; condition; inc/dec) {
//      expression
// }

// for (i = 1; i < 5; i++) {
//     console.log(i);
// }

// for (i = 1; i <= 100; i++) {
//     console.log("Hello", i);
// }

// for (i = 1; i <= 5; i++) {
//     console.log(i);
//     if (i == 3) {
//         break;
//     }
// }

// for (i = 1; i<= 5; i++) {
//  if (i == 3) {
//         break;
//     }
//  console.log(i)
// }

// for (i = 1; i<= 5; i++) {
//  if (i == 3) {
//         continue;
//     }
//  console.log(i)
// }



// for (i = 1; i < 5; i++) {
//     for (j = 1; j < 5; j++) {
//         console.log(i, j);
//     }
// }

// for (i = 1; i < 5; i++) {
//     for (j = 1; j <= i; j++) {
//      if (i !== j) {
//         continue;
//         } 
//        console.log(i, j);
//     }
// }

// for (i = 1; i < 5; i++) {
//     for (j = 1; j < 5; j++) {
//         if (i == j) {
//         console.log(i, j);
//         }
//     }
// }

// const students = ["Kachi", "Divine", "Emmanuel", "Seun", "Felix", 
//     "Nathaniel", "Daniel", "Abdulazeez"]

// const person = {
//     'firstname': "John",
//     'lastname': "Doe" ,
//     'age': 40,
//     'isMarried': false
// }

// for (i = 0; i < students.length; i++) {
//     console.log(i, students[i])
// }

// for (s in students) {
//     console.log(s, students[s])
// }

// for (p in person) {
//     console.log(p, person[p])
// }

// for (s of students) {
//     console.log(s)
// }

// for (p of person) {
//     console.log(p)
// }

//// While
// init
// while(condition) {
//     expression
//     inc/dec
// }

// var x = 6;
// while (x <= 5) {
//     console.log("While", x)
//     x++;
// }

// // // Do While
// init 
// do {
//     expression 
//     inc/dec 
// } while (condition);

// var y = 6;
// do {
//     console.log("Do While", y)
//     y++
// } while(y <= 5);


//////////// Lottery System
// var luckyNumbers = [];
// for (i = 1; i <= 6; i++) {
//     let num = Math.floor(Math.random() * 10 + 1);
//     console.log(num);
//     if (luckyNumbers.includes(num)) {
//         i--;
//         continue;
//     } else {
//         luckyNumbers.push(num);
//         console.log(luckyNumbers);
//     }
// }


// let i = 1;
// while (i <= 6) {
//     let num = Math.floor(Math.random() * 10 + 1);
//     console.log(num)
//     i++
// }


/////////////////// 8th September
// var luckyNumbers = [];
// for (i = 1; i <= 6; i++) {
//     let num = Math.floor(Math.random() * 10 + 1);
//     console.log(num);
//     if (luckyNumbers.includes(num)) {
//         i--;
//         continue;
//     } else {
//         luckyNumbers.push(num);
//         console.log(luckyNumbers);
//     }
// }


// var userGuesses = [];
// for(j = 1; j <= 6; j++) {
//     let entry = prompt(`Enter a number \n ${userGuesses}`)
//     if(userGuesses.length >= 2 && (entry.trim().toLowerCase() == "q" || entry.trim().toLowerCase() == "quit")) {
//         break;
//     }
    
//     if (isNaN(entry) || entry.trim() == "" || entry.includes(".")) {
//         j--;
//         alert(`${entry} is not a number`);
//         continue;
//     }

//     if (entry > 90 || entry < 1) {
//         j--;
//         alert(`Please enter a value between 1 and 90`);
//         continue;
//     }

//     if (userGuesses.includes(entry)) {
//         j--;
//         alert(`${entry} already exists`);
//         continue
//     } else {
//         userGuesses.push(Number(entry));
//     }
// }


// var wins = []
// for (entry of userGuesses) {
//     if(luckyNumbers.includes(entry)){
//       wins.push(entry);
//     }
// }

// alert(
//    `Lucky Numbers: ${luckyNumbers} \n ` +
//    `User Entries: ${userGuesses} \n ` +
//    `Winning Numbers: ${wins}`
// );



//////////////////// Function
// function functionName(parameter) {
//     expression
// } 

// functionName(argument);

// function greet(person) {
//     console.log("Hello " + person);
// }
// greet("Kachi")

// function add(a = 0, b = 0) {
//     let ans = (a + b);
//     console.log(ans);
// }
// add(0)

// function subtraction(c = 0,d = 0) {
//     let minus = (c - d)
//     console.log(minus);
// }
// subtraction(2, 3)

// function multiplication(g = 0,h = 0) {
//     let multi = (g * h)
//     console.log(multi);
// }
// multiplication(3,2)

// function division(g = 0,h = 1) {
//     let divi = (g / h)
//     console.log(divi)
// }
// division()



////////// 10th September

// function add() {
//     let x = 0;
//     for (a of arguments) {
//         console.log(x, a);
//         x += a;
//     }

//     return x;
// }

// console.log(add(20,4,5,7,2,22))


// ///////////// 15th Sept 2025
// // // // // Function Expression or Anonymous function
// // const functionName = function (parameter) {
// //     Expression;
// // }

// const add2 = function (a,b) {
//     ans = a + b;
//     ans;
// }

// console.log(add2(10,3));

// // // Arrow Function
// // const functionName = () => expression;

// const add3 = (x, y) => x + y;
// console.log(add3(20,30));

// const add4 = (x,z) => {
//     ans = x + z;
//     return ans;
// }

// console.log(add4(20,30));

// /////// Error Handling

// try {
//     x = 10;
//     y = 3;
//     if (y == 0) throw new Error("You can't divide with zero (0)")
//     console.log(x/y);
// } catch (error) {
//     console.log("Error Occurence: " + error.message);
// } finally {
//     console.log("Done")
// }



////////////// 17th September 2025
// class Person {
//     constructor (name,age) {
//         this.name = name;
//         this.age = age;
//         this.today = new Date();
//     }

//     intro() {
//         return `Hello, my name is ${this.name}`
//     }

//     greet() {
//         if (this.today.getHours() < 12) {
//             return `Good, morning! How are you?`
//         } else if (this.today.getHours() < 16) {
//             return `Good afternoon! How are you?`
//         } else {
//             return `Good evening! How are you?`
//         }
//     }
// }

// const person = new Person("Kachi", 16);
// const person2 = new Person("Divine", 40)

// class Male extends Person {
//     intro2() {
//         return `Hello, my name is ${this.name} and my age is ${this.age} years old`
//     }
// }

// const male1 = new Male("Emma", 15)
// alert(formula.PI);


// // // // // 29th September 2025
// BOM
// DOM

////////////// DOM
// getElementsByTagName()
// const p = document.getElementsByTagName("p")[1];

// getElementsByClassName()
// const dior = document.getElementsByClassName("dior")[0];

// getElementById()
// const lasu = document.getElementById("lasu");

// querySelector()
// const value = querySelector("p");

// querySelectorAll()
// const value = document.querySelectorAll("#lasu")


/// Manipulators
// const h1 = document.getElementById("lasu")
// h1.getAttribute("class")
// h1.innerHTML = "Hello Guys"
// h1.addEventListener()

// // // Events
// const h1 = document.querySelector("h1");
// const p = document.querySelector("#lasu")
// h1.addEventListener('mouseenter', function (e) {
//     e.target.style.color = "red";
//     p.style.color = "red";
// })

// function changeColor (e) {
//    e.target.style.color = "red";
// }

// h1.onclick = changeColor