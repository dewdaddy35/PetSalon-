function displayCards(){
    console.log("Displaying");
    console.log(salon.pets);
    const DIV = document.getElementById("pets");
    let card="";
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        card+=`
        <div class=pet>
        <p>Name: ${pet.petName}</p>
        <p>Age: ${pet.petAge}</p>
        <p>Gender: ${pet.petGender}</p>
        <p>Breed: ${pet.petBreed}</p>
        <p>Service: ${pet.petService}</p>
        <p>Type: ${pet.petType}</p>
        </div>
        `;
    }

DIV.innerHTML= card;
}


function displayTable(){

}
//get the div to display the cards


//travel the array



//create the html template


//insert the card into the register.html
