//this is index.js
var addpostbutton = document.getElementById('add-post-button');
var createpostbutton = document.getElementById('create-post-button');
var cancelpostbutton = document.getElementById('cancel-post-button');
var usernamebutton = document.getElementById('change-username-button');
var createuserbutton = document.getElementById('confirm-username-change');
var canceluserbutton = document.getElementById('cancel-username-change');
var addcommentbutton = document.getElementsByClassName('comment-button');
var createcommentbutton = document.getElementById('create-comment-button');
var cancelcommentbutton = document.getElementById('cancel-comment-button');
var dislikebutton = document.getElementsByClassName('dislike-button');
var content = document.getElementById('content');
var newpostcontainer = document.getElementById('add-post-container');
var usernamecontainer = document.getElementById('change-username-container');
var newcommentcontainer = document.getElementById('add-comment-container');
var check;

function show(show, hide, ele) {
	show.classList.remove('masked');
	show.classList.add('center');
	hide.classList.add('masked');
	if (ele) {
		check = ele.parentElement.parentElement.parentElement; //get the grand gand parent of comment or dislike button
	}
}

function cancel(show, hide) {
	hide.classList.add('masked');
	hide.classList.remove('center');
	show.classList.remove('masked');
	clean();
}

function create() //create a new post,need a template
{
	var title = document.getElementById('post-title-input').value; //the title of the post
	var textcontent = document.getElementById('post-content-input').value; //the content of the post
	var username = document.getElementById('change-username-button').textContent;
	if (title && textcontent) {

		//you need to rend a new post into the page here
		var postContext = {NumDislikes: "0", postTitle: title, postContent: textcontent, userName: username};
		var contentContainerHTML = Handlebars.templates.content_container(postContext);
		var postContainer = document.getElementById("posts");
		postContainer.insertAdjacentHTML('beforeend', contentContainerHTML);


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
		document.getElementById('change-username-button').textContent = name;
		cancel(content, usernamecontainer);
	} else {
		alert("You must fill in all fields to continue.");
	}
}

function createComment() //the second template for user comment
{
	var name = document.getElementById('change-username-button').textContent; //username
	var textcontent = document.getElementById('comment-input').value; //the comment made by user
	if (textcontent) {
		var allcomment = check.getElementsByTagName('div')[5]; //i have already found the comment container for you
		var args={
			commentUsername:name,
			commentContent:textcontent
		}
		var html=Handlebars.templates.comment(args);
		allcomment.insertAdjacentHTML('beforeend',html);

		//you need to add a comment to the post here
		cancel(content, newcommentcontainer);
	} else {
		alert("You must fill all blanks!");
	}
}

function dislike(ele) {
	var number = ele.getElementsByTagName('div')[0].textContent;
	number = parseInt(number) + 1;
	ele.getElementsByTagName('div')[0].textContent = number;
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

for (var i = 0; i < addcommentbutton.length; i++) {
	addcommentbutton[i].addEventListener('click', function () {
		show(newcommentcontainer, content, this);
	});
}
createcommentbutton.addEventListener('click', createComment);
cancelcommentbutton.addEventListener('click', function () {
	cancel(content, newcommentcontainer);
});

for (var i = 0; i < dislikebutton.length; i++) {
	dislikebutton[i].addEventListener('click', function () {
		dislike(this);
	});
}
