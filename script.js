console.log("Ramesh Staffing Website Loaded");
emailjs.init("YOUR_PUBLIC_KEY");

document
.getElementById("contact-form")
.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(
"service_arc60xq",
"YOUR_TEMPLATE_ID",
this
)

.then(function(){

alert("Message Sent Successfully");

})

.catch(function(error){

alert("Error : "+error);

});

});
