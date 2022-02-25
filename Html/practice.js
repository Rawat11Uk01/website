// let number = 19;
// let userGuess = prompt("guess a number");
// if(userGuess===number){
//     console.log("you are right");
// }else{
//     if(userGuess<=18){
//         console.log("too low")
//     }else{
//         if(userGuess>=19){
//             console.log('too high')
//         }
//     }
// }
// var day = +prompt('choose a num');
// switch(day){
//     case (day===1): console.log('sunday');
//     break;
//     case (day=0): console.log('monday')
// }
// let num= 0;
// while(num<=9){
//     console.log(num);
//     num++;
// }
// let num =10;
// let total = 0;
// let i = 0;
// while(i<=10){
//     total = total + i;
//     i++;
// }
// console.log(total);
// let num = 10;
//  let total = 0;
//  let i = 0;
//  while(i<=10){
//      total= total +i;
//      i++
//  }
//  console.log(total)
// let total = 0;
// for(let i=0; i<=10; i++){
//     if(i===8){
//         break;
//     }
// total=total+i;

// }
// console.log(total);
// let arr = ['mango', 'banna', 'apple'];
// let newArr = arr.slice(0);
// console.log(newArr);
// let arr = ['mango', 'banna', 'apple'];
// let i=0;
// const arr2 = [];
// while(i<arr.length){
//     arr2.push((arr[i]));
//     i++;
// }
// console.log(arr2)
// let arr = ['mango', 'banna', 'apple'];
// for(let array of arr){
//     console.log(array);
// }
// const myArray = ['value1', 'value2', 'value3', 'value4'];
// let [name, age, ...arr1] = myArray;
// console.log(arr1)
// const person = {
//     name: 'rawat',
//     'my age': '23',
//     hobbies: ['one', 'two', 'three']

// };
// for(let keys in person){
//     console.log(`${keys}: ${person[keys]}`);
// }
// console.log(Object.keys(person))
// for(let key of Object.keys(person)){
//     console.log(person[key])
// }
// const key1 = 'objkey1';
// const key2 = 'objkey2';
// const value1 = 'myvalue1';
// const value2 = 'myvalue2';

// var myObj = new Object;
// myObj[key1] = value1;
// myObj[key2] =  value2 ;
// console.log(myObj);
// var obj ={
//     [key1]: value1,
//     [key2]: value2,
// }
// console.log(obj)

// const newObj = [...'abc'];
// console.log(newObj)
// const obj1 ={
//     key1 : 'value1',
//     key2 : 'value2',
// }
// const obj2 ={
//     key3 : 'value3',
//     key4 : 'value4',
// }
// // const newObj = {...obj1, ...obj2}
// const newObj = {...obj1}
// console.log(newObj)

// const band = {
//     bandName: "led zepplin",
//     famousSong: "stair-way to heaven",
//     age:12,
//     love: 16,


// };
// const bandName =band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);
// let {bandName, famousSong, ...restObj}=band;
// console.log(bandName);
// console.log(restObj);\
// const arr = [
//     {firstName:'kashish', age: 12, gender:'male'},
//     {firstName:'rawat', age: 34, gender:'male'},
//     {firstName:'negi', age: 43, gender:'male'}];
    // for(let array of arr){
    //     console.log(array.firstName);
    // }
    // let [{age}, , {gender}] = arr;
    // console.log(gender);
    // function fun(a){
    //    return a%2===0;
    // }
    // console.log(fun(6));
    // function a(d){
    //     return d.slice(0,1);
    // }
    // console.log(a('love'));
    // let fun=(a,b)=>{
    //     for(let i=0; i<a.length; i++){
    //         if(a[i]===b){
    //             return i
    //         }
    //         }
    //     return -1;  
    
    // }
        
    
    // console.log(fun([0,1,2,6],6));

    // function fun(a,b=0){
    
    //     return a+b;
    // }
    // console.log(fun(5,6))

    // function fun(a,b,...c){
    //     console.log(`a is ${a}`);
    //     console.log(`b is ${b}`);
    //     console.log(`c is ${c}`);
    // }
    // fun(1,2,3,4,5,6,7);
//     function addAll(...numbers){
//         let total =0;
//   for(let number of numbers){
//      total = total + number;
     
