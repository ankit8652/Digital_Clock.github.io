$(document).ready(function () {
  function showTime() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();

    var session = "AM";

    if (hours == 00) {
      hours = 12;
    }

    if (hours >= 12) {
      session = "PM";
    }

    if (hours > 12) {
      hours -= 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    $("#hours").text(hours);
    $("#min").text(minutes);
    $("#sec").text(second);
    $("#period").text(session);

    setTimeout(showTime, 1000);
  }

  showTime();
});
