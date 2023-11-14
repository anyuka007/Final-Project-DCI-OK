// Array mit Wege zu Bilder
var images = ["img/mrija.webp", "img/pisky1.png", "img/pisky2.jpg"];
var currentImageIndex = 0;

// Funktion, die den Wechsel der Bilder macht
function changeImage() {
  const image = document.getElementById("img-change");
  image.src = images[currentImageIndex];
  image.alt = "Photo " + (currentImageIndex + 1);

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Die Funktion berechnet, wie viel Zeit vergangen ist, seitdem ich in der Ukraine war.
const startDate = new Date("2022-01-28T08:00:00");

function updateTimer() {
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const timerElement = document.getElementById("timer");
  timerElement.innerHTML = `${days} d, ${hours} h, ${minutes} min, ${seconds} s`;
}

// Fotos alle 3s wechseln
setInterval(changeImage, 3000);

// Aktualisierung des Timers alle Sekunde
setInterval(updateTimer, 1000);

// Aufruf der Timer-Funktion beim Laden der Seite.
updateTimer();
