/* global $ */
$(function() {
    $('h1').html('Hello jQuery!');
    $('button').click(function() {
        $('h1').fadeToggle(3000);
    });
});



function showMessage() {
    $('#msg').html('Some Message');
}