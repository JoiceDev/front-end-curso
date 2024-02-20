const form = document.getElementById('form-contact');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputContactName = document.getElementById ('contact-name');
    const inputPhoneNumber = document.getElementById ('phone-number');

    let row = '<tr>';
    row += ´<td>${inputContactName.value}</td>´;
    row += ´<td>${inputPhoneNumber.value}</td>´;
    row += '</tr>'

    const tablebody = document.querySelector('tbody');
    tablebody.innerHTML = row;
});
