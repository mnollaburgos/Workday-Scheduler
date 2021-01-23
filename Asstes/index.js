
$(document).ready(function(){
    $(".saveBtn").on("click", function(e) {
        var input = $("#textInput").val().trim();
        localStorage.setItem('value', input);
        localStorage.getItem('value');
        e.preventDefault();
        })
        
})

window.setInterval(function(){
    now = new Date;
  c = now.getMinutes();
  if (c < 60 ) {
  $('.container').css('background', 'red');
  }
  }, 1000);
  