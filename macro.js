let age=document.querySelector("#age");
let weight=document.querySelector("#weight");
let height=document.querySelector("#height");
let calculate=document.querySelector("#calculate");
let protien=document.querySelector("#protien-result");
let fat=document.querySelector("#fat-result");
let carb=document.querySelector("#carb-result");
let calorie=1800;
let calorie1=2000;
let calorie2=2200;



calculate.addEventListener("click",view);
function view(){
    if(age.value>17 && age.value<80  && weight.value>50){
       protien.innerHTML=weight.value*1+" "+"gram";
       fat.innerHTML=weight.value*0.35+" "+"fat";
       let val=(weight.value*4)+((weight.value*0.35)*9);
       let val1=calorie1-val;
       console.log(val);
       carb.innerHTML=(val1/4)+" "+"gram";
    }

   else if
    (age.value>18 && age.value<55  && weight.value>35){
        protien.innerHTML=weight.value*1.5+" "+"gram";
        fat.innerHTML=weight.value*0.45+" "+"fat";
        let val=(weight.value*4)+((weight.value*0.45)*9);
        let val1=calorie-val;
        console.log(val);
        carb.innerHTML=(val1/4)+" "+"gram"; 
   }
   else if
   (age.value>18 && age.value<80  && weight.value>70){
      protien.innerHTML=weight.value*2+" "+"gram";
      fat.innerHTML=weight.value*0.30+" "+"fat";
      let val=(weight.value*4)+((weight.value*0.30)*9);
      let val1=calorie1-val;
      console.log(val);
      carb.innerHTML=(val1/4)+" "+"gram";
   }

    
 
}
