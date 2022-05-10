const reviews=[
{
	img:"./person-3.jpeg",
     name:"Kalyan",
     description:"Quisque aliquam risus sem, sed ultrices leo varius non. Aenean maximus nunc vel magna lobortis, rutrum aliquam elit gravida. Mauris non dignissim lectus, at sodales tortor. Aliquam at orci condimentum, lacinia justo sit amet, molestie justo. Suspendisse potenti",
},
{
	img:"./person-1.jpeg",
	name:"Vijaya",
	description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ut magna fringilla vehicula. Aenean orci mauris, ultricies at mi eu, egestas vehicula ante. Vivamus facilisis maximus pulvinar. Nullam vitae quam scelerisque, porta sem at, semper nisl.;",
},

{
	img:"./person-2.jpeg",
    name:"Sandhya",
    description:"STUVWXYZ",
},
{
	img:"./person-4.jpeg",
     name:"Varsha",
     description:"IJKLMNO ",
},
];


var rightarrow=document.querySelector(".right");
var leftarrow=document.querySelector(".left");
var des=document.querySelector(".description");
var imagee=document.getElementById("person-img");
var namee=document.getElementById("name-person");

var slide=0;
if(slide==0)
{
	 imagee.src=reviews[slide].img;
		namee.textContent=reviews[slide].name;
		des.textContent=reviews[slide].description;
}
rightarrow.addEventListener("click",function(){
	slide++;
	if(slide==4)
		slide=0;
	display(slide);
});
leftarrow.addEventListener("click",function(){
    slide--;
    if(slide<0)
		slide=3;
    display(slide);
});

function display(slide){
	if(slide===0)
	{
		imagee.src=reviews[slide].img;
		namee.textContent=reviews[slide].name;
		des.textContent=reviews[slide].description;
	}
	else if(slide===1)
	{
		imagee.src=reviews[slide].img;
		namee.textContent=reviews[slide].name;
		des.textContent=reviews[slide].description;		
	}
	else if(slide===2)
	{
		imagee.src=reviews[slide].img;
		namee.textContent=reviews[slide].name;
		des.textContent=reviews[slide].description;		
	}
	else if(slide==3)
	{
		imagee.src=reviews[slide].img;
		namee.textContent=reviews[slide].name;
		des.textContent=reviews[slide].description;		
	}
}