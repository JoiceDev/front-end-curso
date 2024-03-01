$(document).ready(function() {
    $('#header-button').click(function() {
        $('form').slideToggle();
    })

    $('#cancel-button').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newImageAddress = $('#new-image-address').val();
        const newItem = $('<li></li>');

        $(`img src="${newImageAddress}" />`).appendTo(newItem);
        $(
            `<div class="overlay-image-link">
                <a href="${newImageAddress}" target="_blank" title="View full size image">
                    View full size image
                </a>
            </div>
    `).appendTo(newItem);
        $(newItem).appendTo('ul');
    })
})