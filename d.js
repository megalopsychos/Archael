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

function rollNumber(num,delay,nextroll){
    setTimeout(()=>{
        console.log("Roll number is: ",num);
        if(nextroll) nextroll();
    },delay)
}
rollNumber(1212,100,()=>{
    rollNumber(12312,2000,()=>{
        rollNumber(12233,3000,()=>{
            rollNumber(121222,4000);
        })
    })
})



const promise=new Promise(function(resolve,reject){
    console.log("First Promise");
    resolve("Resolved");
});

