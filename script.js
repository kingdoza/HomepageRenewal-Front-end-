const typeBoxes = document.querySelectorAll(".subject .box");
(function() {
    for(let i = 0; i < typeBoxes.length; ++i) {
        switch(typeBoxes[i].textContent) {
            case "교필":
                typeBoxes[i].style.backgroundColor = "rgb(84, 96, 255)";
                break;
            case "전기":
                typeBoxes[i].style.backgroundColor = "rgb(255, 116, 52)";
                break;
            case "전선":
                typeBoxes[i].style.backgroundColor = "rgb(255, 178, 35)";
                break;
            case "전필":
                typeBoxes[i].style.backgroundColor = "rgb(255, 62, 62)";
                break;
        }
    }
}) ();

const menus = document.querySelectorAll("header .container nav ul li button")
const toolbars = document.querySelectorAll("header .container nav ul li .toolbar")
for(let i = 0; i < toolbars.length; ++i) {
    toolbars[i].addEventListener("mouseenter", function() {
        menus[i].classList.add("active")});
    menus[i].addEventListener("mouseenter", function() {
        menus[i].classList.add("active")});
    toolbars[i].addEventListener("mouseleave", function() {
        menus[i].classList.remove("active")});
    menus[i].addEventListener("mouseleave", function() {
        menus[i].classList.remove("active")});
}

const login_form = document.forms[0];
login_form.addEventListener("submit", function(e) {
    e.preventDefault();
    const idInput = login_form.id;
    const pwInput = login_form.password;
    if(idInput.value == "") {
        alert("아이디를 입력해 주세요.")
        idInput.focus();
        return;
    }
    if(pwInput.value == "") {
        alert("비밀번호를 입력해 주세요.")
        pwInput.focus();
        return;
    }
    this.submit();
});

const headerEl = document.querySelector("header");
window.addEventListener("scroll", function() {
    const browserScrollY = window.scrollY;
    if(browserScrollY > 0) {
        headerEl.classList.add("active");
    }
    else {
        headerEl.classList.remove("active");
    }
})