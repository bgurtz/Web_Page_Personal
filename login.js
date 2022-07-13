
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// The loginButton.addEventListener("click")
// I had to look that up I have no idea what the (e) => {e.preventDefault()  is for
// If you have some input on it that would be great. I was trying to treat it like
// a normal click event. I knew part of the code for this, but had to read to complete it. 
// as for the (e) that took about an hour before I could find out that I need that for it to work.

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Brian" && password === "WEBD121") {
        alert("You have successfully logged in.");
        location.href="admin.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})