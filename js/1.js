// Создать HTML-страницу для отображения/редактирования текста. 
// При открытии страницы текст отображается с помощью тега div. 
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать.
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. 
// Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

let div = document.querySelector("div");
let textarea = document.querySelector("textarea");

div.classList.add("show-elem");

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        textarea.value = div.textContent;
        div.classList.remove("show-elem");
        textarea.classList.add("show-elem");
    };
    if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        div.textContent = textarea.value;
        div.classList.add("show-elem");
        textarea.classList.remove("show-elem");
    };
});