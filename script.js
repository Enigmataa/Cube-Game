const box = document.querySelector(".box");
let counter = 1;
const body = document.querySelector("body");
const labelTimer = document.querySelector(".timer");
const missBox = document.querySelector(".missBox");
const message = document.querySelector(".message");
const end = document.querySelector(".game-over");
let counter2 = 1;

//good code 𐐘🤝ඞ
box.addEventListener("click", position);
function position() {
  let x = Math.floor(Math.random() * 500) + 1;
  let y = Math.floor(Math.random() * 500) + 1;
  box.style.left = x + "px";
  box.style.top = y + "px";
}

//counter
box.addEventListener("click", function (event) {
  // preventDefault();
  event.stopImmediatePropagation();

  document.getElementById("heading").textContent = `Points: ${counter++}`;
  box.style.transform = "scale(0.8)";
  document.body.style.backgroundColor = "aqua";
  // message.style.visibility = "hidden";
  const startTimer = function () {
    const tick = function () {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);
      //in each call print the remaining time to UI
      labelTimer.textContent = `${min}:${sec}`;
      //when 0 sec stop timer and log out user
      if (time === 0) {
        // document.querySelector("#heading").textContent = "Start Over";
        clearInterval(time);
        clearTimeout(timer);
        document.body.style.backgroundColor = "#f75426";
        counter = 1;
        // message.style.visibility = "visible";
        document.querySelector(".game-over").style.display = "flex";
      }
      time--;
    };
    let time = 3;
    tick();

    const timer = setInterval(tick, 1000);
    return timer;
  };
  if (timer) clearInterval(timer);
  timer = startTimer();
});
let timer;
box.addEventListener("mousedown", function (event) {
  //   preventDefault();
  event.stopImmediatePropagation();
  //   document.getElementById("h1").innerHTML = ++counter;
  box.style.transform = "scale(2)";
  //   const style = getComputedStyle(box);
});

// body.addEventListener("click", function (event) {
//   //   preventDefault();
//   event.stopPropagation();
//   document.getElementById("heading").textContent = --counter;
//   startTimer();
// });
body.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "aqua";
  e.stopImmediatePropagation();
  missBox.textContent = `Misses: ${counter2++}`;
  // message.style.visibility = "hidden";
  document.querySelector(".game-over").style.display = "none";
  const startTimer = function () {
    const tick = function () {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);
      //in each call print the remaining time to UI
      labelTimer.textContent = `${min}:${sec}`;
      //when 0 sec stop timer and log out user
      if (time === 0) {
        // document.querySelector("#heading").textContent = "Start Over";
        clearInterval(time);
        clearTimeout(timer);
        document.body.style.backgroundColor = "#f75426";
        counter = 0;
        // message.style.visibility = "visible";
        document.querySelector(".game-over").style.display = "flex";
      }
      time--;
    };
    let time = 3;
    tick();

    const timer = setInterval(tick, 1000);
    return timer;
  };
  if (timer) clearInterval(timer);
  timer = startTimer();
});

end.addEventListener("click", function () {
  document.getElementById("heading").textContent = `Points: ${(counter = 0)}`;
  missBox.textContent = `Misses: ${(counter2 = 0)}`;
});

// if (counter == 5) {
//   alert(`You win!`);
// }
// function greet() {
//   if (!) setTimeout(greet, 5000);
// }
