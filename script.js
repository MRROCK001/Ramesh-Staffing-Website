emailjs.init("RaxFUuEpa4IUul_7m");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_y7ui1tt",
"template_ltq5ab7",
this
)

.then(function(){

alert("Message Sent Successfully");

document
.getElementById("contact-form")
.reset();

})

.catch(function(error){

alert(
"Failed : " + JSON.stringify(error)
);

});

});
