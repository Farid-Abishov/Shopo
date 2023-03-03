AOS.init();
//modal
const Modal =document.querySelector(".modal");
const ModalBtn=document.querySelector(".modalclosebtn");
window.addEventListener("load",()=>{
    setTimeout(
       ()=>{
    Modal.style.display="block";
       },1000)
})
ModalBtn.addEventListener("click",()=>{
   Modal.style.display="none"
})

//language
var UK=document.querySelector(".Uk");
var USA=document.querySelector(".Usa");
var BANGLA=document.querySelector(".Bangla");
var UK_cntnt=document.querySelector(".ff");

UK&&UK.addEventListener("click",()=>{
   UK_cntnt.style.display="block";
})


//all category cntnt
const Navcategory=document.querySelector(".nav_category");
const Categry_cntnt=document.querySelector("category_cntnt");

Navcategory&&Navcategory.addEventListener("click",()=>{
   Categry_cntnt.classList.toggle=("actv_cate_cntnt");
})