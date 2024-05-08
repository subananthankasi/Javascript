//splice
const number= [1,2,3,4,5,6,7,8,9]
let suba =number.splice(2);
console.log(suba)


const n2= [1,2,3,4,5,6,7,8,9]
let suba1 =n2.splice( 2,2,55,66);
console.log("removed items:"+ suba1)
console.log("after splice:"+n2)
//......................................................................................................
//concat
let a= [10,20,30]
let b =[40,50,60]
let c= [70,80,90]
let d=a.concat(b,c,["s","s","s","s"]);
console.table(d);
//........................................................................................................
//sort (Assending)
let subash =["suba","nanthan","riva","arun"];

nanthan=subash.sort();
console.log(nanthan)
//(1)
const num=[10,200,50,700,40]
num.sort();
console.log(num)
//(2)
const num1=[10,200,50,700,40]
num1.sort((c,d)=>{
return c-d;
});
console.log(num1)
//  (3)  descending
const num2=[10,200,50,700,40]
num2.sort((c,d)=>{
return d-c;
});
console.log(num2)

// fill(1)....................................................
n=[1,2,3,4,5,6,7]
n.fill(20);
console.log(n);// OP:[20, 20, 20, 20, 20, 20, 20]
//(2) start
n1=[1,2,3,4,5,6,7];
n1.fill(20,3);
console.log(n1);//op: [1, 2, 3, 4, 20, 20, 20]

//(3)start,end

 n1=[10,20,30,40,50,60,70,80,90]
 n1.fill(20,3,5);
 console.log(n1);  // op: [10, 20, 30, 20, 20, 60, 70, 80, 90]
 //..........................................................................................
 

 // includes  (1)

 let product=["pen","pencil","note","book","eraser","ink"];

 result= product.includes("pen")
 console.log(result)/////Op : true

//(2)
product=["pen","pencil","note","book","eraser","ink"];

result= product.includes("scale")
console.log(result)/////Op : false

//(3)
product=["pen","pencil","note","book","eraser","ink"];

result= product.includes("pen",2)
console.log(result)/////Op : false

//(4)
product=["pen","pencil","note","book","eraser","ink"];

result= product.includes("eraser",2)
console.log(result)/////Op : true

//......................................................................................................
//Join
//(1)
const products=['pen','pencil','book','note'];
result=products.join();
console.log(result);
//(2)
const list=['pen','pencil','book','note'];
result=list.join('|');
console.log(result);
//......................................................................................................
//Reverse
//(1)
const x=[1,2,3,4,5,6,7]
x.reverse();
console.log(x); //Op:[7, 6, 5, 4, 3, 2, 1]

//(2) object to reverse
const y={0:10,1:20,2:30,3:40 , length:4};

Array.prototype.reverse.call(y);
console.log(y);  // Op:{0: 40, 1: 30, 2: 20, 3: 10, length: 4}
//........................................................................................................

//push 
//(1)

let n4 =[1,2,3,4,5,]

console.log(n4.push(60)) // Op:6
console.log(n4);  //Op:(6) [1, 2, 3, 4, 5, 60]

//(2) same method of string
let fruites=["apple",];
fruites.push("orange");
console.log(fruites); // Op:['apple', 'orange']

//(3)  2 array merge method 

let user1 =["suba","siva","Ani"]
let user2=["nanthan","thi","tha"]

user1.push(...user2);
console.log(user1);   // Op : ['suba', 'siva', 'Ani', 'nanthan', 'thi', 'tha']
//........................................................................................................................

// POP

let user =["ram","raj","ravi","rubi"]
console.log(user.pop());  // Op:rubi               which element u remove..display that elememt
console.log(user);// op:['ram', 'raj', 'ravi']     remove element after disply the balance element

//...............................................................................................................................

//Shift  

let students=['suba','siva','anitha']
let element=students.shift();
console.log(students);  // Op:['siva', 'anitha']
console.log(element); // OP:suba

//.................................................................................................................................
 // Unshift

let student = ['suba','siva','anitha']
 let elements= student.unshift('praba')
console.log(student); // Op: ['praba', 'suba', 'siva', 'anitha']
console.log(elements);// Op : 4

//.................................................................................................................

//index Of
//(1)
 students= ['suba','siva','anitha','praba']
 user = students.indexOf('siva');
 console.log(user); // Op : 1

 //(2)

let users = 'subananthan'
let index= users.indexOf('a');
console.log(index);  // Op : 3

//(3)
index =users.indexOf('a',4);
console.log(index); //Op: 5
//
//...........................................................................................................................

//Last index of 
//(1)
students=['suba','nanthan','siva','thi','ani','suba']
let i = students.lastIndexOf('suba');
console.log(i); //Op: 5

//(2)

students='subananthan'
let z=students.lastIndexOf('a');
console.log(z); //Op : 9

//........................................................................................................................

//every & Some

//every(1)  
//(all elements are true then every function is true)
n=[2,4,6,8]
 let results=n.every((value)=>{
    return value % 2 == 0;
});
console.log(results); //Op :True  

