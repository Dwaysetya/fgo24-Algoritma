for (let b = 0; b < 5; b++) {
  let penampung = "";
  for (let k = 5; k >= 0; k--) {
    if (k > b) {
      penampung += " ";
    } else if (k >= b) {
      penampung += "* ";
    }
  }
  console.log(penampung);
}

for (let a = 0; a < 5; a++) {
  let tempat = "";
  for (let b = 0; b < 5; b++) {
    if (a == 0 || a == 4 || b == 0 || b == 4) {
      tempat += "* ";
    } else {
      tempat += "  ";
    }
  }
  console.log(tempat);
}

for (let y = 4; y >= 0; y--) {
  let result = "";
  for (let m = 0; m < 5; m++) {
    if (m != y) {
      result += "* ";
    } else {
      result += " ";
    }
  }
  console.log(result);
}

for (let i = 0; i < 5; i++) {
  let wadah = "";
  for (let j = 5; j >= 0; j--) {
    if (j > i) {
      wadah += " ";
    } else {
      wadah += "* ";
    }
  }
  console.log(wadah);
}
