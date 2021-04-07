let profilePhoto = document.querySelector('.profile-photo');
let fullPage = document.querySelector('.full-photo-page');
let closeButton = document.querySelector('.close-btn');

profilePhoto.addEventListener('click', function() {
    fullPage.classList.add('visibility-perm');
});
closeButton.addEventListener('click', function() {
    fullPage.classList.remove('visibility-perm');
})