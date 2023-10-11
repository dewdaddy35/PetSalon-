//objects lieral creating and object
//let student1={
//    name:"Eric",
//    age:28,
//    country:"usa"
//    address:{
//           street:"palm",
//           number:"22"
//           zip:"92027"
//          }
//music["Rolling Stones", "Beatles", "Queen"]
//}
//let student2={
//    name:"Jack",
//    age:"29",
//    country:"USA"
//}
//console.log(student1.name);
//console.log(student1.address.zip);
//console.log(student1.music[1]); display beatles
let salon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm",
        zip:"92027"
        },
    hours:{
    open:"9:00 am",
    close:"8:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age:70
        },
        {
            name:"Scappy",
            age:60
        }
        
    ]
}
// create the function
function displayInfo(){
document.getElementById("pets").innerHTML=`Welcome to ${salon.name}.....close at ${salon.hours.close}`;

}
//call/run/execute the function
displayInfo();
function displayPetNames(){
    console.log(salon.pets[0].name);
    console.log(salon.pets[1].name);

}
displayPetNames();

