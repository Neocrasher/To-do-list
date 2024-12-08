var form = document.getElementById("form");
var input = document.getElementById("input");
var list = document.getElementById("list");
form.addEventListener("submit",
    function(event){
        event.preventDefault();
        createItem(input.value);
    }
)
function createItem(blah){
    var x = "<li>"+ blah + "<button onclick='deleteItem(this)'>Delete</button></li>";
    list.insertAdjacentHTML("beforeend", x);
    input.value="";
    input.focus();
}
function deleteItem(shit){
    shit.parentElement.remove();
}