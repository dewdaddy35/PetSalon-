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
let counter=0; 

//object constructor
function Pet(name,age,gender,breed,service,type){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petType=type;
    this.petID=counter++;
}
//global
let inputName= document.getElementById("#txtName");
let inputAge= document.getElementById("#txtAge");
let inputGender= document.getElementById("#txtGender");
let inputBreed= document.getElementById("#txtBreed");
let inputService= document.getElementById("#txtService");
let inputType= document.getElementById("#txtType");

// create the function
function isValid(aPet){
    let validation = true;//assuming everything is valid
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputGender.classList.remove("error");
    inputBreed.classList.remove("error");
    inputService.classList.remove("error");
    inputType.classList.remove("error");

    if(aPet.petName==""){
        validation= false;
        inputName.classList.add("error");
    }
    if(aPet.petAge==""){
        validation= false;
        inputAge.classList.add("error");
    }
    if(aPet.petGender==""){
        validation= false;
        inputGender.classList.add("error");
    }
    if(aPet.petBreed==""){
        validation= false;
        inputBreed.classList.add("error");
    }
    if(aPet.petService==""){
        validation= false;
        inputService.classList.add("error");
    }
    if(aPet.petType==""){
        validation= false;
        inputType.classList.add("error");
    }
    return validation;
}
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
if (isValid(newPet)==true){
    
salon.pets.push(newPet);
//displayCards();
displayTable();
clearInput();
}
}

function clearInput() {
inputName.value="";
inputAge.value="";
inputGender.value="";
inputBreed.value="";
inputService.value="";
inputType.value="";

}
function deletePet(ID){
console.log("Deleting pet" + ID);
let deleteIndex;
document.getElementById(ID).remove();
for(let i=0;i<salon.pets.length;i++){
    let pet=salon.pets[i];
    if(pet.petID==ID){
        deleteIndex=i;
    }
}
salon.pets.splice(deleteIndex,1);
//displayCards();
displayTable();
}
function init(){
    let pet1 = new Pet("Scooby", 10,"Male", "Pit Bull", "Bath","Dog");
    let pet2 = new Pet("Scrappy", 8, "Female", "Dobberman", "Nail Trim", "Dog");
    let pet3 = new Pet("Happy", 12, "Male", "Parrot","Vaccine", "Bird" );
    let pet4 = new Pet("Lady", 3, "Female", "Dane", "Vaccine and Bath","Cat");
    
    salon.pets.push(pet1,pet2,pet3,pet4);
    
    displayTable();
}

// console.log(salon.pets);


//displayCards();

window.onload=init;//wait to render the html to execute init
//displayInfo();
