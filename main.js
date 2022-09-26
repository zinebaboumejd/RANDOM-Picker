const etudiant = [
    "Begdar","Touti","ABOUMEJD","Ziani","Benouahi","Laachari","Rabhi","ennadafy","belgazzar","Moultamiss","Basidi","Masioub","ELHADRi","Moussahif","Ait gaba","ATGUIRI","Rhrabla","AIT LASRI","Roussafi","Elazzab","Mellouki" ,"Nouhi","GRICH","zahaoui"
  ];
  
  const sujet = ["sujet1", "sujet2", "sujet3", "sujet4", "sujet5", "sujet6"];
  let joursferies =["5-10","11-01","1-05","30-07","14-08","20-08","21-08","06-11","18-11"];
//afficher la list des etudiants
   document.getElementById("list").innerHTML = etudiant.join(" , ");

  let item = list.length;
  let result= '<table border="1" style="width:100%"><th>Num</th><th>Nom</th><th>Sujets</th> <th>Date</th>';
  // fonction pour generer la liste aleatoire
  function Random(list, item) {
    return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, item);
  }
  //fonction pour generer la date , les jours feriés , weekend
  function start(){
    const result = Random(etudiant, item);
    let input_date=document.getElementById('date').value;
    console.log(input_date);

   let date = new Date(input_date); 
   let day=date.getDay();
   let days=date.getDate();
   let month=date.getMonth()+1;
   let year=date.getFullYear();
   console.log("day:"+days+" month:"+month+" year:"+year);
   console.log("day:"+day);
   let datefelter=[];
    var tableresult =
    '<table border="1" style="width:100%"><th>Num</th><th>Nom</th><th>Sujets</th> <th>Date</th>';
     // condition pour les jours inferieur a 10
     if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month; //09 le mois
      }
      console.log("day:"+day);
    for (let i = 0; i < result.length; i++) {
       
         // tester si le mois depasse 12
    if (month > 12) {
        month = 1;
        year++;
      }
      if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
      // tester si le jour depasse 30
      if (days > 31) {
        days = 1;
        month++;
      }
    }else if (month==2){
      if (days > 28) {
        days = 1;
        month++;
      }
    

    }
      else{
        // tester si le jour depasse 31  
        if (days > 30) {
            days = 1;
            month++;
            }
        }

      //tester les jours feries
     if(joursferies.includes(days+"-"+month)){
        console.log("jour ferie");
            days++;
            
     }
     console.log("days:"+days+"day:"+day);
     //tester les jours weekend
        if(day==6 || day==0){
            console.log("weekend");
            days+=2;
            day++;
        }
      datefelter.push(days + "-" + month + "-" + year);
        tableresult +=
          "<tr><td>" +
          (i + 1) +
          "</td><td>" +
          result[i] +
          "</td><td>" +
            sujet[i] +
            "</td><td>"+
            datefelter[i]+
            "</td></tr>";
         days++;
         day++;
        console.log("day:"+day);
      }
  
      tableresult += "</table>";
      table.innerHTML = tableresult;
    }
    
    
    // fonction pour telecharger le tableau en format excel
function Telecharger() {
    var table = document.getElementById("table");
    var html = table.outerHTML;
    window.open("data:application/vnd.ms-excel," + encodeURIComponent(html));
  }
  
    

