// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

var teamsCtx;

window.addEventListener('load', (evt) => {
    microsoftTeams.initialize();

    microsoftTeams.getContext(function (c) {
        teamsCtx = c;
        document.querySelector("#username").innerHTML = c.userPrincipalName;
    });

    document.querySelector("#image-is-everything").addEventListener("click", () => {
        let challengepopup = document.querySelector("#challenge-popup");
        challengepopup.classList = "challenge-overlay";

        let overlay = document.querySelector("#total-overlay");
        overlay.classList = "total-overlay-blur";
    });
});