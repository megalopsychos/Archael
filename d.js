// function aa(){
//     console.log("first");
// }
// setTimeout(aa, 2000);

// (function() {
//     console.log("second");
// })();
// let a=new Function('console.log("constructor;")');
// a()
// let b=()=>{
//     console.log("Third");
// }
// function rollNumber(num){
//     console.log("Roll number is:",num);

// }
// setTimeout(rollNumber,2000,2200320150011);
// setTimeout(rollNumber,2000,2200320150054);

// function rollNumber(num,delay,nextroll){
//     setTimeout(()=>{
//         console.log("Roll number is: ",num);
//         if(nextroll) nextroll();
//     },delay)
// }
// rollNumber(1212,100,()=>{
//     rollNumber(12312,2000,()=>{
//         rollNumber(12233,3000,()=>{
//             rollNumber(121222,4000);
//         })
//     })
// })



// const promise=new Promise(function(resolve,reject){
//     console.log("First Promise");
//     resolve("Resolved");
// });

// let promise=new Promise((resolve,reject) => {
//     reject({user : "Anant", pass: "12644"});

// })
// promise.then((data) => {
//     console.log(data);
//     return data;
// }).then(
//     (res) => {
//         console.log(res.user);
//     }).catch(()=>{
//         console.log("error");
//     }).finally(() => {
//         console.log("finally");
//     })

// roll(12131,100).then(()=> {
//     roll(1872,200).then(() => {
//         roll(12242,300).then(()=>{
//             console.log("all rolls are done.");
//         })
//     })
// })

// function getRoll(num,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Roll no. is ", num);
//             resolve("Successfully Done");
//         }), delay);
//     }
// }
// function getRoll(num, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Roll no. is ", num);
//             resolve("Successfully Done");
//         }, delay);
//     });
// }

// async function printRollNumber(){
//     await getRoll(1,1000);
//     await getRoll(2,2000);
//     await getRoll(3,3000);
// }
// printRollNumber();


// function orderFood(item, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Your food item is", item);
//             resolve(item + " is ready!");
//         }, delay);
//     });
// }

// async function restaurant() {
//     const food1 = await orderFood("Pizza", 2000); 
//     console.log(food1);

//     const food2 = await orderFood("Burger", 3000); 
//     console.log(food2);

//     const food3 = await orderFood("Pasta", 1000);  
//     console.log(food3);
// }

// restaurant();


//API Data fetching 

let url = "https://api.github.com/Anant10";
let b = fetch(url);

b.then((data) => {
    console.log(data);  
    return data.json(); 
}).then((data) => {
    console.log(data);  
}).catch(() => {
    console.log("error");  
}).finally(() => {
    console.log("first");  
});
async function fetchData() {
    let url = "https://api.github.com/users";  
    try {
        let response = await fetch(url);  
        let data = await response.json();  
        console.log(data);  
    } catch (error) {
        console.log("error", error);  
    } finally {
        console.log("first");  
    }
}

fetchData();  
 
create a html page when i click search button the data will appear like image bio public repos with heading Github  basically redirect it to the webpage 