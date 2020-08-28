//get slider items
let sliderImages=Array.from(document.querySelectorAll(".slider-container img"));
//get number of slides
let slidesCount=sliderImages.length;
//set current slide
let currentSlide=1;
//slide number String Element
let slideNumberElement=document.getElementById("slide-number");
//pervious and next buttons;
let nextButton=document.getElementById("next");
let prevButton=document.getElementById("prev");
//create the main ul elements
let paginationElement=document.createElement("ul");
paginationElement.setAttribute("id","pagination-ul");

//create list items based on slider count imgs
for(let i=1;i<=slidesCount;i++){
	paginationItem=document.createElement("li");
	paginationItem.setAttribute("data-index",i);
	paginationItem.appendChild(document.createTextNode(i));
	paginationElement.appendChild(paginationItem);
}
//add ul Element to page
document.getElementById("indicators").appendChild(paginationElement)
//handel function 
 nextButton.onclick=nextSlide;
 prevButton.onclick=prevSlide;
//nextslide function


//get pagination items
let paginationsBullets=Array.from(document.querySelectorAll("#pagination-ul li"));
//get the new ul
let paginationCreatedUl=document.getElementById("pagination-ul");
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

theChecker();
//triger the checker function
function nextSlide(){
	if(nextButton.classList.contains("disabled")){
		return false;
	}else{
		currentSlide++;
		theChecker();
	}
}

//previousslide function
function prevSlide(){
	if(prevButton.classList.contains("disabled")){
		return false;
	}else{
		currentSlide--;
		theChecker();
	}
}
function theChecker(){
	removeAllActive();
	slideNumberElement.textContent="slide#"+(currentSlide)+" of "+(slidesCount);
	sliderImages[currentSlide-1].classList.add("active");
	paginationCreatedUl.children[currentSlide-1].classList.add("active");

	//check if currentr slide is the first
	if(currentSlide==1){
		prevButton.classList.add("disabled");
	}else{
		prevButton.classList.remove("disabled");
	}
		//check if currentr slide is the last
	if(currentSlide==slidesCount){
		nextButton.classList.add("disabled");
	}else{
		nextButton.classList.remove("disabled");
		}
	};
//remove all active Classesfrom img and li
function removeAllActive(){
	//loop throw imgs
	sliderImages.forEach(function(img){
		img.classList.remove("active");
	});
	paginationsBullets.forEach(function(bullet){
		bullet.classList.remove("active");
	});
}