// let navMenu=document.querySelector(".nav-menu .li");

// document.querySelector("#nav-ico").onclick=()=>{
//     alert();
//     navMenu.classList.toggle(".active");
// };
 let menu=document.querySelector(".nav-menu ul");
 let ico=document.querySelector("#nav-ico");

 ico.addEventListener("click",function(){
    alert();
    menu.classList.toggle("show");
 });