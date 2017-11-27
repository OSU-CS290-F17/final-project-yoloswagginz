//this is index.js
var addpostbutton=document.getElementById('addpostbutton');
var createpostbutton=document.getElementById('createpost');
var cancelpostbutton=document.getElementById('cancelpost');
var usernamebutton=document.getElementById('username');
var createuserbutton=document.getElementById('createuser');
var canceluserbutton=document.getElementById('canceluser');
var content=document.getElementById('content');
var newpostcontainer=document.getElementById('popup-container');
var usernamecontainer=document.getElementById('name-container');

function show(show,hide)
{
    show.classList.remove('masked');
    show.classList.add('center');
    hide.classList.add('masked');
}
function cancel(show,hide)
{
    hide.classList.add('masked');
    hide.classList.remove('center');
    show.classList.remove('masked'); 
    clean();
}
function create()
{
    var title=document.getElementById('input-post-title').value;
    var textcontent=document.getElementById('input-post-content').value;
    if(title && textcontent)
    {
        cancel(content,newpostcontainer);
    }
    else
    {
        alert("You must fill all blanks!");
    }
}
function clean()
{
    var all=document.getElementsByTagName('input');
    for(var i=0;i<all.length;i++)
    {
        all[i].value="";
    }
}
function username()
{
    var name=document.getElementById('input-user-content').value;
    if(name)
    {
        document.getElementById('username').textContent=name;
        cancel(content,usernamecontainer);
    }
    else
    {
        alert("You must fill the blank!");
    }
}
addpostbutton.addEventListener('click',function(){
    show(newpostcontainer,content);
});

createpostbutton.addEventListener('click',create);

cancelpostbutton.addEventListener('click',function()
{
    cancel(content,newpostcontainer);
});

usernamebutton.addEventListener('click',function(){
    show(usernamecontainer,content);
});

createuserbutton.addEventListener('click',username);
canceluserbutton.addEventListener('click',function()
{
    cancel(content,usernamecontainer);
});