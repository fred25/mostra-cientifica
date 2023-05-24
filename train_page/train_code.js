var image = document.getElementById("image");
var level = document.getElementById("level");
var total = document.getElementById("total");

var but_1 = document.getElementById("but_1");
var but_2 = document.getElementById("but_2");
var but_3 = document.getElementById("but_3");
var next_but = document.getElementById("next");

const dtype = new URLSearchParams(window.location.search).get("dtype");
//data types: "picture", "number"

data_list = [];
x = 0;

function select_image(list) {
    n = Math.floor(Math.random() * 4);
    if (list.includes(n)) {
        n = select_image(list);
    }
    return n;
}

function show_answer_image(image) {
    let right = image.split("/")[image.split("/").length - 2];
    but_dict = { 0: but_1, 1: but_2, 2: but_3 };

    for (i in but_dict) {
        if (Number(but_dict[i].innerHTML) - 1 == Number(right))
            but_dict[i].classList.add("right");
        else but_dict[i].classList.add("wrong");
    }
}

if (dtype == "Image") {
    for (folder in ["0", "1", "2"]) {
        numbers_gone = [];
        for (i = 0; i < 3; i++) {
            num = select_image(numbers_gone);
            numbers_gone.push(num);
            data_list.push(
                "../js_data/Image/" +
                    folder +
                    "/0000" +
                    String(num) +
                    "_00000.jpg"
            );
        }
    }
} else if (dtype == "Number") {
    console.log("number");
    //TODO
} else {
    console.error("Invalid Data type");
}

data_list = data_list.sort(() => Math.random() - 0.5);

image.src = data_list[x];

total.innerHTML = data_list.length - 1;

but_1.addEventListener("click", () => {
    show_answer_image(image.src);
});

but_2.addEventListener("click", () => {
    show_answer_image(image.src);
});

but_3.addEventListener("click", () => {
    show_answer_image(image.src);
});

next_but.addEventListener("click", () => {
    but_1.classList.remove("right", "wrong");
    but_2.classList.remove("right", "wrong");
    but_3.classList.remove("right", "wrong");

    if (x < data_list.length - 1) x++;
    image.src = data_list[x];
    level.innerHTML = x;
});
