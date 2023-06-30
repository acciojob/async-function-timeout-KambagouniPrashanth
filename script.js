//your JS code here. If required.
 
const formelemnt=document.querySelector("form")

function myGreeting() {
        // console.log(formelemnt[1].id)
        // console.log(formelemnt[0].id)
	const para=document.createElement("p");
	para.innnerText=formelemnt[0].value;
	formelemnt.appendChild(para);
	
}
 window.setTimeout(myGreeting,formelemnt[1])



// 	function callme(){
// const divElement=document.getElementById("output")
// divElement.innerHTML="Hello, world!"
// }
// window.setTimeout(callme,1000)

	
}