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
  // return
// "<table>" +
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
//   "<td>"this.image"</td>" +
//   "<td>"this.name"</td>" +
//   "<td>"this.animal"</td>" +
//   "<td>"this.colors"</td>" +
//   "<td>"this.age"</td>" +
//   "<td>"this.breed"</td>" +
//   "<td>"this.adopted"</td>" +
//  "</tr>" +
// "</table>"
console.log(this.name, this.animal, this.age);
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
    $(".test").click(function(event) {
      event.preventDefault();
      newPet.petInfo();
    });
    });
  });

  $(".add-pet").click(function() {
    $(".new-pet").append("<table>" +
     "<tr>" +
       "<th>image</th>" +
       "<th>name</th>" +
       "<th>animal</th>" +
       "<th>colors</th>" +
       "<th>age</th>" +
       "<th>breed</th>" +
       "<th>adopted</th>" +
     "</tr>" +
     "<tr>" +
      "<td>"+image+"</td>" +
      "<td>"+name+"</td>" +
      "<td>"+animal+"</td>" +
      "<td>"+colors+"</td>" +
      "<td>"+age+"</td>" +
      "<td>"+breed+"</td>" +
      "<td>"+adopted+"</td>" +
     "</tr>" +
    "</table>");
  });//end add pet
});

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedType = $(this).find("select.new-type").val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      console.log(inputtedType, inputtedStreet,inputtedCity, inputtedState);
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedType);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();

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
