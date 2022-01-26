var date = moment().format('MMM Do YYY');

$("#currentDay").append(date);

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
    var currentTime = moment().format('H');
    for(var i = 0; i < timeOfday.length; i++) {

        if (currentHours < time) {
            $(this).addClass("past");
        } else if (currentHours === time) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    }
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);})