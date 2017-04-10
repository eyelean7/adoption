//business logic
function Pet(image, name, animal, colors, age, breed, adopted) {
  this.image = image;
  this.name = name;
  this.animal = animal;
  this.colors = colors;
  this.age = age;
  this.breed = breed;
  this.adopted = adopted;
}



Pet.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Pet.prototype.petInfo = function() {
  return "hello"
// "<div>" +
//  "<ul>" +
//   "<li>" + this.image + "</li>" +
//   "<li>" + this.name + "</li>" +
//   "<li>" + this.animal + "</li>" +
//   "<li>" + this.colors + "</li>" +
//   "<li>" + this.age + "</li>" +
//   "<li>" + this.breed + "</li>" +
//   "<li>" + this.adopted + "</li>" +
//  "</ul>" +
// "</div>";
// console.log(this.name, this.animal, this.age);

}



// user interface logic
$(document).ready(function() {
  $(".add-pet").click(function(event) {
    event.preventDefault();
    $(".pet").show();
    $(".pet").submit(function(event) {
    event.preventDefault();
    var petName = $("input#pet-name").val();
    var petType = $(".size").val();
    var petAge = $("input#pet-age").val();
    var newPet = new Pet("image", petName, petType, ["blue", "greeen"], petAge, "calico", false);
    console.log(newPet);
    $(".new-pet").append(
      "<li>"+ newPet.petInfo() + "</li>");



    $(".test").click(function(event) {
      event.preventDefault();
      newPet.petInfo();
      console.log(newPet.petInfo());

    });
    $(".added-pet").click(function() {


    });
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
