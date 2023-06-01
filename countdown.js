// Set the date we're counting down to
const weddingDate = new Date("Jun 1, 2024 00:00:00").getTime();

function handleCountdownTimer(countDownDate) {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdowntimer"
  document.getElementById("countdowntimer").innerHTML = days + " dias, " + hours + " horas e "
  + minutes + " minutos";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(intervalId);
    document.getElementById("countdowntimer").innerHTML = "It is finally here!";
  }
}

// Call it once at the very beginning so that it already display a counter onscreen
handleCountdownTimer(weddingDate);

// Update the count down every 1 second
const intervalId = setInterval(
  () => handleCountdownTimer(weddingDate),
  60000
);
