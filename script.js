function setMood(mood) {
  const emoji = document.getElementById("emoji");
  const text = document.getElementById("text");

  if (mood === "happy") {
    document.body.style.background = "#fff6c7";
    emoji.textContent = "😊";
    text.textContent = "Сьогодні чудовий день!";
  }

  if (mood === "calm") {
    document.body.style.background = "#dff5f0";
    emoji.textContent = "😐";
    text.textContent = "Спокій і баланс";
  }

  if (mood === "sad") {
    document.body.style.background = "#e6e6e6";
    emoji.textContent = "😢";
    text.textContent = "Все буде добре";
  }
}
