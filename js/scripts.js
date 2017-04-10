//business logic
function Pet(name, animal, colors, age, breed, adopted) {
  this.name = name;
  this.animal = animal;
  this.colors = colors;
  this.age = age;
  this.breed = breed;
  this.adopted = false;
}
var petArray = [];
// user interface logic
$(document).ready(function() {

  $("#pet").submit(function(event) {
  event.preventDefault();
  var petName = $("input#pet-name").val();
  var petType = $(".size").val();
  var petAge = $("input#pet-age").val();
  var petColor = $("input#pet-color").val();
  var petBreed = $("input#pet-breed").val();

  var petObject = new Pet(petName, petType, petColor, petAge, petBreed);
  petArray.push(petObject);
  console.log(petArray);
  $(".added-pet").append(
      "<div class='panel'>" +
      "<div class='panel panel-heading'>" + petObject.name + "</div>" +
      "<div class='panel-body'>" +
          "<ul>" +
            "<li>" + petObject.animal + "</li>" +
            "<li>" + petObject.colors + "</li>" +
            "<li>" + petObject.age + "</li>" +
            "<li>" + petObject.breed + "</li>" +
            "<li>" + petObject.adopted + "</li>" +
            //add adopt button when adopted === false
          "</ul>" +
          "<button type='button' class='btn adopt-pet'><a href='#adopt'>Adopt</a></button>" +
        "</div>" +
      "</div>");
      $(".adopt-pet").last().click(function() {
        $("#pet-to-adopt").val(petObject.name);
      });
      $("#person-contact").submit(function(event) {
        event.preventDefault();
        var adoptName = $("#pet-to-adopt").val();
        for (i=0; i<petArray.length; i++){
          if (petObject.name === adoptName) {
            petObject.adopted = true;
          }
        }
          console.log(petObject);
        });


      });

     $(".added-pet").last().click(function() {
       $(".panel-body").show();
     });
   });
