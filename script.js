// //your JS code here. If required.
// const inputText=document.getElementById("text")
// const delayNumber=document.getElementById("delay")
// const btn=document.getElementById("btn")
// const divElement=document.getElementById("output")

// async function myGreeting(){

//     await new Promise((resolve)=>{
//         setTimeout(()=>{
//           resolve()
//         },delayNumber.value)
//     })
//     divElement.innerText=inputText.value;
// }
// btn.addEventListener("click",()=>{
//     myGreeting()
// })

 let inputText=document.getElementById("text");
let delaytime=document.getElementById("delay")
let output=document.getElementById("output");
let btn=document.getElementById("btn");

async function myGreeting(){
await new Promise((resolve,reject)=>{
setTimeout(()=>{
	resolve()

},delaytime.value)

		output.innerText=inputText.value;

	})
}

btn.addEventListener("click",myGreeting)