//(2) 
// incase any one value is false then the every fuction is False
n =[2,3,4,6]
let output =n.every((value)=>{
    return value %2==0;
})
console.log(output); // Op: false

//Some 
// any onvalue is true then the some function is true
n=[2,3,5,7]
let outputs=n.some((value)=>{
    return value %2==0;
})
console.log(outputs);  //True

//used in object 

users =[
    { name:'suba',age:22},
    { name:'siva',age:21},
    { name:'Ani',age:18},
];

function iseligible(element){
    return element.age>=18;
}
let details=users.every(iseligible)
console.log(details); //op: True
//..............................................................................................................................
//Primitive & Reference

// Primitive

let name ="subananthan"
console.log(typeof name);  //Op: string
//.......
let age = 30
console.log(typeof age);  // op: number
//....
let value = true
console.log(typeof value);// Op: Boolean
//....
let id =Symbol();
console.log(typeof id) // Op: symbol
//.....
let e 
console.log(typeof e) // Op: Undefined
//........
let f =10;
let g=f;
console.log(f);// Op: 10
console.log(g);// op: 10
//will change the f value
f=25
console.log(f);  //op: 25
console.log(g); //Op: 10   
//..............

//Reference...........(do you use the variable or object , u will the values automated that values changed in reference type)

//example of object
let address={ peru:"suba",vayasu :30};
let address2=address;
console.log(address);  //Op: {peru: 'suba', vayasu: 30}
console.log(address2);//op:{peru: 'suba', vayasu: 30}

//suppose will u change tha values...automsted change the values

address.vayasu=25
console.log(address); //  op:{peru: 'suba', vayasu: 25}
console.log(address2);//  op:{peru: 'suba', vayasu: 25}

//Examble of Array
let arr1=[10,20,30];
let arr2=arr1;
console.log(arr1); //op: [10, 20, 30]
console.log(arr2); //op: [10, 20, 30]
//add the value
 arr1.push(40);
 console.log(arr1);  //op:[10, 20, 30, 40]
console.log(arr2);    //op:[10, 20, 30, 40]
//.....................................................................................
 //object clone
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3); //..Op:{a: 1, b: 2, c: 3, d: 4}

//Spread operator use clone
const obj4={a:1,b:2};
const obj5={c:3,d:4};
const obj6={...obj4,...obj5};
console.log(obj6); //OP: {a: 1, b: 2, c: 3, d: 4}
//.........................................................................................................................................
//Array clone (multible ways)

//spread operator method
let originalarray=[1,2,3];
let dublicatearray=[4,5,6];
let samearray=[...originalarray,...dublicatearray];
console.log(samearray); //Op:[1,2,3,4,5,6]

//slice method
let originalarray1=[1,2,3];
let samearray1= originalarray1.slice();
console.log(samearray1); //Op:[1,2,3]

 //concat method
 let originalarray2=[1,2,3];
 let dublicatearray2=[4,5,6];
 let samearray2= originalarray2.concat(dublicatearray2);
 console.log(samearray2); //Op: [1, 2, 3, 4, 5, 6]

 //Array from
 let originalarray3=[1,2,3];
 let samearray3=Array.from(originalarray3);
 console.log(samearray3); //op:[1,2,3]

 //JSON.parse,,JSON.stringify method

 let originalarray4=[1,2,3];
 let samearray4 = JSON.parse( JSON.stringify(originalarray4));
 console.log(samearray4); // [1,2,3]
 //....................................................................................................................................
 //distructuring in javascript
//(1)
 let numbers=[1,2,3,4,5,]
//  let[A,B,C,D,E]=numbers;
//  console.log(A); // OP:1
//  console.log(B); // OP:2
//  console.log(C); // OP:3
//  console.log(D); // OP:4
//  console.log(E); // OP:5

 //suppose u have d value 5
  //(2)
//  let[A,B,C,,D]=numbers;
//   console.log(A); // OP:1
//   console.log(B); // OP:2
//   console.log(C); // OP:3
//   console.log(D);// Op: 5
// (3)
//suppose u have 3,4,5 value store in c ....using spread operator
 let [A,B,...C]=numbers;
 console.log(A);// op;1
 console.log(B);// OP:2
 console.log(C);// Op; 3,4,5
//.....................................................
 // nested array
 let nestedarray =[[1,2],[3,4],[5,6]];
 let [[A1,B1],[C1,D1],[E1,F1]]=nestedarray;
 console.log(A1);// Op:1
 console.log(B1);// Op:2
 console.log(C1);// Op:3
 console.log(D1);// Op:4
 console.log(E1);// Op:5
 console.log(F1);// Op:6

 // Object distucturing
//   let user3={names:'suba',ages:22,gender:"male"}
//   let {names,ages,gender}=user3
//   console.log(names);//Op: suba
//   console.log(ages);//op: 22
//   console.log(gender); //op: male

//Additional .unknown
  let user3={names:'suba',ages:22,}
  let {names,ages,gender="unknown"}=user3
  console.log(names);//Op: suba
  console.log(ages);//op: 22
  console.log(gender); //op: unknown
  //........
   //  nested Object distucturing
   let addressed={
    street:"kovil",
    city:"spn",
    state:"TN",
    pincode:621701
   }
    let embloyee={
        name2:"suba",
        ageses:22,
        gendered:"male",
        addressed
    }
