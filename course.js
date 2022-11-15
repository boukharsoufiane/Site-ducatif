
const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;
slide = (direction) => {
  direction === "next" ? translate -= translateAmount : translate += translateAmount;
  pages.forEach(
    pages => (pages.style.transform = `translateX(${translate}%)`)
  );
  
}
// <===========================================Menu===================================================================>
// ============================button1======================
function bouclesList() {
  document.getElementById("myList1").classList.toggle("show");
}
function laBoucleFor() {
  window.location.replace("#");
}
function laBoucleWhile() {
  window.location.replace("#");
}
function lesBouclesImbriquees() {
  window.location.replace("#");
}
function myTableau() {
  document.getElementById("myList3").classList.toggle("show");
}
function triTableau() {
  window.location.replace("#");
}
function rechercheTab() {
  window.location.replace("#");
}
function chaineCaracteres() {
  document.getElementById("myList2").classList.toggle("show");
}
function rechercherSupp() {
  window.location.replace("#");
}
function nombreVoyelles() {
  window.location.replace("#");
}
window.onclick = function(event) {
  if (!event.target.matches('.list-btn')) {
    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ============================pageOne=========================
function permuter(){
  x = document.reverse.a.value;
  document.reverse.a.value = document.reverse.b.value
  document.reverse.b.value = x;
}

// ===========================PageTwo==========================

function validatedate(inputText)
  {
  var dateformat = /^(0?[1-9]|[12][0-9]|1[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(inputText.value.match(dateformat))
  {
  // document.form1.text1.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var dd = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
    document.getElementById('para5').innerHTML=('La date est incorrect');

  }
  else{
    document.getElementById('para5').innerHTML=('La date est :' + dd + "/" + mm + "/" + yy);
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 

  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
    document.getElementById('para5').innerHTML=('La date est :' + dd + "/" + mm + "/" + yy);
  }
  else{
    document.getElementById('para5').innerHTML=('La date est :' + dd + "/" + mm + "/" + yy);
  }
  if ((lyear==true) && (dd>29))
  {
    document.getElementById('para5').innerHTML=('La date est :' + dd + "/" + mm + "/" + yy);

  }
  }
  }
  else
  {
    document.getElementById('para5').innerHTML=('La date est incorrect');
  }
}

// =================================================page three===========================================
function myFunction12(){
  var number = Number(document.getElementById('number').value);
  var resultat = "";
  for( var i = 1; i <= 10; i++){
    resultat = resultat + "<p>" + number + "*" + i + "=" + number * i + "<p>";
    document.getElementById('resultaaaat').innerHTML = resultat;
  }
  document.getElementById('clear11').onclick=function(){
    document.getElementById('resultaaaat').innerHTML="";
  }
}

// ==================================Page four===============================================
let random = Math.floor(Math.random() * 50) + 1;
console.log(random);
function myFunction(){
  var tentative= 0;
  document.getElementById('buttonRandom').onclick = function(){
    var number = Number(document.getElementById('number2').value);
    console.log(number);
    if(number == random && tentative<=10){
      document.getElementById('result2').innerHTML = 'Bravo';
      document.getElementById('result2').style.backgroundColor = '#29C5FE';
      document.getElementById('result2').style.color = 'black';
      document.getElementById('result2').style.width = 'fit-content';
      document.getElementById('result2').style.height = 'fit-content';
      tentative++;
      document.getElementById('test').innerHTML=tentative;
    }

    if(number < random && tentative<=10){
      document.getElementById('result2').innerText = 'Nombre est petite';
      document.getElementById('result2').style.backgroundColor = 'gray';
      document.getElementById('result2').style.width = 'fit-content';
      document.getElementById('result2').style.height = 'fit-content';
      tentative++;
      document.getElementById('test').innerHTML=tentative;
    }

    if(number > random && tentative<=10){
      document.getElementById('result2').innerHTML = 'Nombre est grande';
      document.getElementById('result2').style.backgroundColor = 'gray';
      document.getElementById('result2').style.width = 'fit-content';
      document.getElementById('result2').style.height = 'fit-content';

      tentative++;
      document.getElementById('test').innerHTML=tentative;
    }
    if(tentative>10){
      document.getElementById('test').innerHTML = "Game over";
      document.getElementById('test').style.backgroundColor = 'orange';
      document.getElementById('result2').style.display = 'none';

    }
  }
  document.getElementById('rejouer').onclick = function(){
    document.getElementById('result2').innerHTML="";
  }
}

// =====================================PAGE FOUR=============================================
          
function addNumbers(){
  document.getElementById('btn1').onclick = function(){
   let x = Number(document.getElementById('numberSomme').value);
   let y = Number(document.getElementById('numberSomme1').value);
  }
  document.getElementById('btn5').onclick = function(){
   let x = Number(document.getElementById('numberSomme').value);
   let y = Number(document.getElementById('numberSomme1').value);
   let z = x + y;
  document.getElementById('resultatSomme').innerHTML= z;
   }
   document.getElementById('clear').onclick = function(){
    document.getElementById('resultatSomme').innerHTML="";
   }
}
// <=====soustraction=====>
 
function soustractionNumbers(){
  document.getElementById('btn2').onclick=function(){
    let x = Number(document.getElementById('numberSomme').value);
    let y = Number(document.getElementById('numberSomme1').value);
  }
  document.getElementById('btn5').onclick=function(){
    let x = Number(document.getElementById('numberSomme').value);
    let y = Number(document.getElementById('numberSomme1').value);
    let z = x - y;
    document.getElementById('resultatSomme').innerHTML= z;
  }
  document.getElementById('clear').onclick=function(){
    document.getElementById('resultatSomme').innerHTML="";
  }
}
 
 // <=====multiple======>
 
function multipleNumbers(){
  document.getElementById('btn3').onclick=function(){
    let x = Number(document.getElementById('numberSomme').value);
    let y = Number(document.getElementById('numberSomme1').value);
  }
  document.getElementById('btn5').onclick=function(){
    let x = Number(document.getElementById('numberSomme').value);
    let y = Number(document.getElementById('numberSomme1').value);
    let z = x * y;
    document.getElementById('resultatSomme').innerHTML=z;
  }
  document.getElementById('clear').onclick=function(){
    document.getElementById('resultatSomme').innerHTML="";
  }
}
 
// <======Diviser======>
 
function deviserNumbers(){
  document.getElementById('btn4').onclick=function(){
    let x = Number(document.getElementById('numberSomme').value);
    let y = Number(document.getElementById('numberSomme1').value);
  }
  document.getElementById('btn5').onclick=function(){
    let x = Number(document.getElementById('numberSomme').value);
    let y = Number(document.getElementById('numberSomme1').value);
    let z = x / y;
    document.getElementById('resultatSomme').innerHTML=z;
  }
  if( x == 0 || y == 0){
    document.getElementById('resultatSomme').innerHTML='Impossible';
  }
  document.getElementById('clear').onclick=function(){
    document.getElementById('resultatSomme').innerHTML="";
  }
}

// =================================page five======================================================

function dessinEtoile(){
  document.getElementById('btn').onclick=function(){
      let n = document.getElementById('etoile').value;
      let string = "";
      for (let i = 1; i <= n; i++) {
        //============= printing spaces=================
        for (let j = n; j > i; j--) {
           string += " ";
         }
        // ==============printing star================
        for (let k = 0; k < i-1+1; k++) {
           string += "*";
         }
        string += "\n";
      }
      document.getElementById('para').innerHTML=`${string}`;
  }
}
// ============================================PAGE SEVEN=============================================
function saiserPhrase(){
  document.getElementById('buttonCheck').onclick=function(){
    var str = document.getElementById('phrase1').value;
    var index = str.indexOf(document.getElementById('mots').value);
    if(index !== -1){
      document.getElementById('check').innerHTML="Le mot existe!"
    } else{
      document.getElementById('check').innerHTML="Le mot n'existe pas!";
    }
  }
  document.getElementById('reset').onclick=function(){
    document.getElementById('check').innerHTML="";
  }
}
function clearOcurences(){
  document.getElementById('occurencesBtn').onclick=function(){
  var str = document.getElementById('phrase1').value;
  var index = document.getElementById('mots').value;
  var ret = str.replace(index, '');
  document.getElementById('check').innerHTML=ret;
  }
  document.getElementById('reset').onclick=function(){
    document.getElementById('check').innerHTML="";
  }
}

// =============================PAGE EIGHT=================================================

function findVowels(){
  document.getElementById('btn30').onclick=function getCount(str){
      var str = document.getElementById('mots12').value;
      var vowelsCount = 1;
      const vowels = ['a','e','i','o','u','y'];
      for(let char of str){
          if(vowels.includes(char)){
              document.getElementById('para15').innerHTML= "La phrase que vous avez saisi contient de :" + "&nbsp;" + vowelsCount++ + "&nbsp;" + "voyelle(s)";
          }
      }
      return vowelsCount
  }
}




// =============================PAGE NINE=================================================


function laTaille(){
  let tailles = Number(document.getElementById('taillee').value);
  if(tailles == document.getElementById('taillee').value){
    document.getElementById('taillee').disabled = true;
  }
  if (tailles == 1) {
    document.getElementById('para16').style.display = 'block';
    document.getElementById('cree2').style.display = 'block';
  }
  if (tailles == 2) {
    document.getElementById('para16').style.display = 'block';
    document.getElementById('para2').style.display = 'block';
    document.getElementById('cree2').style.display = 'block';
  }

  if (tailles == 3) {
    document.getElementById('para16').style.display = 'block';
    document.getElementById('para2').style.display = 'block';
    document.getElementById('para3').style.display = 'block';
    document.getElementById('cree2').style.display = 'block';
  }
  if (tailles == 4) {
    document.getElementById('para16').style.display = 'block';
    document.getElementById('para2').style.display = 'block';
    document.getElementById('para3').style.display = 'block';
    document.getElementById('para4').style.display = 'block';
    document.getElementById('cree2').style.display = 'block';
  }
  if (tailles == 5) {
    document.getElementById('para16').style.display = 'block';
    document.getElementById('para2').style.display = 'block';
    document.getElementById('para3').style.display = 'block';
    document.getElementById('para4').style.display = 'block';
    document.getElementById('para6').style.display = 'block';
    document.getElementById('cree2').style.display = 'block';
  }
}

let words =[];
function addNumber(){
  document.getElementById('cree2').onclick=function(){
    let tailles = Number(document.getElementById('taillee').value);
    let userAdd = document.getElementById('para16').value;
    let userAdds = document.getElementById('para2').value;
    let userAdds2 = document.getElementById('para3').value;
    let userAdds3 = document.getElementById('para4').value;
    let userAdds4 = document.getElementById('para6').value;
    if(tailles == 1){
      words.push(userAdd);
      document.getElementById('para16').disabled = true;
      showUserInfo();
    }
   if(tailles == 2){
      words.push(userAdd);
      words.push(userAdds);
      document.getElementById('para16').disabled = true;
      document.getElementById('para2').disabled = true;
      showUserInfo();
    }
    if(tailles == 3){
      words.push(userAdd);
      words.push(userAdds);
      words.push(userAdds2);
      document.getElementById('para16').disabled = true;
      document.getElementById('para2').disabled = true;
      document.getElementById('para3').disabled = true;
      showUserInfo();
    }
    if(tailles == 4){
      words.push(userAdd);
      words.push(userAdds);
      words.push(userAdds2);
      words.push(userAdds3);
      document.getElementById('para16').disabled = true;
      document.getElementById('para2').disabled = true;
      document.getElementById('para3').disabled = true;
      document.getElementById('para4').disabled = true;
      showUserInfo();
    }
    if(tailles == 5){
      words.push(userAdd);
      words.push(userAdds);
      words.push(userAdds2);
      words.push(userAdds3);
      words.push(userAdds4);
      document.getElementById('para16').disabled = true;
      document.getElementById('para2').disabled = true;
      document.getElementById('para3').disabled = true;
      document.getElementById('para4').disabled = true;
      document.getElementById('para6').disabled = true;
      showUserInfo();
    }
  }
}
function showUserInfo(){
  let showInfo = "";
  //tri ici
  function sort(words){
    for(var i = 0; i < words.length; i++){
      //stocker l'index de l'élément minimum
      var min = i; 
      for(var j = i+1; j < words.length; j++){
        if(+words[j] < +words[min]){
         // mettre à jour l'index de l'élément minimum
         min = j; 
        }
      }
      var tmp = words[i];
      words[i] = words[min];
      words[min] = tmp;
    }
    document.getElementById('cree2').setAttribute('disabled','')

    return words;
  };
  sort(words);

  for(let i=0;i<words.length;i++){
    showInfo +=`
      <table style="border-collapse:collapse;margin-top:20px;" border="2">
        <tr style="width:100px;height:fit-content;">
          <td style="font-size:20px;text-align:center;width:50px;height:50px;margin:0 0 0 10px;">${words[i]}</td>
        </tr>
      </table>
    `;
  }
  document.getElementById('display').innerHTML = showInfo;
  document.getElementById('display').style.display = 'flex';
  document.getElementById('display').style.textAlign = 'center';
}

  

function recherche(){
  document.getElementById('draw').onclick=function(){
    let mots=document.getElementById('rech').value;
    let tab = Array;
    tab[0]= document.getElementById('para16').value;
    tab[1]= document.getElementById('para2').value;
    tab[2]= document.getElementById('para3').value;
    tab[3]= document.getElementById('para4').value;
    tab[4]= document.getElementById('para6').value;
    if(mots == tab[0]){
      
      document.getElementById('display2').innerHTML="La valeur existe au tableau";
    }
    else if(mots == tab[1]){
      document.getElementById('display2').innerHTML="La valeur existe au tableau";
    }
    else if(mots == tab[2]){
      document.getElementById('display2').innerHTML="La valeur existe au tableau";
    }
    else if(mots == tab[3]){
      document.getElementById('display2').innerHTML="La valeur existe au tableau";
    }
    else if(mots == tab[4]){
      document.getElementById('display2').innerHTML="La valeur existe au tableau";
    }
    else{
      document.getElementById('display2').innerHTML="La valeur n'existe pas au tableau";
    }
  }
  
}




