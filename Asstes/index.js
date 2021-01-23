
$(document).ready(function(){
    $(".saveBtn").on("click", function(e) {
        var input = $("#textInput").val().trim();
        localStorage.setItem('value', input);
        localStorage.getItem('value');
        e.preventDefault();
        }
        )
        
})
