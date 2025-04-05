document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded!");

    // Fix GitHub Icon Click Event
    document.querySelector(".github-icon").addEventListener("click", function () {
        window.open("https://github.com/your-github-profile", "_blank");
    });

    // Fix Instagram Icon Click Event
    document.querySelector(".insta-icon").addEventListener("click", function () {
        window.open("https://www.instagram.com/_omkar__khot/", "_blank");
    });

    // Fix LinkedIn Icon Click Event
    document.querySelector(".linkedin-icon").addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/omkar-khot-206799204/", "_blank");
    });
});
