document.addEventListener('DOMContentLoaded', function () {
    var redirectLink = '[placeholder5]';
    var imageLink = document.getElementById('redirectLink');

    if (imageLink) {
        imageLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = redirectLink;
        });
    }
});