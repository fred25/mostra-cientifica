var image = document.getElementById("image");

const dtype = new URLSearchParams(window.location.search).get("dtype");
//data types: "picture", "audio", "number"
dir = "../../UI/Python_codes/" + dtype + "/Data/0/00000_00000.ppm";

image.src = dir;
