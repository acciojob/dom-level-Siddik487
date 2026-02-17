window.addEventListener("DOMContentLoaded", function () {

    const element = document.getElementById("level");

    let level = 0;
    let current = element;

    while (current !== null) {
        level++;
        current = current.parentElement;
    }

    alert("The level of the element is: " + level);
});
