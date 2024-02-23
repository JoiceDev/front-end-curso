const form = document.getElementById('form-contact');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputContactName = document.getElementById ('contact-name');
    const inputPhoneNumber = document.getElementById ('phone-number');

    let row = '';
    row += `${inputContactName.value}`;
    row += `${inputPhoneNumber.value}`;
    row += '';

    const tablebody = document.querySelector('tbody');
    
    tablebody.innerHTML = row;
});