//   }return total
//     }
//     console.log(addAll(1,23,4,53,2,23,4));
// function ass(){
//     console.log('why are you');
// }
// function ab(callback){
//     console.log(callback)
//     console.log('hello world')
//     callback();
// };
// ab(ass);
// function myFun(){
//     function hello(){
//         console.log('hello world')
//     }return hello;
// }
// const aws = myFun();
// aws();
// const numbers = [4,2,5,8];

// function fun(number, index){
//     console.log(`index no is ${index}`);
//     console.log(`${number}*2=${number*2}`)
// }
// for(let i=0 ; i< numbers.length; i++){
//     fun(numbers[i], i);
    
//     }
// numbers.forEach(fun);'

// const person = {
//     name: 'rawat',
//     age: '12',
//     arr: [1,2,3]
// }
// const arr = [
//         {firstName:'kashish', age: 12, gender:'male'},
//         {firstName:'rawat', age: 34, gender:'male'},
//         {firstName:'negi', age: 43, gender:'male'}];

//         for(let array of arr){
//             console.log(array.firstName)
//         }
// var obj ={
//     name: "rawat",
//     age: 12,
// }
// function fun({name,age}){
//     console.log(name);
// }
// fun(obj);

// function one(){
//     console.log('shree RAM')
// }
// function a(b){
//     console.log(b);
//     one();
// }
// a(one);
// let array = [2,3,4,5,];
// function mul(element, index){
// console.log(`${index} and ${element}*2 =${element*2}`)

    
// }

// for(let i=0; i<array.length; i++){
//     mul(array[i],i);
// }
// array.forEach((element,index)=>{
//     console.log(`${index} and ${element}*2 =${element*2}`)
// });
// const arr = [
//         {firstName:'kashish', age: 12, gender:'male'},
//         {firstName:'rawat', age: 34, gender:'male'},
//         {firstName:'negi', age: 43, gender:'male'}];
// for(let array of arr){
//     console.log(array.firstName)
// }
// arr.forEach(function(element){
//     console.log(element.firstName)
// })
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i].firstName)
// }
// const array1= [2,4,6,8,10];
// const square = function(number){
//     return number*number
// };
// console.log(array1.map(square));
// const arr = [
//             {firstName:'kashish', age: 12, gender:'male'},
//             {firstName:'rawat', age: 34, gender:'male'},
//             {firstName:'negi', age: 43, gender:'male'}];

// const newarr = arr.map((element,index)=>{
// return element.firstName
// })
// console.log(newarr.length);
// const array1= [2,4,6,8,10,1,2,34];
// function asd(element){
//     return element%2===0;
// }
// const newArr = array1.filter((element,index)=>{
//     return element%2===0;
// })
// console.log(newArr)
// const array1= [2,4,6,8,10,1,2,34];
// const newA =array1.reduce((a,b)=>{
//     return a += b;
// });
// console.log(newA)
// const userCart = [
//     {productId:1 , productName: 'mobile', price:2000},
//     {productId:2 , productName: 'laptop', price:2000},
//     {productId:1 , productName: 'tv', price:2000},
// ];
// let total = 0;
// for(let i=0; i<userCart.length; i++){
    
//     total = total + userCart[i].price;
    
// }
// console.log(total)
// const total =userCart.reduce((accumulater,element)=>{
// return accumulater + element.price;
// },0)
// console.log(total)
// const num = [1,5,3,6,9,3,2,68,4];
// const newa =num.sort((a,b)=>{
// return b-a;
// });
// console.log(newa);

// const products = [
//     {productId: 1, productName: 'tv', price:200},
//     {productId: 2, productName: 'mobile', price:100},
//     {productId: 3, productName: 'tov', price:500},
//     {productId: 4, productName: 'tiv', price:600},
//     {productId: 5, productName: 'tev', price:90},
// ];

// let newP =products.slice(0).sort((a,b)=>{
//     return (a.price - b.price)
// });
// console.log(newP);

// const myArr = ['cat', 'dog', 'dogs', 'duck'];
// const oK =myArr.find((string)=>{
// return string.length ===3;
// });
// console.log(oK);

// const products = [
//     {productId: 1, productName: 'tv', price:200},
//     {productId: 2, productName: 'mobile', price:100},
//     {productId: 3, productName: 'tov', price:500},
//     {productId: 4, productName: 'tiv', price:600},
//     {productId: 5, productName: 'tev', price:90},
// ];
// const userId = products.find((pI)=>
//  pI.productId === 3);

