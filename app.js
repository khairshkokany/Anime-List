// var name = "My Anime List of Khair Shkokany";
// var type = "Welcome to this page "

// alert(type + "" + name);



// var qus = "the best anime is Attack on titan";
// var no = "say cancel or i will kill you";
// confirm(qus + no);

// var anime = prompt('attack on titan or tokyo ghoul..!');




// if (anime == 'titan') {
//   document.write('<img src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/01/Attack-on-Titan-Season-4-poster-Eren-header.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" width="250px">');
// } else if (anime === 'tokyo ghoul') {
//   document.write('<img src="https://ae01.alicdn.com/kf/HTB15dwhNVXXXXbIXXXXq6xXFXXXz/Tokyo-Ghoul-Anime-Kaneki-Ken-120-200CM-Single-layer-Blanket-37481.jpg_Q90.jpg_.webp" width="250px">');
// } else {
//   document.write('<h4> please  write attack or tokyo ghoul</h4>');
// }


// var type = prompt('whats your type of anime ?');

// if (type == 'drama') {
//   console.log('do not lie on april')
// } else if (type == 'action') {
//   console.log('attack on titan')
// } else if (type == 'mix') {

//   console.log('jujutsu no kaysi')
// } else {
//   document.write('<h3>can you plesae do not watch anime then go to turkey series and thank you</h3>')
// }




// var first = "Are you Ready for Qustions ..!!!";
// confirm(first);
// var title = "he's/she's Ready ..!"

//   console.log(title);



// var age =prompt ('please type ur age to make approvie for u  ');

// if (age > 13 ) {
// age = 13;
// }

// for (var j=0;j<age;age++) {
// document.write('<img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/03/Eren-Founding-Titan-in-Attack-on-Titan-vertical.jpg">'); }

// console.log(5=='5'); this is true cuz number with sring ; 
// console.log(5==='5');   this is false cuz number of datatype of string ; 
// console.log(5!='5'); //this is false cuz 5 = 5 ; 
// console.log(5!=='5'); //this is true cuz 5 not = 5 cuz 5 string with datatype ; 


// -----------this is a new code for me the last one for training -------------------------



var start = "are you ready for qustions..!"
confirm(start);
var anime = prompt('type ur anime please');

if (anime == 'attack on titan') {
  console.log('he will see irin');
  document.write('</br>');
  document.write('<img src="https://pbs.twimg.com/media/EZLLDIeU4AAtNvR.jpg"width=250px>');

  document.write('<h3>IRIN</h3>');
} else if (anime == 'tokyo ghoul') {
  console.log("he will see Kaneki");
  document.write('</br>');
  document.write('<img src="https://cdn-prod.scalefast.com/public/assets/user/122595/image/b5aa4464db2ce9e11cf44a9a84ea0b35.jpg"width=250px>');
  document.write('<h3>Kaneki</h3>');
} else {
  console.log("ops..! he's/she's didn't type anything ");
  document.write('<h3>please type attack on titan or tokyo ghoul to see the photos ..!</h3>');
}

// var start1="if you are +18 you can see the qustions of action anime ..!";

// alert (start1);


// var favoriteCharc= function() {

//   var charc = prompt("type ur best character in ur best anime u chose it  ..!");

//   while (charc !== "irin" && charc !== "kaneki") 
//   { charc = prompt("please you must type ur charc (irin if you chose attack on titan or kaneki if you chose tokyo ghoul ..!"); }

//   var results ='';
//   if (charc== 'irin') {
//     console.log=('he will see irin');
//     results=('</br>');
//     results=('<img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/03/Eren-Founding-Titan-in-Attack-on-Titan-vertical.jpg"width=250px>');
//     results=('<h3>IRIN</h3>');
//   } else if (charc == 'kaneki') {
//     console.log=("he will see Kaneki");
//     results=('</br>');
//     results=('<img src="https://spotlightreport.net/wp-content/uploads/2019/09/tokyo-ghoul-re-review.jpg"width=250px>');
//     results=('<h3>Kaneki</h3>');
//   }
//   return results;
// }

// document.write(favoriteCharc());


// gfdgdfgfdfgdgdfg


var favoriteCharc= function(){

var charc = prompt('type ur best character in ur best anime u chose it  ..!');

while (charc !== 'irin' && charc !== 'kaneki')
{ charc = prompt('please you must type ur charc (irin if you chose attack on titan or kaneki if you chose tokyo ghoul ..!"'); }

var result='';


if (charc == 'irin') {result= ('<img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/03/Eren-Founding-Titan-in-Attack-on-Titan-vertical.jpg"width=250px>'); }

else if (charc == 'kaneki') { result= ('<img src="https://spotlightreport.net/wp-content/uploads/2019/09/tokyo-ghoul-re-review.jpg"width=250px>'); 

}


return result;
}

document.write(favoriteCharc());




var request = "ok now you can start the qustions of ur  anime and charc ";
alert(request);

var star = prompt("how many starts do you rate your anime (max. 5 min . 0 ..!")

if (star > 5) {
  star = 5;
}

for (var i = 0; i < star; i++) {
  document.write('<img src="https://miro.medium.com/max/612/1*sz3x5iKbBV_iJ2-47CmfIA.jpeg" width=30px;>');

}

var getLove = function () {
  var love = prompt("type 5 to show u some love for visited my page  ..! ")
  if (love > 5) {
    love = 5;
  }
  var narutoResults = '';

  for (var j = 0; j < love; j++) {
    // narutoResults=('</br>');
    narutoResults=('<img src="https://cdn130.picsart.com/289245025003201.png?type=webp&to=min&r=640" width=35px;>');

  }
  return narutoResults;
}
document.write(getLove());

var start="are you ready for qustions..!"
confirm (start);
var anime=prompt('type ur anime please');

if(anime=='attack'){
  console.log('he will see irin');
  document.write('</br>');
  document.write('<img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/03/Eren-Founding-Titan-in-Attack-on-Titan-vertical.jpg"width=250px>');
  
  document.write('<h3>IRIN</h3>');
  }else if(anime=='tokyo'){
  console.log("he will see tokyo");
  document.write('</br>');
  document.write('<img src="https://spotlightreport.net/wp-content/uploads/2019/09/tokyo-ghoul-re-review.jpg"width=250px>');
  document.write('<h3>Kaneki</h3>');
}else{
  console.log("ops..! didn't type anything ");
  document.write('<h3>please type attack or tokyo to see the photos ..!</h3>');
}

// var start1="if you are +18 you can see the qustions of action anime ..!";

// alert (start1);
var charc=prompt("type ur best character in ur best anime u chose it  ..!");

while(charc !== "irin"   && charc !== "kaneki"){

charc=prompt("please you must type ur charc (irin if you chose attack on titan or kaneki if you chose tokyo ghoul ..!");  
}

var request="ok now you can start the qustions of ur  anime and charc ";
alert(request);

var star = prompt("how many starts do you rate your anime (max. 5 min . 0 ..!")

if (star > 5){
  star=5;
}

for (var i=0;i < star;i++){
  document.write('<img src="https://miro.medium.com/max/612/1*sz3x5iKbBV_iJ2-47CmfIA.jpeg" width=30px;>');

}
var love = prompt("type 5 to show u some love for visited my page  ..! ")
if (love > 5){
  love=5;
}

for (var j=0;j < love;j++){
  document.write('</br>');
  document.write('<img src="https://cdn130.picsart.com/289245025003201.png?type=webp&to=min&r=640" width=35px;>');

}

var thank=("finally , Thank you User ..");
alert (thank);







var thank = ("finally , Thank you User ..");
alert(thank);