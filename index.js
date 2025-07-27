let userSubmit = document.getElementById("user-submit");
let userValue = document.getElementById("grid-size");
let rainbowInterval = null;
userSubmit.addEventListener("click", () => {
  MakeGrid(userValue.value);
});

function MakeGrid(number) {
  let container = document.querySelector(".container");
  let row = document.querySelectorAll(".row");
  console.log(row);
  if (row.length != 0) {
    for (let i = 0; i < row.length; i++) {
      container.removeChild(row[i]);
    }
  }
  for (let i = 0; i < number; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < number; j++) {
      let col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
    }
  }
  Pen("black");
}

function Pen(color) {
  let colList = document.querySelectorAll(".col");
  colList.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = color;
    });
  });
}

let clear = document.querySelector("#clear-button");
clear.addEventListener("click", () => {
  let colList = document.querySelectorAll(".col");
  colList.forEach((item) => {
    item.style.backgroundColor = "";
  });
});

let setColor = document.querySelectorAll('input[type="radio"]');
setColor.forEach((item) => {
  item.addEventListener("click", () => {
    clearInterval(rainbowInterval);
    switch (item.value) {
      case "red":
        Pen("red");
        console.log("Should be red");
        break;
      case "black":
        Pen("black");
        break;
      case "rainbow":
        rainbowInterval = setInterval(() => {
          let color = getRandomColor();
          Pen(color);
        }, 500);
        console.log("Should be pink");
        break;
      case "erazer":
        Pen("");
        break;
    }
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

MakeGrid(10);
