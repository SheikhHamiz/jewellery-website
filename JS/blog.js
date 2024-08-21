const dropMenu = document.querySelector(".drop-down");

const dropDown = () => {
    if(dropMenu.getAttribute("aria-disabled") === "true") {
        dropMenu.setAttribute("aria-disabled","false");
    } else {
        dropMenu.setAttribute("aria-disabled","true");
    }
}
