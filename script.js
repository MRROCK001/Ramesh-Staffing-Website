emailjs.init("YOUR_PUBLIC_KEY");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

const templateParams = {

name: document.querySelector('[name="name"]').value,

email: document.querySelector('[name="email"]').value,

message: document.querySelector('[name="message"]').value,

to_email: "sahil656556hay@gmail.com"

};

emailjs.send(
"service_arc60xq",
"YOUR_TEMPLATE_ID",
templateParams
)

.then(function(){

alert("Message sent successfully");

document
.getElementById("contact-form")
.reset();

})

.catch(function(error){

alert("Failed : " + JSON.stringify(error));

});

});
