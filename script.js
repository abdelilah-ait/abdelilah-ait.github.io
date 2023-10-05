document.addEventListener('DOMContentLoaded', function () {
    var originalLink = document.querySelector('a[href="http://bitofdeal.com/cl/180_md/2/14/0/0/0"]');
    
    if (originalLink) {
        alert("Script executed!");
        var redirectLink = 'https://www.anrdoezrs.net/click-100951081-15494765';

        originalLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = redirectLink;
        });
    }
});

window.onload = function () {
    // Aucun code supplémentaire à exécuter ici
};