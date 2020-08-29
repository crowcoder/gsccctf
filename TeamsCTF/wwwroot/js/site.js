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
        showPopup("challenge-popup");
    });

    document.querySelector("#close-popup").addEventListener("click", () => {
        hidePopup("challenge-popup");
    });

    document.querySelector("#challenge-3-submit").addEventListener("click", (e) => {
        hidePopup("challenge-popup");
        let answerbox = document.querySelector("#challenge-3");
        if (answerbox.value === "All Your Base Are Belong To Us") {
            showPopup("popup-correct");
        } else {
            showPopup("popup-wrong");
        }
        e.preventDefault;
        return false;
    });
});

function hidePopup(popupId) {
    let challengepopup = document.querySelector("#" + popupId);
    challengepopup.classList = "hide";

    let overlay = document.querySelector("#total-overlay");
    overlay.classList = null;
}

function showPopup(popupId) {
    let challengepopup = document.querySelector("#" + popupId);
    challengepopup.classList = "challenge-overlay";

    let overlay = document.querySelector("#total-overlay");
    overlay.classList = "total-overlay-blur";
}