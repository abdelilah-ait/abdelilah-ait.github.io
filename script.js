document.addEventListener('DOMContentLoaded', function () {
    var redirectLink = 'https://www.anrdoezrs.net/click-100951081-15494765';
    var imageLink = document.getElementById('redirectLink');

    if (imageLink) {
        imageLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = redirectLink;
        });
    }
});