let {name2,ageses,gendered,addressed:{street,city,state,pincode}}=embloyee;
console.log(name2);  //op:suba
console.log(ageses);//op:22
console.log(gendered);//op:male
console.log(street);//op:kovil
console.log(city);//op:spn
console.log(state);//op:TN
console.log(pincode);//op:621701
//................................................................................................................................
//...OBJECTS CREATE IN JS

//  (1) Literals (basic)
//  (2) constructor
//  (3) .create method()
//  (4) using class

//(1) literals
 
var details11= {
    name:"subananthan",
    age:22,
    gender:"male"
}
console.log(details11); //op:{name: 'subananthan', age: 22, gender: 'male'}

//(2) contructor method

var person=new Object();
person.name="subash",
person.age=22,
person.gender="male"

console.log(person); // op:{name: 'subash', age: 22, gender: 'male'}

// (3) .create method

const personProto={
    hello:function(){
console.log(`hello my name is ${this.name}`);
}
}

const person22=Object.create(personProto);
    person22.name='suba';
    person22.age=20;
    person22.gender="male";

    console.log(person22); //op:{name: 'suba', age: 20, gender: 'male'}
    person22.hello(); //op:hello my name is suba



//using class
// class Subash{
//     constructor (name22,age22,gender22){
//         this.name=name22;
//         this.age=age22;
//         this.gender=gender22
//     }

// }
// const subash1=new Subash("suba",22,'male')
// console.log(subash1);

//......................................................................................................................
// Iteration javascript object
//   (1)- using the for in loop
//   (2)- using the object.key
//   (3)- using object.values 
//   (4)- using object.entries

// (1) using the for in loop
const user33={
    name:"suba",
    age:22,
    job:"developer"
}
for(let key in user33){
    console.log(`${key}:${user33[key]}`) 
    // OP:
    // name:suba
    // age:22
    // job:developer
}

// (2) using object .key
const keys=Object.keys(user33);
keys.forEach(key=>{
    console.log(`${key}:${user33[key]}`)
    // OP:
    // name:suba
    // age:22
    // job:developer
})

//   (3)- using object.values 

const values=Object.values(user33);
values.forEach(value=>{
    console.log(`${value}`)
    //op:
//   suba
//  22
// developer
})

//   (4)- using object.entries

const entries=Object.entries(user33)
entries.forEach(entry=>{
    console.log(`${entry[0]}:${entry[1]}`)
    // OP:
    // name:suba
    // age:22
    // job:developer
})

//(5) Normal for loop
for (let i=0;i<entries.length ;i++){
    console.log(`${entries[i][0]}:${entries[i][1]}`)
    // OP:
    // name:suba
    // age:22
    // job:developer
}
//......................................................................................................................................
 //FUNCTION

 //(1) function with return statement
 function add (a,b){
    return a+b;
 }
console.log(add(20,20));  //op; 40

//(2) Arbitrary function

function sum(){
 let total=0;
for(let i=0;i<arguments.length;i++){
    total+=arguments[i]
}
return total;
}
console.log(sum(12,12)); //op;40
console.log(sum(12,12,12));//op;70

//(3) function expression

const added=function(a,b){
    return a+b;
}
console.log(added(25,25));//op:50

// (4) Arrow function
 
const add1=(a,b)=>{
    return a+b ;
}
console.log(add(10,10)); // op:20

// arrow function with map()

let numbers44=[1,2,3,4]
let double=numbers44.map(number=>number*2)
console.log(double);  //op;[2, 4, 6, 8]

//arrow function with filter()

let words =['abble','orrange','banana','grape']
let fword=words.filter(word=>word.length>5);
console.log(fword); //op; ['orrange', 'banana']

// Arrow function with reduce
 let numbers1=[1,2,3,4,5]
 let total=numbers1.reduce((sum,numbers)=>sum+numbers,0);
 console.log(total); //op;15

 //..........................................................................................................................

 //..Call back function

 // (1) set timeout
//  setTimeout(function(){
//     console.log("hello")
//  },3000)//op; after 3 sec op;hello

//  setInterval(function(){
//     console.log("hii")
//  },3000) //op: every 3 sec u get op hii


// let tatkal=new Promise ((resolve,reject)=>{
//     let booking=false;
//     if(booking)
//     resolve(850)
//     else
//     reject()
// })
// tatkal.then(success).catch(failure)
// function success(amt){
//     console.log(`u r success u r amount is ${amt}`)
// }
// function failure(){
//     console.log("u r failure")
// }
//...........................................................................
//...promise
let reacA=new Promise((resolve,reject)=>{
const way=false;
 if(way)
 setTimeout(resolve,3000,"u r right") 
else
 reject ("u wrong")
})


//................................................................
//...async
async function status1(){
    try{
console.log('hiii')

res=await reacA
console.log(res)
console.log('bye')
    }
    catch(err){
        console.log(err)
    }
}
status1()