// console.log(userId)


// const products = [
//     {productId: 1, productName: 'tv', price:200},
//     {productId: 2, productName: 'mobile', price:100},
//     {productId: 3, productName: 'tov', price:500},
//     {productId: 4, productName: 'tiv', price:600},
//     {productId: 5, productName: 'tev', price:90},
// ];
// const userCart = products.every((elem)=>
// elem.price <= 500
// );
// console.log(userCart);

// const numbers = [1,2,3,4,5,8,4,2,7];
// const newNum = numbers.some((num)=> num%2==0);
// console.log(newNum);
// const number = new Set();
// number.add(22);
// number.add([1,2,34])
// number.add([1,2,34])
// number.add(22);
// number.add(23);
// number.add(24);
// number.add(25);number.add(22);
// number.add(26);
// for(let numbers of number){
//     console.log(numbers)
// }
// console.log(number)
// const myArray = [1,2,3,3,4,5,6];
// const unq = new Set(myArray);
// let length = 0;
// for(let element of unq){
//   length++;
// }
// console.log(length);



// const person = new Map();
// person.set('firstName', "rawat");
// person.set('age', 23);
// person.set(1, "one");
// person.set([1,2,3,4], 2);
// for(let keys of person.keys()){
// console.log(keys);};

// console.log(person.get(1));
// console.log(person.keys());
// console.log(person);

// const person = new Map();
// person.set('firstName', "rawat");
// person.set('age', 23);
// person.set(1, "one");
// for(let [keys,value] of person){
//     console.log(keys,value)
// }
// const person1 = {
//     name: 'kashish',
//     age: 12,
// };
// const exreaInfo = new Map();
// exreaInfo.set(person1, {id: 20, gender: 'male'});
// console.log(exreaInfo.get();
// function personInfo(fav){
//     console.log(`${this.name}` ,fav)
// }
// const person1 = {
//     name: 'kashish',
//     age: 18,
//     about: personInfo,
// }
// const person2 = {
//     name: 'rawat',
//     age: 18,
//     about: personInfo,
// }
// person2.about();
// function about(a,b){
//     console.log(this.name ,this.age ,a ,b);
// }
// const user1 = {
//     name: 'kashish',
//     age: '20',
  
// }
// const user2 = {
//     name: 'rawat',
//     age: '30',
    
// }
// const func =about.bind(user2, 'as','sd');
// func();


///////create function to create multiple object/////
// const userMethods = {
//     about: function(){
//         return `${this.firstName} ${this.age}`
//         },
//     is18 : function(){
//         return this.age >= 18;
//     },
// }
// function createuser(firstName,lastName,email,age,address){
//     const user=Object.create(createuser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
  
// return user;
// }
// createuser.prototype.about = function(){
//             return `${this.firstName} ${this.age}`
//             };
// createuser.prototype.is18 =
//     function(){
//        return this.age >= 18;
//    };
// const user1 = createuser('kashish','rawat','kashishrawat308@gmail.com',18,'masi');
// const user2 = createuser('negi','rawat','kashishrawat308@gmail.com',18,'masi');
// const user3 = createuser('bisht','rawat','kashishrawat308@gmail.com',18,'masi');
// console.log(user1);
// const about = user2.about();
// console.log(about);

// function createuser













// const obJ1= {
//     key1: 'value1',
//     key2: 'value2',
// }
// const obJ2 = Object.create(obJ1);
// obJ2.key3 = 'value3';
// console.log(obJ2.key2)






// #####################################################


// function myFunction(power){
//     return function(number){
//         return number**power
//     }
// }
// const ans = myFunction(2);
// const square = ans(3);
// console.log(square);

// function func(){
//     return function(){
// console.log('hi you called me')
//     }
// }
// const reT = func();
// reT();





// ###############Dom################
// const mainheading =document.querySelector('#main-heading');
// console.log(mainheading.textContent)

// mainheading.textContent = 'this is the end';
// console.log(mainheading.textContent)


// const mainheading = document.querySelector('div.headline h2');
// console.log(mainheading);
// mainheading.style.backgroundColor = 'blue';

