var image = document.getElementById("image");
var score_text = document.getElementById("score");

var but_1 = document.getElementById("but_1");

const dtype = new URLSearchParams(window.location.search).get("dtype");
//data types: "picture", "audio", "number"

data_list = [];
score = 0;

function select_numbers(list) {
    n = Math.floor(Math.random() * 4);
    if (list.includes(n)) {
        n = select_numbers(list);
    }
    return n;
}

function check_image(guess, image) {
    console.log(guess);
    console.log(image);
    if (guess == image.split("/")[image.split("/").length - 2]) {
        return true;
    } else {
        return false;
    }
}

function check_x(x, list) {
    if (x < list.length - 1) {
        return true;
    }
    return false;
}

if (dtype == "Image") {
    for (folder in ["0", "1", "2"]) {
        numbers_gone = [];
        for (i = 0; i < 3; i++) {
            num = select_numbers(numbers_gone);
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
} else if (dtype == "Audio") {
    console.log("AUdio");
    //TODO
} else if (dtype == "Number") {
    console.log("number");
    //TODO
} else {
    console.error("Invalid Data type");
}

data_list = data_list.sort(() => Math.random() - 0.5);

x = 0;
image.src = data_list[x];

but_1.addEventListener("click", () => {
    if (check_x(x, data_list)) {
        if (check_image(0, data_list[x])) score++;
        x++;
    }
    score_text.innerHTML = (score / x) * 100 + "%";
    image.src = data_list[x];
});

but_2.addEventListener("click", () => {
    if (check_x(x, data_list)) {
        if (check_image(1, data_list[x])) score++;
        x++;
    }
    score_text.innerHTML = (score / x) * 100 + "%";
    image.src = data_list[x];
});

but_3.addEventListener("click", () => {
    if (check_x(x, data_list)) {
        if (check_image(2, data_list[x])) score++;
        x++;
    }
    score_text.innerHTML = (score / x) * 100 + "%";
    image.src = data_list[x];
});
