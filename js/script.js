var items = document.querySelectorAll("ul li");

//Adding Event Listener to all list items
for (i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseenter", function () {
        removeClass();
        this.classList.add('active');
    });
}

//Function to remove active class and add unactive class to all list elements
function removeClass() {
    for (var j = 0; j < items.length; j++) {
        items[j].classList.add("unactive");
        items[j].classList.remove("active");
    }
}