// const link = document.querySelector('a');
// link.setAttribute("href", "https://google.com");
// console.log(link.getAttribute('href').slice(1))



// const link = document.querySelector('.form-todo input');
// console.log(link.getAttribute('type'))

// const navItems = document.getElementsByTagName("a");
// for(let items of navItems){
//     console.log(items)
    // const navItem =navItems[i];
//     items.style.backgroundColor = '#fff';
//     items.style.color = 'green'
// }
// const headline = document.querySelector('.headline');
// console.log(headline.innerHTML);
// headline.innerHTML = ''



// const rootNode = document.getRootNode();
// const htmlelementNode =rootNode.childNodes[0];
// console.log(htmlelementNode.childNodes) NodeList(3) [head, text, body]
// const headElementNode = htmlelementNode.childNodes[0];
// const textElementNode  = htmlelementNode.childNodes[1];
// const bodyElementNode  = htmlelementNode.childNodes[2];
// console.log(bodyElementNode );
// console.log(headElementNode );
// console.log(textElementNode );
// console.log(headElementNode.nextElementSibling)


// const tagSelector = document.querySelector('h1');
// console.log(tagSelector);
// const parentDiv = tagSelector.parentNode;
// console.log(parentDiv)

// parentDiv.style.backgroundColor = '#333'; 

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');


// const newtodoItem = document.createElement('li');
// const newtodoItemText = document.createTextNode('why not me');
// newtodoItem.append(newtodoItemText);
// const todo1 = document.querySelector('.todo-list');
// todo1.append(newtodoItem);
// console.log(newtodoItem);


// const todo1 = document.querySelector('.todo-list li')
// todo1.remove();


// const newtodoItem = document.createElement('li');
// newtodoItem.textContent = "why not me";
// const todo1 = document.querySelector('.todo-list');
// todo1.before(newtodoItem) ;
// const btnHeadline = document.querySelector('.btn-headline');
// function rawat(){
    // console.log('yu huuuuu')
// }
// btnHeadline.addEventListener('click', rawat)


// const allButtons = document.querySelectorAll('button');
// for(let button of allButtons){

//     button.addEventListener('click', function(){
//         console.log(this.textContent)
//     })}
//     allButtons.forEach((button){
//         button.addEventListener('click', function(){
//             console.log(this.textContent)
//     });
// });
// const allButtons = document.querySelectorAll('button');
// for(let button of allButtons){

//     button.addEventListener('click', (a)=>{
//         console.log(a.currentTarget)
//     })}
// const allButtons = document.querySelectorAll('.my-buttons button');
// for(let button of allButtons){

//         button.addEventListener('click', (e)=>{
//             e.target.style.backgroundColor = 'yellow';
//             e.target.style.color = 'grey';
//         })}

// const mainButton = document.querySelector('button');
// const bodyA = document.body;
// const currentColor = document.querySelector('.currentColor');
// function randomColorGenerator(){
//     const red = Math.floor(Math.random()*256);
//          const green = Math.floor(Math.random()*256);
//          const blue = Math.floor(Math.random()*256);
//          const randomColor = `rgb(${red},${green},${blue})`
//          return randomColor;
// }
// mainButton.addEventListener('click',()=>{
//     const randomColor = randomColorGenerator();
//       bodyA.style.backgroundColor = randomColor
//   currentColor.textContent = randomColor;

// })

// mainButton.addEventListener('click', ()=>{
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const changeColor = `rgb(${red},${green},${blue})`
//   mainButton.style.color = changeColor
//   bodyA.style.backgroundColor = changeColor
//   currentColor.textContent = changeColor;
// })
// const one = document.body;
// const mainButton = document.querySelector('.btn-headline');

// mainButton.addEventListener('mouseover',()=>{
//     console.log("man");
// })
// for(let i=0; i<10000; i++){
//     console.log('i')
// }
// console.log('hiii')
// console.log('hello world');

// setTimeout(()=>{
//     console.log('hello world');
// },1000);
// console.log('rawat');

// console.log('script start');
// setInterval(()=>{
//     console.log(Math.random());
// },1000);
// console.log('hiii');


// console.log('script start');
// setInterval(()=>{
//     let total =0;
//     for(let i=0; i<1000000000000; i++){
//         total += i;
//      };
//      console.log(total);
//      console.log(Math.random());
// },500);
// console.log('script end');



