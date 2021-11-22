var fullimgbox=document.getElementById("fullimgbox");
var fullimg=document.getElementById("fullimg");
var index =document.getElementById("naslov");

slika1=document.getElementById("slika1");
slika2=document.getElementById("slika2");
slika3=document.getElementById("slika3");
slika4=document.getElementById("slika4");


function openfullimg(pic) {
    fullimgbox.style.display="flex";
    fullimg.src=pic;

    if(fullimg===slika2) {
    index.innerHTML="Ferrari SF90";
    index.style.display="block";
    }

    if(fullimg===slika3) {
        index.innerHTML="Corvette C8";
        index.style.display="block";
        }

        if(pic===slika4) {
            index.innerHTML="Buggati";
            index.style.display="block";
            }
}




