$(window).on("load", () => {
    const header = document.querySelectorAll("header")
    const navUlLi = document.querySelectorAll("nav ul li");
    check = header[0].classList

    navUlLi.forEach((li) => {
        li.classList.remove("active");
        console.log(li.classList)
        if (li.classList.contains(check)) {
            li.classList.add("active");
        }
    });
})