// const body = document.body;
// const button = document.querySelector('button');
// const intervalId =setInterval(() => {
//     const red = Math.floor(Math.random()*255);
//     const green = Math.floor(Math.random()*255);
//     const blue = Math.floor(Math.random()*255);
//     const rgb = `rgb(${red}, ${green}, ${blue})`
//     body.style.backgroundColor = rgb;
// }, 1000);
// console.log(intervalId);

// button.addEventListener('click', ()=>{
//     clearInterval(intervalId);
//     button.textContent = body.style.background;
// })

// function getTwoNumbers(number1, number2, onSuccess, onfailiure){
//     if(typeof number1 === "number"&&typeof number2 === "number"){
      
//         onSuccess(number1,number2);
//     }else{
//         onfailiure();
//     }
 
// }
// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// getTwoNumbers('5',4,(num1,num2)=>{
//     console.log(num1+num2);
// },()=>{
//     console.log('ldu')
// });




// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');
// setTimeout(()=>{
//     heading1.textContent = 'heading1';
//     heading1.style.color = 'violet';

//     setTimeout(()=>{
//         heading2.textContent = 'heading2';
//     heading2.style.color = 'purple';
//     setTimeout(()=>{
//         heading3.textContent = 'heading3';
//     heading3.style.color = 'red';
//     setTimeout(()=>{
//         heading4.textContent = 'heading4';
//     heading4.style.color = 'pink';
//     setTimeout(()=>{
//         heading5.textContent = 'heading5';
//     heading5.style.color = 'green';
//     setTimeout(()=>{
//         heading6.textContent = 'heading6';
//     heading6.style.color = 'blue';
//     setTimeout(()=>{
//         heading7.textContent = 'heading7';
//     heading7.style.color = 'brown';
    
//     },1000);
//     },3000);
//     },2000);
//     },1000);
    
//     },2000);
//     },2000);
    
// },1000) ;

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');
// function changeText(element, text, color, time, onSuccessCallback, onfailiureCallback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
            
//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }
//         }else{
//             if(onfailiureCallback){
//                 onfailiureCallback();
//             }
//         }
//     },time)
// };
// changeText(heading1, 'one', 'green', 1000,()=>{
//     changeText(heading2, 'two', 'purple', 2000,()=>{
//         changeText(heading3, 'three', 'red', 3000,()=>{

//         },()=>{
//             console.log('h3 does not exist')
//         })
//     },()=>{
//         console.log('h2 does not exist')
//     })
// },()=>{
//     console.log('h1 does not exist')
// })

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');

// function changeText(element,text,color,time,onSuccessCallback,onfailiureCallback){
//     setInterval(()=>{
//         if(element){
//             element.textContent = text;
//         element.style.color = color;
//         if(onSuccessCallback){
//             onSuccessCallback();
//         }
//         }else{
//             if(onfailiureCallback){
//                 onfailiureCallback();
//             }
//         }
        
//     },time)
// }
// changeText(heading1,'one','yellow',1000,()=>{
//     changeText(heading2,'two','purple',2000,()=>{

//     },()=>{
//         console.log('your element dose not do shit')
//     })
// },()=>{
//     console.log('your element dose not do shit')
// })

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// const friedRicePromise =new Promise((resolve,reject)=>{
// if(bucket.includes('vegetables') && bucket.includes("salt") && bucket.includes('rice')){
//     resolve('fried rice')
// }else{
//     reject('could not do it')
// }
// });

// friedRicePromise.then((myFriedRice)=>{
// console.log('lets eat it', myFriedRice);
// },((error)=>{
// console.log(error)
// }))

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }
// myPromise().then(()=>{
//     console.log('resolved')
// }).catch(()=>{
//     console.log('rejected')
// })

// function newP(){
//    return new Promise((resolve,reject)=>{
// resolve('foo')
// });
// };
// newP().then((value)=>{
// console.log(value);
// return value+= "bar";
// }).then((value)=>{
// console.log(value)
// })



// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');

// function changeText(element,text,color,time){
//     return new Promise((resolve,reject)=>{
//         setInterval(()=>{
//             if(element){
//             element.textContent = text;
//             element.style.color = color;
//             resolve();
//             }else{
//                 reject();
//                 }
//             },time);
//     })
   
        
//     };

