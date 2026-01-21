let link = document.querySelector("a");
let strong = document.querySelectorAll('strong');

function highlight() {
    //Write your code here
	link.addEventListener("mouseover", ()=>{
		strong.forEach(word => {
			word.style.color = "green"
		})
		
	})

}


function return_normal() {
    //Write your code here
	link.addEventListener("mouseout", ()=>{
		strong.forEach(word => {
			word.style.color = "black"
		})
		
	})
    
}
