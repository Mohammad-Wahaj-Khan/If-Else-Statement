// condition no.1
var userAge = 20;

if(userAge == 20){
    console.log("Allow")
}
else{
    console.log("Not Allow")
}
// condition no.2
var userGender = "male"

if(userGender == "male"){
    console.log("Allow")
}
else{
    console.log("Not Allow")
}
// condition no.3
var userAge = "20"

if(userAge === "20"){
    console.log("Allow")
}
else{
    console.log("Not Allow")
}
// condition no.4
var userAge = 21;
if(userAge > 20){
    console.log("Allow")
}
else{
    console.log("Not Allow")
}
// condition no.5
var userAge = 20
if(userAge >= 20){
    console.log("Allow")
}
else{
    console.log("Not Allow")
}
// condition no.6
var userAge = +prompt("Enter your Age");
if (userAge >= 18 && userAge <=40){
    console.log("Allow")
}
else{
    console.log("Not Allow")
}
// condition no.7
var userAge = +prompt("Enter your Age");

if(userAge >= 18 || userAge <= 40){
    console.log("Allow")
}
else{
    console.log("Not Allow")
}
// condition no.8
var userAge = +prompt("Enter your Age")
var userGender = prompt("Enter your Gender")
if(userAge >= 18 && (userGender == "male" || userGender == "female") ){
    console.log("Allow")
}
else{
    console.log("Not Allow")
}