// changeText(heading1,"one","yellow",1000)
// .then(()=>changeText(heading2,"two","white",1000))
// .then(()=>changeText(heading3,"three","blue",1000))



// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open('get', url);
// xhr.onreadystatechange = function(){
//     console.log(xhr);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }
// xhr.send();

// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest;
// console.log(xhr);
// step 1
// xhr.open('get', url);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState===4){
//         // console.log(xhr.response);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data)
//     }
// }

// xhr.onload = function(){
//     console.log(xhr.readyState);
//     const response = xhr.response;
//             const data = JSON.parse(response);
//             console.log(data)

// }
// xhr.send();

// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState ===4){
//         const response =xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }
// xhr.onload = function(){
//     const response =xhr.response;
//             const data = JSON.parse(response);
//             console.log(data);
// }

// xhr.open('get', url);
// xhr.send();

// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open('get',url)
// xhr.onload = function(){
//     if(xhr.status===200&&xhr.status<300){
//         const data =JSON.parse(xhr.response);
//         console.log(data);
//         const id = data[3].id;
        // console.log(id)
//         const xml2 = new XMLHttpRequest();
//         const url2 = `${url}/${id}`
//         xml2.open('get', url2);
//         xml2.onload=(()=>{
//             const data2 = JSON.parse(xml2.response);
//             console.log(data2)
//         })

//         xml2.send();
//     }else{
//         console.log('something went wrong')
//     }
//     xhr.onerror= (()=>{
//         console.log('network error');
//     })
// }
// xhr.send();

// const url = "https://jsonplaceholder.typicode.com/posts";
// function sendRequest(method,url){
// return new Promise((resolve,reject)=>{
// const xml = new XMLHttpRequest();
// xml.open(method, url);
// xml.onload= function(){
//     if(xml.status>=4&& xml.status<300){
//         resolve(xml.response);
//     }else{
//         reject(new Error('something went wrong'));
//     }
// }
// xml.onerror = function(){
//     reject(new Error('something went wrong'));
// }
// xml.send();
// })
// }
// sendRequest('get', url).then(response=>{
//     const data = JSON.parse(response);
//     console.log(data);
//     return data;
// }).then(data=>{
//     const id = data[3].id;
//     return id;
// }).then(id=>{
//     const url2 = `${url}/${id}`;
//     return sendRequest('get',url2);
// }).then(newResponse=>{
//     const data2 = JSON.parse(newResponse);
//     console.log(data2)
// }).catch(error=>{
// console.log(error)
// })


// const url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url).then((response)=>{
// return response.json()
// }).then(data=>{
//     console.log(data)
// })


// const year = 2020;
// if(year%4===0){
//     if(year%100===0){
//         if(year%400===0){
//             console.log('given year is a leap year');
//         }else{
//             console.log('given year is not a leap year');
//         }
//     }else{
//         console.log('given year is a leap year');
//     }
// }else{
//     console.log('given year is not a leap year');
// }


// var num=0;
// do{
//     num++;
    
// }while(num<10);
// console.log(num)



// const arr = [2,3,56,42,56,575,2,25,7,4];
// const newarr = arr.map((a,b,c)=>{
// return a/2;
// })
// console.log(newarr)


// let arr = [
//     ['zone-1', 'zone-2'],
//     ['zone-3', 'zone-4'],['zone-5',' zone-6'],['zone-7', 'zone-8']
// ];
// let newArr = arr.reduce((a,b)=>{
// return a.concat(b);
// })
// console.log(newArr)

// let a = 'asddd';
// console.log(a.search('d'))

// let a = "         'one','two','three','two'";
// console.log(a.trim())

// const currentDate = new Date();
// const nDate = currentDate.setMonth(2);
// console.log(nDate);


// console.log( Math.max(12,3,4,6,7,8,6,4,34,4))

// const bioData = {
//     name: 'kashish',
//     surname: 'rawat',
//     'age': 23,
//     gender: 'male',
//     newName: {
//         name: "ok"
//     },
//     'person hobbies':
//     'fighting'
// }
// console.log(Object.keys(bioData));
// for(let key of Object.keys(bioData)){
//     console.log(bioData[key])
// }
// console.log(bioData['person hobbies'])

