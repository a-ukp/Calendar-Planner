// current day and date
$("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));

// add event listener to save 'text' and 'time' on local storage
$(".saveBtn").on("click", function () {
    console.log(this);
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
})

// load local storage input

$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr13 .description").val(localStorage.getItem("hr13"));
$("#hr14 .description").val(localStorage.getItem("hr14"));
$("#hr15 .description").val(localStorage.getItem("hr15"));
$("#hr16 .description").val(localStorage.getItem("hr16"));
$("#hr17 .description").val(localStorage.getItem("hr17"));

// https://www.youtube.com/watch?v=k8yJCeuP6I8

function timeCheck() {
    var currentHr = parseInt(moment().hour());

    $(".description").each(function() {
        var planHr = parseInt($(this).attr("id"));

        if (planHr < currentHr) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } else if (planHr == currentHr) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");
        }
    });
}

timeCheck();
