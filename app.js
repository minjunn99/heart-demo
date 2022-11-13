const heart = document.querySelector("#heart");

let n = 12;
let str = "";
let heartStr = "";
for (let i = n / 2; i < n; i += 2) {
    // print first spaces
    for (let j = 1; j < n - i; j += 2) {
        str += " ";
        heartStr += "&nbsp&nbsp";
    }
    // print first stars
    for (let j = 1; j < i + 1; j++) {
        str += "♥";
        heartStr += "<span>♥</span>";
    }
    // print second spaces
    for (let j = 1; j < n - i + 1; j++) {
        str += " ";
        heartStr += "&nbsp&nbsp";
    }
    // print second stars
    for (let j = 1; j < i + 1; j++) {
        str += "♥";
        heartStr += "<span>♥</span>";
    }
    str += "\n";
    heartStr += "<br />";
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
    for (let j = 0; j < n - i; j++) {
        str += " ";
        heartStr += "&nbsp&nbsp";
    }
    for (let j = 1; j < i * 2; j++) {
        str += "♥";
        heartStr += "<span>♥</span>";
    }
    str += "\n";
    heartStr += "<br />";
}
console.log(str);

heart.innerHTML = heartStr;
