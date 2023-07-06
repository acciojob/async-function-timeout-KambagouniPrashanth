//your JS code here. If required.
const inputText=document.getElementById("text")
const delayNumber=document.getElementById("delay")
const btn=document.getElementById("btn")
const divElement=document.getElementById("output")
async function displayafterdelay(){

    await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve()
        },delayNumber.value)
    })
    divElement.innerText=inputText.value;
}
btn.addEventListener("click",()=>{
    displayafterdelay()
})


