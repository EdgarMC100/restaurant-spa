let icon = document.getElementById("icon");
let menu = document.getElementById("nav");
let del = document.getElementById("delete");
icon.addEventListener("click",function showMenu() {
    menu.style.display="flex";
    icon.style.display="none";
});

del.addEventListener("click",function hideMenu() {
    menu.style.display="none";
    icon.style.display="block";
});

