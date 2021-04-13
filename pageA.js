
document.querySelector('#A').onclick = function() {changeName('Left')};
document.querySelector('#B').onclick = function() {changeName('Middle')};
document.querySelector('#C').onclick = function() {changeName('Right')};

function changeName(x)
{
    document.querySelector("#msg").innerHTML = x;
}