var slideIndex = 0;
var timer;
var i;
var slides = document.getElementsByClassName("slide");
var dot = document.getElementsByClassName("dot");
var read = document.querySelectorAll(".about-project-con");
const domain = document.querySelectorAll(".domain");
let currentDomain = 0;
slideshow();

{
	for(var i=0;i<read.length;i++)
		read[i].style.display = "none";

	for(i=0;i<domain.length;i++)
		domain[i].style.display = "none";
	
	///domain[currentDomain].style.display = "block";

	document.querySelector(".nav-links-con-reponsive").style.display = "none";
}

function currentSlide(n)
{
	clearTimeout(timer);
	for (i=0;i<slides.length;i++)
		slides[i].style.display = "none";
	for(i=0;i<dot.length;i++)
		dot[i].className = dot[i].className.replace("active"," ");
	slides[n-1].style.display = "flex";
	dot[n-1].className += " active";
	slideIndex=n;
	timer =setTimeout(slideshow,10000);
}

function slideshow()
{ 
    clearTimeout(timer);
    for (i=0;i<slides.length;i++)
		slides[i].style.display = "none";
	for(i=0;i<dot.length;i++)
		dot[i].className = dot[i].className.replace("active"," ");
	slideIndex++;
	if (slideIndex > slides.length)
		slideIndex=1;
	slides[slideIndex-1].style.display = "flex";
	dot[slideIndex-1].className += " active";
	timer = setTimeout(slideshow,10000);	
}

function Function(n)
{
	if(read[n].style.display === "none")
		read[n].style.display = "block";
	else
		read[n].style.display = "none";
}

document.querySelector(".hamburger-con").addEventListener("click" , function(){
	if(document.querySelector(".nav-links-con-reponsive").style.display === "none")
		document.querySelector(".nav-links-con-reponsive").style.display = "block";
	else
	document.querySelector(".nav-links-con-reponsive").style.display = "none";
})

window.addEventListener("load" , () =>{
	document.querySelector(".preload").classList.add("preload_remove");
})
