function setMood(mood) {
  const emoji = document.getElementById("emoji");
  const text = document.getElementById("text");

  if (mood === "happy") {
    document.body.style.background = "#fff6c7";
    emoji.textContent = "😊";
    text.textContent = " Today is a wonderful day!";
  }

  if (mood === "calm") {
    document.body.style.background = "#dff5f0";
    emoji.textContent = "😐";
    text.textContent = " Calm and balance ";
  }

  if (mood === "sad") {
    document.body.style.background = "#e6e6e6";
    emoji.textContent = "😢";
    text.textContent = " Everything will be fine ";
  }
}


