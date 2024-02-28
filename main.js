$(document).ready(function() {
    $('#header-button').click(function() {
        $('form').slideDown();
    })

    $('#cancel-button').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
    })
})