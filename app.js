const delay = ms => new Promise(res => setTimeout(res, ms));
let opt1=document.getElementById("opt1");
let opt2=document.getElementById("opt2");
let opt3=document.getElementById("opt3");
let opt4=document.getElementById("opt4");
let buy=document.getElementById("buybutton");
let buy2=document.getElementById("buybutton2");
let buy3=document.getElementById("buybutton3");
opt1.addEventListener("click",function(){
    window.location.href="https://www.instagram.com/emrdev_/";
});
opt2.addEventListener("click",function(){
    window.location.href="https://www.instagram.com/emrdev_/";
});
opt3.addEventListener("click",function(){
    window.location.href="https://www.instagram.com/emrdev_/";
});
opt4.addEventListener("click",function(){
    window.location.href="https://www.instagram.com/emrdev_/";
});
buy.addEventListener("click",async function(){
   this.innerText="1.Ak47 Satın Alındı.";
   await delay(750);
   this.innerText="1.Ak47 Satın Alındı..";
   await delay(750);
   this.innerText="1.Ak47 Satın Alındı...";
   await delay(750);
   this.innerText="Başarılı !";
   await delay(750);
   window.location.href="https://www.instagram.com/emrdev_/";

});
buy2.addEventListener("click",async function(){
   this.innerText="1.Ak47 Satın Alındı.";
   await delay(750);
   this.innerText="1.Ak47 Satın Alındı..";
   await delay(750);
   this.innerText="1.Ak47 Satın Alındı...";
   await delay(750);
   this.innerText="Başarılı !";
   await delay(750);
   window.location.href="https://www.instagram.com/emrdev_/";
});
buy3.addEventListener("click",async function(){
   this.innerText="1.Ak47 Satın Alındı.";
   await delay(750);
   this.innerText="1.Ak47 Satın Alındı..";
   await delay(750);
   this.innerText="1.Ak47 Satın Alındı...";
   await delay(750);
   this.innerText="Başarılı !";
   await delay(750);
   window.location.href="https://www.instagram.com/emrdev_/";
});