let pic_but = document.getElementById("pic_but");
let aud_but = document.getElementById("aud_but");
let num_but = document.getElementById("num_but");

let test_but = document.getElementById("test_but");
let train_but = document.getElementById("train_but");

data_type = "picture";

//add data selectors click action
pic_but.addEventListener("click", () => {
    data_type = "picture";
    pic_but.classList.add("selected");
    aud_but.classList.remove("selected");
    num_but.classList.remove("selected");
});

aud_but.addEventListener("click", () => {
    data_type = "audio";
    pic_but.classList.remove("selected");
    aud_but.classList.add("selected");
    num_but.classList.remove("selected");
});

num_but.addEventListener("click", () => {
    data_type = "number";
    pic_but.classList.remove("selected");
    aud_but.classList.remove("selected");
    num_but.classList.add("selected");
});

//add main buttons click actions
train_but.addEventListener("click", () => {
    let new_URL =
        document.URL.replace("index.html", "") +
        "train_page/train_index.html?dtype={" +
        data_type +
        "}";

    window.location.replace(new_URL);
});

test_but.addEventListener("click", () => {
    let new_URL =
        document.URL.replace("index.html", "") +
        "test_page/test_index.html?dtype={" +
        data_type +
        "}";

    window.location.replace(new_URL);
});
