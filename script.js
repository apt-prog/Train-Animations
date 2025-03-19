let REDLIGHT = document.getElementById("Red");
let YELLOLIGHT = document.getElementById("Yellow");
let GREENLIGHT = document.getElementById("Green");
let TIMER = document.getElementById("Timeing");
let Time = 5;

REDLIGHT.style.opacity = "1";
REDLIGHT.style.boxShadow = "0 0 1.5rem red";

YELLOLIGHT.addEventListener("click", function () {
  REDLIGHT.style.opacity = ".65";
  REDLIGHT.style.boxShadow = "none";
  YELLOLIGHT.style.boxShadow = "0 0 1.5rem yellow";
  YELLOLIGHT.style.opacity = "1";

  const intervalId = setInterval(() => {
    TIMER.innerHTML = `${Time}  SEC`;
    Time--;
    if (Time < 0) {
      clearInterval(intervalId);
      Time = 0;
      TIMER.innerHTML = "The Train Have Leave The Platform";
    }
  }, 1000);

  setTimeout(() => {
    let Train = document.querySelector(".Train");
    Train.style.top = "-200%";
  }, 6000);
});

GREENLIGHT.addEventListener("click", function () {
  REDLIGHT.style.opacity = ".65";
  REDLIGHT.style.boxShadow = "none";
  GREENLIGHT.style.opacity = "1";
  GREENLIGHT.style.boxShadow = "0 0 1.5rem green";
  TIMER.innerHTML = "The Train Have Leave The Platform";
  setTimeout(() => {
    let Train = document.querySelector(".Train");
    Train.style.top = "-200%";
  }, 500);
});

REDLIGHT.addEventListener("click", function () {
  REDLIGHT.style.opacity = "1";
  REDLIGHT.style.boxShadow = "0 0 1.5rem red";
  GREENLIGHT.style.opacity = ".65";
  GREENLIGHT.style.boxShadow = "none";
  YELLOLIGHT.style.opacity = ".65";
  YELLOLIGHT.style.boxShadow = "none";
  
});
