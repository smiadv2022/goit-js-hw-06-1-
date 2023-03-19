const formLogin=document.querySelector(".login-form");
formLogin.addEventListener ("submit", onFormSubmit);
function onFormSubmit (event){
event.preventDefault();

let mail =event.currentTarget.elements.email.value;
let pass =event.currentTarget.elements.password.value;

if (mail.trim()&& pass.trim()){
 alert ("This form has been successfully submitted");
const formData ={
mail,
pass
};
console.log (formData);

} else alert ("Email and Password should not be empty");

formLogin.reset();

}




// const formData = new FormData(event.currentTarget)