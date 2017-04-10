//business logic
function Pet(name, animal, colors, age, breed) {
  this.name = name;
  this.animal = animal;
  this.colors = colors;
  this.age = age;
  this.breed = breed;
  this.adopted = false;
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

  var newPet = new Pet(petName, petType, petColor, petAge, petBreed);
  console.log(newPet);
  newPet.petInfo();
  $(".added-pet").append(
      "<div class='panel'>" +
      "<div class='panel panel-heading'>" + newPet.name + "</div>" +
      "<div class='panel-body'>" +
          "<ul>" +
            "<li>" + newPet.animal + "</li>" +
            "<li>" + newPet.colors + "</li>" +
            "<li>" + newPet.age + "</li>" +
            "<li>" + newPet.breed + "</li>" +
            "<li>" + newPet.adopted + "</li>" +
            //add adopt button when adopted === false
          "</ul>" +
          "<button type='button' class='btn adopt-pet'><a href='#adopt'>Adopt</a></button>" +
        "</div>" +
      "</div>");
      $(".adopt-pet").click(function() {
        $("#pet-to-adopt").val(newPet.name);
      });

     $(".added-pet").last().click(function() {
       $(".panel-body").show();

       console.log(newPet.colors);
     });
   });
});
