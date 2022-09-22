




const list=["Begdar","Touti","ABOUMEJD", "Elazzab","Mellouki","zineb","somaya","amghare" ];
const sujet=["sujet1","sujet2","sujet3", "sujet4","sujet5","sujet6" ];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("list").innerHTML=list.join(" , ");
var table=document.getElementById("table");
let item=list.length;
//recuprer value de input date
var date=new Date();
var day=date.getDate()+1; //+1 pour demain
var month=date.getMonth()+1;
var year=date.getFullYear();
var minDate=year+"-"+month+"-"+day;
let arraydate=[];
const result=start(start(list));

console.log(month);
if(day<10){
    day='0'+day;
}
if(month<10){
    month="0"+month; //09 le mois
}
document.getElementById("date").setAttribute("min",minDate);

function start(list,item){
  return [...list].sort(()=>Math.random()>0.5?1:-1).slice(0,item);
 }  
  //afficher la list sur html 
function afficher(){
const result=start(list,item);
// document.getElementById("result").innerHTML=result.join(" , ");
var tbl='<table border="1" style="width:100%"><th>Num</th><th>Nom</th><th>Sujets</th> <th>Date</th>';
//boocle pour afficher les resultats se fome d'un tableau 
    for(let i=0;i<result.length;i++){         
        tbl+='<tr><td>'+(i+1)+'</td><td>'+result[i]+'</td><td>'+sujet[i]+'</td><td>'+day+'</td></tr>';
      day++;
  }
    tbl+="</table>";
    table.innerHTML=tbl;  

   
}


// fonction pour telecharger le tableau en format excel
function Telecharger(){
    var table=document.getElementById("table");
    var html=table.outerHTML;
    window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
}























// const sujet=["s1","s2","s3","s4"]
// let arrayrandom = [];
// function start() {
   

//   for (let i = 0; i < list.length; i++) {
//     console.log('length = '+list.length+'-');
//     const random = Math.floor(Math.random() * list.length);
//     console.log(random +' '+ list[random]);

//     arrayrandom.push(list[random]);
//     console.log(arrayrandom);

//    // tester si le nombre est deja dans le tableau
//     if (arrayrandom.includes(list[random])) {
//         list.splice(random,1);
  
//     }
 
//     console.log(list);
//     console.log('---------'+ i +'-------');
 

// }


  
// console.log(arrayrandom);
// console.log(list);
// }

