AOS.init();
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


var UK=document.querySelector(".Uk");
var USA=document.querySelector(".Usa");
var BANGLA=document.querySelector(".Bangla");
var UK_cntnt=document.querySelector(".ff");

UK&&UK.addEventListener("click",()=>{
   UK_cntnt.classList.toggle=("aa");
   console.log("ok");
})
