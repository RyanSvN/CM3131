let boxes = document.getElementsByClassName('box').length;

//saving checkbox status (local storage can only save strings)
function save() {
    for(let i = 1; i <= boxes; i++) {
        var checkbox = document.getElementById(String(i));
        localStorage.setItem("checkbox" + String(i), checkbox.checked);
    }
}

//loading
for (let i = 1; i <= boxes; i++) {
    if(localStorage.length > 0) {
        var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
        if (checked == true) {
            document.getElementById(String(i)).checked = checked;
        }
    }
}

window.addEventListener('change', save);