document.addEventListener('DOMContentLoaded', function () {
    var originalLink = document.querySelector('a[href="[placeholder1]#[url]"]');
    
    if (originalLink) {
        alert("Script executed!");
        var redirectLink = '[placeholder5]';

        originalLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = redirectLink;
        });
    }
});

window.onload = function () {
    // Aucun code supplémentaire à exécuter ici
};