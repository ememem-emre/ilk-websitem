let section1=document.getElementById("section1"); let section2=document.getElementById("section2");
let section3=document.getElementById("section3"); let section4=document.getElementById("section4");
let login=document.getElementById("login");let register=document.getElementById("register");
section1.addEventListener("click",function(){
    yonlendir("index.html");
});
section2.addEventListener("click",function(){
    window.location.href="blblbl.html";
});
section3.addEventListener("click",function(){
    window.location.href="blblbl.html";
});
section4.addEventListener("click",function(){
    
});
login.addEventListener("click",function(){
    yonlendir("login.html");
});
register.addEventListener("click",function(){
    yonlendir("register.html");
});
function yonlendir(link){
    window.location.href=link;
}