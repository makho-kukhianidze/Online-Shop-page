var btn = document.getElementById("btn-sta-year");
var btnRes = document.getElementById("btn-sta-year-res");
var boxSixInfo = document.getElementById("boxSixInfo");
var boxSevenInfo = document.getElementById("boxSevenInfo");
var boxEightInfo = document.getElementById("boxEightInfo");
btn.addEventListener("click",function(){
  boxSixInfo.style.fontWeight= "800";
  boxSevenInfo.style.fontWeight= "800";
  boxEightInfo.style.fontWeight= "800";
  boxSixInfo.style.color= "#ffffff";
  boxSevenInfo.style.color= "#ffffff";
  boxEightInfo.style.color= "#ffffff";
  boxSixInfo.innerText= "90%";
  boxSevenInfo.innerText= "78%";
  boxEightInfo.innerText= "63%";
})
btnRes.addEventListener("click",function(){
  boxSixInfo.innerText= "";
  boxSevenInfo.innerText= "";
  boxEightInfo.innerText= "";
})
var btnSale = document.getElementById("btnSale");
var saleParaOne = document.getElementById('saleParaOne')
var saleParaTwo = document.getElementById('saleParaTwo')
var saleParaThree = document.getElementById('saleParaThree')
var saleParaFour = document.getElementById('saleParaFour')
var saleParaFive = document.getElementById('saleParaFive')
var saleParaSix = document.getElementById('saleParaSix')
var saleParaTweOne = document.getElementById('saleParaTweOne')
var saleParaNo = document.getElementById('saleParaNo')
var saleParaNo1 = document.getElementById('saleParaNo1')
var saleParaNo2 = document.getElementById('saleParaNo2')
var saleParaHund = document.getElementById('saleParaHund')
var saleParaThos = document.getElementById('saleParaThos')
btnSale.addEventListener("click",function(){
  saleParaOne.style.color = "green";
  saleParaTwo.style.color = "green";
  saleParaThree.style.color = "green";
  saleParaFour.style.color = "green";
  saleParaFive.style.color = "green";
  saleParaSix.style.color = "green";
  saleParaTweOne.style.color = "green";
  saleParaHund.style.color = "green";
  saleParaThos.style.color = "green";
  saleParaNo.style.color = "red";
  saleParaNo1.style.color = "red";
  saleParaNo2.style.color = "red";
  saleParaOne.innerText= "Buy now: 448$";
  saleParaTwo.innerText= "Buy now: 632$";
  saleParaThree.innerText= "Buy now: 412$";
  saleParaFour.innerText= "Buy now: 561$";
  saleParaFive.innerText= "Buy now: 611$";
  saleParaSix.innerText= "Buy now: 327$";
  saleParaTweOne.innerText= "Buy now: 227$";
  saleParaHund.innerText= "Buy now: 348$";
  saleParaThos.innerText= "Buy now: 448$";
})
productScroll();
function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");
  for (let i = 0; i < next.length; i++) {
    let position = 0; 
    prev[i].addEventListener("click", function() {
      if (position > 0) {
        position -= 1;
        translateX(position); 
      }
    });
    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        position += 1;
        translateX(position);
      }
    });
  }
  function hiddenItems() {
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 300;
    return items - Math.ceil(visibleItems);
  }
}
function translateX(position) {
  slide.style.left = position * -300 + "px";
}
function getCount(parent, getChildrensChildren) {
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); 
}
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
  scrollFunction();
  myFunction();
}  
function scrollFunction() {
  if (document.body.scrollTop > 1520 || document.documentElement.scrollTop > 1520) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  window.onload = function(){
    var myAudio = document.getElementById('my-audio');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    play.onclick = playAudio;
    pause.onclick = pauseAudio;
    function playAudio() {
      myAudio.play();
    }
    function pauseAudio() {
      myAudio.pause();
    }
    }