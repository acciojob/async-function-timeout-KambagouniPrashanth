//your JS code here. If required.
 

function myGreeting() {
	const formelemnt=document.querySelector("form")
        console.log(formelemnt[1].id)
        console.log(formelemnt[0].id)
        function time(){
            document.setTimeout(() => {
               console.log(formelemnt[0].innerText) ;
                
            },formelemnt[1].value);
            console.log()

        }

	
}