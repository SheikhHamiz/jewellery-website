const adminDetails = document.querySelector(".admin-details");
const displayAdminDetails = ()=> {
    if(adminDetails.getAttribute("aria-disabled") === "false") {
        adminDetails.setAttribute("aria-disabled","true"); 
    } else {
        adminDetails.setAttribute("aria-disabled","false");
    }
}
const adminLoggedIn = () => {
    if(form !== null) {
        form.style.display = "none";
    }
} 