// //#region 
// function displayCards(){
//     console.log("Displaying");
//     const DIV = document.getElementById("pets");
//     let card="";
//     for(let i=0;i<salon.pets.length;i++){
//          let pet=salon.pets[i];
//        card+=`
//         <div id="${pet.petID}" class=pet>
//         <p>Name: ${pet.petName}</p>
//         <p>Age: ${pet.petAge}</p>
//         <p>Gender: ${pet.petGender}</p>
//         <p>Breed: ${pet.petBreed}</p>
//         <p>Service: ${pet.petService}</p>
//         <p>Type: ${pet.petType}</p>
//         <button class="btn btn-danger" onclick="deletePet(${pet.petID})">Delete</button>
//         </div>
//         `;
//     }

// //DIV.innerHTML= card;
// getTotal();

// }
// //#endregion
function getTotal(){
    const TOTAL= document.getElementById("total");
    TOTAL.innerHTML=salon.pets.length;
}



function displayTable(){
    const DIV = document.getElementById("pets");
    let tr ="";
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        tr +=`
        <tr id= ${pet.petID}>  
        <td>Name: ${pet.petName}</td>
        <td>Age: ${pet.petAge}</td>
        <td>Gender: ${pet.petGender}</td>
        <td>Breed: ${pet.petBreed}</td>
        <td>Service: ${pet.petService}</td>
        <td>Type: ${pet.petType}</td>
        <td><button class="btn btn-danger" onclick="deletePet(${pet.petID})">Delete</button></td>
        </tr>
        `;
    }
    DIV.innerHTML = tr;
getTotal();
}
displayTable();

//insert the card into the register.html*/
