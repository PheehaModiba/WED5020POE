function Validateform(){
    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if(name.trim() === ''){
        isValid = false;
        document.getElementById('nameError').innerText = 'Name is required.';
    } else {
        document.getElementById('nameError').innerText = '';
    }
    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        isValid = false;
        document.getElementById('emailError').innerText = 'Invalid email format.';
    } else {
        document.getElementById('emailError').innerText = '';
    }

    return isValid;

}
function ClearErrors(){
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';

    // Clear other errors as needed
   const otherErrorElements = document.querySelectorAll('.error');
   otherErrorElements.forEach(element => {
       element.innerText = '';
   });
}
export { Validateform, ClearErrors, validatePhoneNumber };
// Additional validation function for phone number
function validatePhoneNumber(){
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;
   if(!phonePattern.test(phone)){
       document.getElementById('phoneError').innerText = 'Invalid phone number format.';
       return false;
   } else {
       document.getElementById('phoneError').innerText = '';
       return true;
   }
}
