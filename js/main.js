let links = document.querySelectorAll("aside a");
links.forEach((a) => {
    a.addEventListener("click", (a) => {
        links.forEach((a) => {
            a.classList.remove("active");
        });
        a.currentTarget.classList.add("active");
    });
});

// ---------------------------------------
let loves = document.querySelectorAll(".post .likeIcons span i");
loves.forEach((love) => {
    love.addEventListener("click", (love) => {
        love.currentTarget.classList.toggle("fa-regular");
        love.currentTarget.classList.toggle("fa-solid");
        love.currentTarget.classList.toggle("red");
    });
});
let marks = document.querySelectorAll(".post .markIcons span i");
marks.forEach((mark) => {
    mark.addEventListener("click", (mark) => {
        mark.currentTarget.classList.toggle("fa-regular");
        mark.currentTarget.classList.toggle("fa-solid");
    });
});
// ---------------------------------------

let ps = document.querySelectorAll(".head p");
ps.forEach((p) => {
    p.addEventListener("click", (p) => {
        ps.forEach((p) => {
            p.classList.remove("active");
        });
        p.currentTarget.classList.add("active");
    });
});
let tabs = document.querySelectorAll(".head p:not(:last-child)");
let divs = document.querySelectorAll(".switch div:not(.name)");
let divsDiv = document.querySelectorAll(".switch div div:not(.name)");

let tabsArray = Array.from(tabs);
let divsArray = Array.from(divs);
console.log(divsArray);

tabsArray.forEach((ele) => {
    ele.addEventListener(("click"), (e) => {
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        divsDiv.forEach((div) => {
            div.style.cssText =
                "display: flex; align-items: center;";
        });
        document.querySelector(e.currentTarget.dataset.cont)
            .style.display = "block";
    });
});
// ---------------------------------------

let dropdown = document.querySelector(".dropdown");
let dropdownLinks = document.querySelector(".dropdown .links");
let span = document.querySelector("span#click");
dropdown.addEventListener("click", () => {
    dropdownLinks.classList.toggle("hide");
    span.classList.toggle("click");
});
// ---------------------------------------

let logoBg = document.querySelector("#logoBg");
let showLogoBtn = document.querySelectorAll(".showLogoBtn");
let hideLogoBtn = document.querySelector(".hideLogoBtn");
let header = document.querySelector("header");
let section = document.querySelector("section");

showLogoBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
        header.style.display = "none";
        section.style.display = "none";
        logoBg.style.opacity = "1";
        hideLogoBtn.style.display = "block";
    });
});

hideLogoBtn.addEventListener("click", () => {
    header.style.display = "flex";
    section.style.display = "flex";
    logoBg.style.opacity = "0.1";
    hideLogoBtn.style.display = "none";
});