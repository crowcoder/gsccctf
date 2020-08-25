// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

var teamsCtx;

window.addEventListener('load', (evt) => {
    microsoftTeams.initialize();

    microsoftTeams.getContext(function (c) {
        teamsCtx = c;
        document.querySelector("#username").innerHTML = c.userPrincipalName;
    });
});