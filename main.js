const form = document.getElementById('form-contact');
let rows = '';
    
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    addRow ();
    updateTable ();

});

function addRow() {
    const inputContactName = document.getElementById ('contact-name');
    const inputPhoneNumber = document.getElementById ('phone-number');

    let row = '<tr>';
    row += `<td>${inputContactName.value}</td>`;
    row += `<td>${inputPhoneNumber.value}</td>`;
    row += '<tr>';

    rows += row;

    inputContactName.value = '';
    inputPhoneNumber.value = '';
};

function updateTable() {
    const tablebody = document.querySelector('tbody');
    tablebody.innerHTML = rows;
};