// const person = {
//     name: 'rawat',
//     age : 23,
//     hobbies: ['one','two','three']
// };
// for(let key in person){
//     console.log(`${key}:${person[key]}`)
// }

// const myObj = new Object;
// myObj['key1']= 'value1';
// myObj['key2']='value2';
// console.log(myObj)

// const obj1 = {
//     name1: 'kashish',
//     surname1: 'rawat',
//     age1: 12,
// }
// const obj2 = {
//     name: 'negi',
//     surname: 'negi',
//     age: 102,
// }
// const newObj ={...obj1 , ...obj2};
// console.log(newObj)

// const band = {
//     bandName: 'led',
//     "famous song": 'love'
// }

// let{bandName:var1,"famous song":var2 }= band;
// console.log(var1)

// const arr = [
//     {name:'kashish', surname:'rawat', age:12},
//     {name:'kartik', surname:'bisht', age:22},
//     {name:'lucky', surname:'negi', age:32},
// ];
// let[{name}, , {surname}]=arr;
// console.log(surname)


// function fun(a,b,...c){
//     return(a+b+c);
// }
// const fun1 = fun(1,2,[1,2,35,2,6,3,4]);
// console.log(fun1)


// function one(){
//     console.log('why');
// };
// function two(a){
//     console.log(a);
//     one();
// }
// two(one);

// const number = [1,34,32,56,22];

// number.forEach((element,index)=>{
//     console.log(`${element},${index}`);
// });

// const number = [2,4,6,4,2,5];
// function square(element){
//     console.log(element*element)
// }
// number.(square);


// const userCart = [
//     {productId:1, ProductName: "mobile", price:2000},
//     {productId:2, ProductName: "tv", price:4000},
//     {productId:3, ProductName: "headPhone", price:6000},
// ];
// const total = userCart.reduce((current,element)=>{
//     reduce account += element.price;
// },0)
// console.log(total)

// const numbers = [5,9,200,400,3000,54];
// const what =numbers.fill(0,2,5);


// const person = new Map();
// person.set('firstName', "rawat");
// person.set('age', 21);
// person.set('gender', "male");
// person.set(1, "whatt");
// person.set(15, 32);
// person.set('ass', "dsa");

// for(let [p,v] of person){
//     console.log(p,v)
// }


// const obj = {
//     name: 'rawat',
//     age: 12,
// };
// const Obj = Object.assign({},obj)
// console.log(obj)
// obj['gender']= 'male';
// console.log(obj)
// console.log(Obj)


// const numbers = new Set();
// numbers.add(1);
// console.log(numbers)
// function personInfo(){
//     console.log(`person name is ${this.firstname} and person id is ${this.id}`);
// }

// const person1={
//     id: 1,
//     firstname: 'kashish',
//     about: personInfo
//     }
//     const person2={
//         id: 2,
//         firstname: 'fd',
//         about: personInfo,
//         }
    
//         const person3={
//             id: 3,
//             firstname: '23',
//             about: personInfo
//             }
//             person1.about();
        

// function about(){
//     console.log(`${this.firstName},${this.age}`)
// }
// const user1 = {
//     firstName: 'kasish',
//     age: 21,
   
// }

// const user2 = {
//     firstName: 'rawat',
//     age: 32,
   
// }
// about.call(user2)


// const userMethods ={
//     about : function(){
//         console.log(`${this.firstName},${this.lastName}`);
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }
// function createUser(firstName, lastName, email,age,address){
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
    

   
// return user;
// };
// createUser.prototype.about = function(){
//     return(`${this.firstName},${this.lastName}`);
// }
// createUser.prototype.is18 = function(){
//           return this.age>=18;
// }
// const user1 =createUser('kashish','rawat',"@gmail.com",19,"masi");
// console.log(user1.about())



// function createUser(firstName,age){
//     this.firstName= firstName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     return(`${this.firstName}`)
// }
// const user1 = new createUser('kashish', 19);

// console.log(user1.about())

// let numbers = [1,2,3,4,5];
// Object.getPrototypeOf(numbers);
// console.log(numbers)


// class createUser{
//     constructor(firstName,lastName,age,email,address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about(){
//            return(`${this.firstName},${this.lastName}`);
//     }
// }
// const user1 = new createUser('kashish', 'rawat','@gmail.com',21,'masi');
// console.log(Object.getPrototypeOf(user1));


