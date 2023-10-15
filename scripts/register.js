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
    pets:[]
}

//object constructor
function Pet(name,age,gender,breed,service,type){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService-service;
    this.petAge.Type=type;
}
//global
let inputName= document.getElementById("txtName");
let inputAge= document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");
let inputBreed= document.getElementById("txtBreed");
let inputService= document.getElementById("txtService");
let inputType= document.getElementById("txtType");

// create the function
function register(){
//console.log("Registering");
//get the values from the form

//console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputType);

//create the newPet object

let newPet = new Pet(inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value,
    inputType.value);

console.log(newPet);
salon.pets.push(newPet);
clearInput();
}

function clearInput() {
inputName.value="";
inputAge.value="";
inputGender.value="";
inputBreed.value="";
inputService.value="";
inputType.value="";

}
function init(){
    let pet1 = new Pet("Scooby", 10,"Male", "Pit Bull");
    let pet2 = new Pet("Scrappy", 8, "Female", "Dobberman");
    let pet3 = new Pet("Happy", 12, "Male", "French Bulldog");
    let pet4 = new Pet("Lady", 3, "Female", "Dane");
    
    salon.pets.push(pet1,pet2,pet3,pet4);
   // console.log(salon.pets);
}

window.onload=init;//wait to render the html to execute init
//displayInfo();
