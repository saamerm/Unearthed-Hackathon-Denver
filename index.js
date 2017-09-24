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
  var query =
    "https://raw.githubusercontent.com/saamerm/Unearthed-Hackathon-Denver/master/values.json";
  var y = getData(query, "#data");
  $(jsval).append(y - 1 + " ");
var z=getValue();
    $(api).append(z + " ");


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
var getData = function(query, target) {
  $(target).append(query + " ");
  x = 500;
  // var data="";
  // var $;
  // $.ajax({
  //           type: "GET",
  //           // for community pages, use whole community url including path, e.g. 
  //           // https://logan.blitz01.t.force.com/customers/services/proxy.
  //           url: query, 
  //           contentType: 'application/json',
  //           // cache: false,
  //           success : function(response) {
  //                         alert("result" + response);
  //                         console.log("result" + response);
  //                  },
  //           error : function(response) {
  //                         alert("Failed" + response);
  //             console.log("result" + response);
  //                  },                 
  //           dataType: "json",          
  //           };
  // var parsedData = JSON.parse(data);
  // return parsedData.value;
  return x;
};

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
function getValue() {
  //https://codepen.io/brianjmacdonald/pen/VamEWG?q=ajax%20json&limit=all&order=popularity&depth=everything&show_forks=false
  var apiResult;
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "https://raw.githubusercontent.com/saamerm/Unearthed-Hackathon-Denver/master/values.json",
		success: function(json) {
			var inputOptions = '';
      apiResult=json.value;
console.log(apiResult-2);
       // alert('Success');
      //return json.value;
		}, 
		error: function(data) {
			alert('Error loading data, please check url.');
		}
	});
  console.log("ye");
  return apiResult;
}
