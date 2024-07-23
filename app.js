document.getElementById('upload1').addEventListener('change', function(event) {
    loadPhoto(event, 'photo1');
});
document.getElementById('upload2').addEventListener('change', function(event) {
    loadPhoto(event, 'photo2');
});

function loadPhoto(event, photoId) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById(photoId).src = reader.result;
        document.getElementById(photoId).style.opacity = 1;
    };
    reader.readAsDataURL(file);
}

function animatePhotos() {
    const photo1 = document.getElementById('photo1');
    const photo2 = document.getElementById('photo2');

    photo1.style.opacity = 1;
    photo2.style.opacity = 1;

    photo1.style.transition = 'opacity 1s ease, transform 1s ease';
    photo2.style.transition = 'opacity 1s ease, transform 1s ease';

    photo1.style.opacity = 0;
    photo1.style.transform = 'scale(1.2)';

    setTimeout(() => {
        photo2.style.opacity = 0;
        photo2.style.transform = 'scale(1.2)';

        setTimeout(() => {
            photo1.style.opacity = 1;
            photo1.style.transform = 'scale(1)';

            photo2.style.opacity = 1;
            photo2.style.transform = 'scale(1)';
        }, 1000);
    }, 1000);
}

function showApp() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
}
