//let timesArr= ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]; 
//for (let i=1; i<timesArr.length; i++){
 //   let newTimeBlockEL= $("#time").clone();
   // newTimeBlockEL.attr("id", timesArr[i]); 
    //newTimeBlockEL.children(".row").attr("style", "white-space: pre-Wrap"); 
    //newTimeBlockEL.children(".row").children(".hour").text(timesArr[i]); 
    //newTimeBlockEL.appendTo(".container"); 
//}


$(".saveBtn").on("click", function() {
var input = $("#textInput").val().trim();
localStorage.setItem('value', input);
localStorage.getItem(input);
}
)
