$(document).ready(function() {


mastermind.init();
$('.circle').on('click', mastermind.colorEvent);
$('#valider').on('click', mastermind.validation);
$('.recommencer').on('click', mastermind.retry);
});
