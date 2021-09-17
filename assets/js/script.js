const btn = document.getElementById('btn');
const field = document.getElementById("get_msg");
const msg = document.getElementById("show_msg");

/**it's click event, that call a funtion* */
btn.addEventListener('click', () => {            /**Arrow function */
    var paragraph = document.createElement('p');  /**declare a paragrph and create element in dom */
    paragraph.classList.add('msg_bar');          /** add CSS class */
    paragraph.innerText = field.value;            /** munipulate paragrph to innerText */
    msg.appendChild(paragraph);                  /**add paragraph to dom */
    field.value = "";                              /**field is empty now */
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.textDecorationColor = "red";
    })
    paragraph.addEventListener('contextmenu', () => paragraph.style.textDecoration = "");

    paragraph.addEventListener('dblclick', () => msg.removeChild(paragraph));
});

