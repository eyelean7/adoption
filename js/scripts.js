//business logic
function Pet(name, animal, colors, age, breed) {
  this.name = name;
  this.animal = animal;
  this.colors = colors;
  this.age = age;
  this.breed = breed;
}



Pet.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Pet.prototype.petInfo = function() {
  return this.name, this.animal;

console.log(this.name, this.animal, this.age);

}



// user interface logic
$(document).ready(function() {

  $("#pet").submit(function(event) {
  event.preventDefault();
  var petName = $("input#pet-name").val();
  var petType = $(".size").val();
  var petAge = $("input#pet-age").val();
  var petColor = $("input#pet-color").val();
  var petBreed = $("input#pet-breed").val();

  var newPet = new Pet(petName, petType, petAge, petColor, petBreed);
  console.log(newPet);
  newPet.petInfo();

  $(".new-pet").append(
      "<li>" + newPet.name + "</li>" +
      "<li>" + newPet.animal + "</li>" +
      "<li>" + newPet.colors + "</li>" +
      "<li>" + newPet.age + "</li>" +
      "<li>" + newPet.breed + "</li>" +
      "<li>" + newPet.adopted + "</li>"
      //add adopt button when adopted === false
);

    // "<li>"+ newPet.petInfo() + "</li>");



  $(".test").click(function(event) {
    event.preventDefault();
    newPet.petInfo();
    console.log(newPet.petInfo());

  });
  $(".added-pet").click(function() {



  });


    //   "<table>" +
    //  "<tr>" +
    //    "<th>image</th>" +
    //    "<th>name</th>" +
    //    "<th>animal</th>" +
    //    "<th>colors</th>" +
    //    "<th>age</th>" +
    //    "<th>breed</th>" +
    //    "<th>adopted</th>" +
    //  "</tr>" +
    //  "<tr>" +
    //   "<td>"+newPet.image+"</td>" +
    //   "<td>"+newPet.name+"</td>" +
    //   "<td>"+newPet.animal+"</td>" +
    //   "<td>"+newPet.colors+"</td>" +
    //   "<td>"+newPet.age+"</td>" +
    //   "<td>"+newPet.breed+"</td>" +
    //   "<td>"+newPet.adopted+"</td>" +
    //  "</tr>" +
    // "</table>"

  });//end add pet
});




// backend

//
// function Image() {
//
// }
var img = new Image();   // Create new img element
userImage = $("#image").val();
img.src = userImage;

// ui
$(function() {
  $(".clicky").click(function(event) {
    event.preventDefault();
    $("body").addClass("blue");
  })
})
