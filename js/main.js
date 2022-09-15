
let randomnum=document.getElementById("randomnum");
let btn=document.getElementById("btn");

btn.addEventListener("click",function(){
	var add=document.getElementById("addval");
	var x=document.createElement("h3");
	add.appendChild(x);
	var given=randomnum.value;
	var ans=1;
	for(var i=1; i<=given; i++){
		ans=ans*i;
	}
	x.innerText=ans;
	
})

