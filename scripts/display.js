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




/*function displayTable(){
    console.log("Tables");
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

TAB.innerHTML= card;
}
//get the div to display the cards
//

//travel the array
//<table class="table">
//<thead>
//  <tr>
//  <th scope="col">#</th>
//<th scope="col">Name</th>
//   <th scope="col">Age</th>
// <th scope="col">Gender</th>
//   <th scope="col">Breed</th>
// <th scope="col">Pet Service</th>
//  <th scope="col">Type</th>
//</tr>
//</table>


//create the html template


//insert the card into the register.html*/