// class Animal{
//     constructor(name,age){
//         this.name= name,
//         this.age= age;
//     }
//     eat(){
//         console.log(`${this.name} is eating`)
//     }
//     isSupercute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// };
// class Dog extends Animal{
// constructor(name,age,speed){
//     super(name,age);
//     this.speed = speed;
// }
// fun(){
//     return(`stupid dog is running at ${ this.speed} miles per hours`)
// }
// }
// const dog1= new Dog('rambo',8,45);
// console.log(dog1.fun())
// const mainheading = document.querySelector('div.headline h2')
// console.log(mainheading);
// mainheading.style.color = 'black'

// const link = document.querySelector('a');
// console.log(link.getAttribute('href').slice(1));
// link.setAttribute('href', 'https://google.com')
// console.log(link.getAttribute('href'));

// const navItem = document.getElementsByTagName("a");
// for(let i=0;i<navItem.length; i++){
//     console.log(navItem[i])
//     const navItems = navItem[i];
//     navItems.style.color = 'black';
//     navItems.style.backgroundColor = 'white';
// }

// const headline = document.querySelector('.headline');
// console.log(headline.innerHTML)
// headline.innerHTML = "<h1> Inner Html has changes</h1>"
// headline.innerHTML += "<button class=\" btn\">click more</botton>"
// console.log(headline.innerHTML)



// const rootNode = document.getRootNode();
// const htmlElementNode =rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);
// const headElement = htmlElementNode.childNodes[0];
// console.log(headElement.childNodes);

// const heading = document.querySelector('h1');

// const parentElem = heading.parentNode;
// console.log(parentElem);
// parentElem.style.backgroundColor = 'black'

// const todoList = document.querySelector('.todo-list ');
// console.log(todoList.innerHTML)
// todoList.innerHTML += "<li>New todo</li>"

// const newTodoItem = document.createElement('li');
// newTodoItem.textContent = 'teach me';
// const todoList = document.querySelector('.todo-list ');
// todoList.append(newTodoItem);

// console.log(newTodoItem);
// const ul = document.querySelector('.todo-list ');
// const li = document.createElement('li');
// li.textContent = "kahi na kahi";
// ul.append(li);


// const btn = document.querySelector(".btn-headline");
// function btnClick(){
//     console.log('hiii')
// }
// btn.addEventListener('click',(()=>{
//     console.log('hiii')
// }));

// const allButtons = document.querySelectorAll("button");
// for(let button of allButtons){
//     button.addEventListener('click',function(){
//         console.log(this.textContent)
//      });
// }
// allButtons.forEach(function(button){
//     button.addEventListener('click',function(){
//         console.log(this.textContent)
//      });
// });
// function ram(){
//     console.log("HEY RAM");
// }
// setTimeout(ram,1000)





// const id = setTimeout(()=>{
//     console.log('rawat')
// },1000);
// clearTimeout(id)
// console.log(id);

// function myFunc(number1,number2,onSuccess,onfailiure){
//  if(typeof number1==='number'&&typeof number2==='number'){
//     onSuccess(number1,number2);
//  }else{
//     onfailiure();
//  }
    
// }

// myFunc(55,'4',((num1,num2)=>{
// console.log(num1+num2);
// }),(()=>{
//     console.log('wrong data please')
// }));

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');
// setTimeout(()=>{
//     heading1.textContent= 'heading1';
//     heading1.style.color = 'violet';
//     setTimeout(()=>{
//         heading2.textContent= 'heading2';
//         heading2.style.color = 'blue';
//         setTimeout(()=>{
//             heading3.textContent= 'heading3';
//             heading3.style.color = 'yellow';
//             setTimeout(()=>{
//                 heading4.textContent= 'heading4';
//                 heading4.style.color = 'green';
//                 setTimeout(()=>{
//                     heading5.textContent= 'heading5';
//                     heading5.style.color = 'brown';
//                     setTimeout(()=>{
//                         heading6.textContent= 'heading6';
//                         heading6.style.color = 'purple';
//                         setTimeout(()=>{
//                             heading7.textContent= 'heading7';
//                             heading7.style.color = 'violet';
//                         },1000)
//                     },2000)
//                 },1000)
//             },3000)
//         },1000)
//     },2000)

// },1000)