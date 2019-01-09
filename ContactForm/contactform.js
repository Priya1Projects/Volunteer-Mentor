$( function() {
// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", "contactform.php"); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
createform.setAttribute("onsubmit" ,"return validateForm()")
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak); 

var date = document.createElement('label'); // Create Label for E-mail Field
date.innerHTML = "Preffered Appointment date : ";
createform.appendChild(date);

$('<input id = "datepicker" name = "datepicker"   type= "text"></div>').appendTo(createform);
$( "#datepicker" ).datepicker({
                   onSelect: function (selectedDate) {},
                   dateFormat: "yy-mm-dd"
});
 

var datebreak = document.createElement('br');
createform.appendChild(datebreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");

createform.appendChild(submitelement);
     $('#spinner').removeAttr( "style" ).fadeOut(2000,function(){
            $('.fa-spin').fadeIn(1000);});



  } );
function validateForm()
{
  var a = $( "input[name$='dname']" ).val();
  if( a == '' || a == undefined)
  {

    alert("Please enter your name");
    return false;
  }
}