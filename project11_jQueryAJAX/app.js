// // STEP ONE
// // Make a XML Http Request Oobjext
// const xhr = new XMLHttpRequest();
// // STEP TWO
// // create a callback function
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         let div = document.getElementById("ajax");
//         div.innerHTML = xhr.responseText;
//     }
// };
// // STEP THREE
// // Open a request
// xhr.open("GET", "content.html");
// // STEP FOUR
// // Send a request
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     xhr.send();
//     button.style.display = "none";
// });

// now with jQuery
$("button").on("click", function() {
    $("#ajax").load("content.html");
    $("button").hide();
});

// WILL NOT WORK! JUST A REMINDER OF HOW THE GET METHOD WORKS
// // jQuery.get() method
// var url = "/script.php";
// // the data will be passed with the url in a query string at the end of it
// var data = {
//     "name": "Tim",
//     "password": 12345
// }
// // response is equal to the xhr.responseText
// var callback = function(response) {
//     console.log(response);
// }
//
// $.get(url, data, callback);

// $.get("content.html", function(response) {
//     $("#ajax").html(response);
//     $("button").hide();
// });


// process data from a form with jQuery
// only works with a server

$("form").submit(function(event) {
    // prevents loading a new page
    event.preventDefault();

    let url = $(this).attr("action");
    // will process all the form data into a usable object
    let formData = $(this).serialize();

    $.post(url, formData, function(response) {
        $("<p>").html("Thanks for subscribing!").append("body");
    });
});
