//your JS code here. If required.
 
const formelemnt=document.querySelector("form")

function myGreeting() {
        // console.log(formelemnt[1].id)
        // console.log(formelemnt[0].id)
	const divelement=document.getElementById("output")
	divelement.innnerText=formelemnt[0].value;

	
}
 window.setTimeout(myGreeting,formelemnt[1].value)



// 	function callme(){
// const divElement=document.getElementById("output")
// divElement.innerHTML="Hello, world!"
// }
// window.setTimeout(callme,1000)

	
}