AOS.init();
//modal
const Modal =document.querySelector(".modal");
const ModalBtn=document.querySelector(".modalclosebtn");
window.addEventListener("load",()=>{
    setTimeout(
       ()=>{
    Modal.style.display="block";
       },500)
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
   UK_cntnt.classList.toggle("sal");
})


//all category cntnt
const Navcategory=document.querySelector(".nav_category");
const Categry_cntnt=document.querySelector(".category_cntnt");

Navcategory&&Navcategory.addEventListener("click",()=>{
   Categry_cntnt.classList.toggle("actv_cate_cntnt");
   
})

//totop and fixed navbar
const Totop=document.querySelector(".to-top");
var navfix=document.querySelector("#header_bottom");
Totop&&Totop.addEventListener("click", () =>{
   window.scrollTo({ top: 0, behavior: "smooth" });
})

window.addEventListener("scroll",()=>{
   if(window.scrollY>400){
      Totop.style.display="flex";
      navfix.classList.add("active_nav")
   }
   else{
      Totop.style.display="none";
      navfix.classList.remove("active_nav")
   }
})