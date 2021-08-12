let h3_css = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");
let btn = document.querySelector(".random");

let gradient = window.getComputedStyle(body).getPropertyValue('background-image');
btn.style.background = gradient;
let c1 = gradient.substring(26, 40);
let c2 = gradient.substring(42, 58);


h3_css.textContent = gradient + ";";

color1.value = RGBToHex(c1);
color2.value = RGBToHex(c2);

function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    btn.style.background = body.style.background;
    h3_css.textContent = body.style.background + ";";
}

function randomize(color) {
    let rand = "rgb(" + Math.floor(Math.random() * 256)
        + ", "
        + Math.floor(Math.random() * 256)
        + ", "
        + Math.floor(Math.random() * 256)
        + ")";
    color.value = RGBToHex(rand);
    console.log(color.value);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", () => {
    randomize(color1);
    randomize(color2);
    setGradient();
});


