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
myPet = new Pet("img/cuddles.jpg", "Buster", "cat", "calico", 4, "calico", false);
// Pet.prototype.petInfo = function() {
//   return
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
//   "<td>"image"</td>" +
//   "<td>"name"</td>" +
//   "<td>"animal"</td>" +
//   "<td>"colors"</td>" +
//   "<td>"age"</td>" +
//   "<td>"breed"</td>" +
//   "<td>"adopted"</td>" +
//  "</tr>" +
// "</table>"
// }



// user interface logic
$(document).ready(function() {
  $(".clicky").click(function(event) {
    event.preventDefault();
    console.log(myPet);

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
    });
  });
});
  // $("#add-address").click(function() {
  //   $("#new-addresses").append('<div class="new-address removable">' +
  //                                '<div class="form-group">' +
  //                                  '<label for="new-street">Street</label>' +
  //                                  '<input type="text" class="form-control new-street">' +
  //                                '</div>' +
  //                                '<div class="form-group">' +
  //                                  '<label for="new-city">City</label>' +
  //                                  '<input type="text" class="form-control new-city">' +
  //                                '</div>' +
  //                                '<div class="form-group">' +
  //                                  '<label for="new-state">State</label>' +
  //                                  '<input type="text" class="form-control new-state">' +
  //                                '</div>' +
  //                              '</div>' +
  //                              '<div>' + '<label for="addressType">Type of Address</label><br>' +
  //                              '<select class="form-group" class="new-type">' + '<option>Home</option>' +
  //                              '<option>Work</option>' + '<option>Mailing</option>' + '<option>Other</option>' +
  //                              '</select>' + '</div>'
  //                            );
  // });

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
