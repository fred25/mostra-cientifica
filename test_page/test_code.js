var image = document.getElementById("image");

var but_1 = document.getElementById("but_1");

const dtype = new URLSearchParams(window.location.search).get("dtype");
//data types: "picture", "audio", "number"
dir = "../../UI/js_data/Image/0/00000_00000.jpg";

image.src = dir;

but_1.addEventListener("click", () => {
    image.src = "../../UI/js_data/Image/0/00000_00017.jpg";
});
