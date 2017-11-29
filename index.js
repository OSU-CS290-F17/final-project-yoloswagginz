//this is index.js
var addpostbutton = document.getElementById('add-post-button');
var createpostbutton = document.getElementById('create-post-button');
var cancelpostbutton = document.getElementById('cancel-post-button');
var usernamebutton = document.getElementById('change-username-button');
var createuserbutton = document.getElementById('confirm-username-change');
var canceluserbutton = document.getElementById('cancel-username-change');
var content = document.getElementById('content');
var newpostcontainer = document.getElementById('add-post-container');
var usernamecontainer = document.getElementById('change-username-container');

function show(show, hide) {
    show.classList.remove('masked');
    show.classList.add('center');
    hide.classList.add('masked');
}

function cancel(show, hide) {
    hide.classList.add('masked');
    hide.classList.remove('center');
    show.classList.remove('masked');
    clean();
}

function create() {
    var title = document.getElementById('post-title-input').value;
    var textcontent = document.getElementById('post-content-input').value;
    if (title && textcontent) {
        cancel(content, newpostcontainer);
    } else {
        alert("You must fill all blanks!");
    }
}

function clean() {
    var all = document.getElementsByTagName('input');
    for (var i = 0; i < all.length; i++) {
        all[i].value = "";
    }
}

function username() {
    var name = document.getElementById('username-input').value;
    if (name) {
        document.getElementById('username').textContent = name;
        cancel(content, usernamecontainer);
    } else {
        alert("You must fill in all fields to continue.");
    }
}
addpostbutton.addEventListener('click', function () {
    show(newpostcontainer, content);
});

createpostbutton.addEventListener('click', create);

cancelpostbutton.addEventListener('click', function () {
    cancel(content, newpostcontainer);
});

usernamebutton.addEventListener('click', function () {
    show(usernamecontainer, content);
});

createuserbutton.addEventListener('click', username);
canceluserbutton.addEventListener('click', function () {
    cancel(content, usernamecontainer);
});