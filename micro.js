let age=document.querySelector("#age");
let gender=document.querySelector("#gender");
let male=document.querySelector("#male");
let female=document.querySelector("#female");
let calculate=document.querySelector("#calculate");
let iron=document.querySelector("#iron");
let zinc=document.querySelector("#zinc");
let calcium=document.querySelector("#calcium");
let magnesium=document.querySelector("#magnesium");
let potassium=document.querySelector("#magnesium");
let selenium=document.querySelector("#selenium");
let copper=document.querySelector("#copper");
let vitaminA=document.querySelector("#vit-a");
let vitaminB6=document.querySelector("#vit-b6");
let vitaminB12=document.querySelector("#vit-b12");
let vitaminC=document.querySelector("#vit-c");
let vitaminD=document.querySelector("#vit-d");
let vitaminE=document.querySelector("#vit-e");
let vitaminK=document.querySelector("#vit-k");
let riboflavin=document.querySelector("#ribo");
let niacin=document.querySelector("#niacin");
let thiamine=document.querySelector("#thiamine");
let choline=document.querySelector("#choline");
let folate=document.querySelector("#folate");
let omega3=document.querySelector("#omg-3");



calculate.addEventListener("click",view);
function result(){
    if(age.value>14 && age.value<18  && gender.value==male){
        iron.innerHtml==11+" "+"mg";
        zinc.innerHTML==11+" "+"mg";
        calcium.innerHtml==11+" "+"mg";
        
    }
}