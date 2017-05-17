$(document).ready(function(){
  preventSubmit()
});

function preventSubmit() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    console.log($('#item').val());
    let new_item = $('<li></li>').addClass('task');
    new_item.html($('#item').val());
    new_item.appendTo('#list ol');
  })
}
