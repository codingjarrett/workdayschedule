//Date is displayed in the Jumbotron.
$('#todayDay').text(moment().format('dddd, MMMM Do YYYY'));
//Starts the function to display the colors for the applicable text boxes (prior, current, next).
function setColor() {
//Sets the time to appear in the current hour, using moment.js
    var currentHourblock = moment().hours();
$('.time-block').each(function() {
//Sets the time for each time block, to current, prior or next.
        var hours = parseInt($(this).attr('id'));
//IF the time is before the curent time,
        if (hours < currentHourblock) {
//THEN set the class for times prior to the current time.
            $(this).addClass('prior');
//IF the time is on par with the current time,
        } else if (hours == currentHourblock) {
//THEN set the class for current.
            $(this).addClass('current');
//IF the time is pase the current time,
        } else {
//THEN set the class to be the next time.
            $(this).addClass('next');
        };
    });
};
//Sets the color for the rows of information.
setColor();
//Uses class to set the save button to retain info in event of page reload.
var saveBtn = $('.saveBtn');
//Allows the save button to save information in local storage.
saveBtn.on('click', function() {
//Sets the hour class variable.
    var time = $(this).siblings('.hour').text();
//Sets the description for the hour class variable.
    var description = $(this).siblings('.description').val();
//Allows the times and descriptions to be saved in the localstorage.
    localStorage.setItem(time, description);
});
//Function to allow information to remain after a page refresh.
function renderDescription() {
    $('.hour').each(function() {
//Sets text for the variable in the hour class.
        var hour = $(this).text();
//allows the site to retain and redisplay information, even after the page is refreshed.
        var description = localStorage.getItem(hour);
//IF there is a description,
        if (description !== null) {
//THEN set the value of that description.
            $(this).siblings('.description').val(description);
        };
    });
};
//IF the page is refreshed, THEN the information is displayed as is.
renderDescription();