// Redirect function
function redirect(url) {
    window.open(url, '_blank');
}

// Update Profile Photo
function updatePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const photoUrl = e.target.result;
            document.getElementById('profile-photo').src = photoUrl;
            localStorage.setItem('profilePhoto', photoUrl); // Save to LocalStorage
        };
        reader.readAsDataURL(file);
    }
}

// Load Profile Photo on Page Load
window.onload = function () {
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
        document.getElementById('profile-photo').src = savedPhoto;
    }
};
