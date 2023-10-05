document.addEventListener('DOMContentLoaded', function () {
    // var originalLink = document.querySelector('a[href="[placeholder1]#[url]"]');
    
    // if (originalLink) {
    //     alert("Script executed!");
    //     var redirectLink = '[placeholder5]';

    //     originalLink.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         window.location.href = redirectLink;
    //     });
    // }


    // var redirectLink = 'https://www.anrdoezrs.net/click-100951081-15494765';
    // window.location.href = redirectLink;

    var redirectLink = '[placeholder5]';
    var imageLink = document.getElementById('redirectLink');

    if (imageLink) {
        imageLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = redirectLink;
        });
    }
});

// window.onload = function () {
//     // Aucun code supplémentaire à exécuter ici
// };