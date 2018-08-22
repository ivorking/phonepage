// check JS running
console.log("javascript connected");

// declare default status variables
var currentChoice = "094364";

// check jQuery running
if (jQuery) {
  console.log("jquery working");
} else {
  console.log("jquery not working");
}

// render default status
$('#currentimage')

$(document).ready(function() {


  // check to see if any buttons have been clicked and update accordingly
  $('.colourbeige').on('click', function () {
    console.log('clicked');
  });
    // if (pageCounter == 2) {

    //   formData.telephone = $('#firstbox').val();
    //   formData.emailaddress = $('#secondbox').val();

    //   // check not empty fields before submitting

    //   if ((formData.telephone) && (formData.emailaddress)) {
    //     console.log("form submitted, with the following data:", formData);
    //     window.confirm('Form submitted!');
    //   }

    // } else {

    //   formData.firstname = $('#firstbox').val();
    //   formData.lastname = $('#secondbox').val();

    //   // check not empty fields before moving to page 2

    //   if ((formData.firstname) && (formData.lastname)) {

    //     $('#first').css("background-color", "#AAAAAA");
    //     $('#second').css("background-color", "#717171");

    //     $('#firstbox').val("");
    //     $('#secondbox').val("");

    //     // update the input form for page 2
    //     $('#firsttext').text("Telephone number:");
    //     $('#secondtext').text("Email address:");

    //     console.log('switching to input form page 2');
    //     pageCounter = 2;
    //   }
    // }
});