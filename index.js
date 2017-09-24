//https://codepen.io/saamerm/pen/dVOvXK?editors=1111 
// x=500;
// document.getElementById("jsval").innerHTML = x;
// //Remove stuff above

// var showText = function (target, message, index, interval) {
//   if (index < message.length) {
//     $(target).append(message[index++]);
//     setTimeout(function () { showText(target, message, index, interval); }, interval);
//   }
// }
//https://stackoverflow.com/questions/7264974/show-text-letter-by-letter

//Keep stuff below this
$(function() {
  x = 500;
  addValue("#val", x, 500, 5);
  // showText("#msg", "Hello, World!", 0, 500); //Remove this line
//   var query="https://raw.githubusercontent.com/saamerm/Unearthed-Hackathon-Denver/master/values.json";
//   $.ajax({
//     url: query,
//     type: "GET",
//     dataType: "json"
//     success: function(data) {
//         var value = data[0].value; // get data value from json
//         $("#data").val(value);
//     console.log("Success");
//     }
//          error: {console.log("Error");}

// });  
});

var addValue = function(target, message, interval, loops) {
  for (i = 0; i < loops; i++) {
    setTimeout(function() {
      $(target).append(message + " ");
    }, interval);
    interval += 500;
    //https://stackoverflow.com/questions/5202403/how-to-add-pause-between-each-iteration-of-jquery-each
  }
};

//https://raw.githubusercontent.com/saamerm/Unearthed-Hackathon-Denver/master/values.json

