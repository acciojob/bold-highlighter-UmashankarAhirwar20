let link = document.querySelector("a");
let strong = document.querySelectorAll('strong');

function highlight() {
    //Write your code here
	link.addEventListener("mouseover", ()=>{
		strong.forEach(word => {
			word.style.color = "rgb(0, 128, 0)"
		})
		
	})

}


function return_normal() {
    //Write your code here
	link.addEventListener("mouseout", ()=>{
		strong.forEach(word => {
			word.style.color = "rgb(0, 0, 0)"
		})
		
	})
    
}
