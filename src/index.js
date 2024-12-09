let heading=document.getElementById("heading");
heading.innerHTML = ("<h3> I am going to miss you all 🥰🥰</h3>");
let image = document.getElementById("image");
image.src="../Lesson5/images/YPG LOGO.jpg";
let button = document.querySelector("button");
function changeButtonStyle(){
button.style.backgroundColor = "blue";
button.style.color = "white";
}
button.addEventListener("click", changeButtonStyle);
function revealItems(){
 let open=document.querySelector(".Open");
 open.style.display="block";
 
 let closebutton=document.querySelector(".close");
 closebutton.style.display="block";

 let image=document.querySelector(".image");
 image.style.display="block";
}
let open = document.querySelector(".Open");
open.addEventListener("click",revealItems);

function closeItems(){
    let close=document.querySelector(".close");
    close.style.display="none";
    
    // let closebutton=document.querySelector(".close");
    // closebutton.style.display="block";
   
    let image=document.querySelector(".image");
    image.style.display="none";
   }
   let close = document.querySelector(".close");
   close.addEventListener("click",closeItems);


