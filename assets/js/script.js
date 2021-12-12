// Current date time

var todaysDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(todaysDate);

// Save Tasks

$(".saveBtn").on("click", function() {
    var textDesc = $(this).siblings(".description").val();
    var timeId = $(this).siblings(".hour").text();

    localStorage.setItem(timeId, textDesc);
    console.log(timeId, textDesc);
});

// Load Tasks
var loadTasks = function() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentDesc = localStorage.getItem(currentHour);

        if(currentDesc !== null) {
            $(this).siblings(".description").val(currentDesc);
        }
    });
};

// Set background to indicate which time along with present/future

var hourTracker = function() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } if (blockTime == currentTime) {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        } if (blockTime > currentTime) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
}

hourTracker();
loadTasks();