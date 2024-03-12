const openLogin = document.getElementById('open-login')
const user = document.getElementById('user')
const openImg = document.getElementById('login-img')

document.addEventListener('click', function(e) {
    if ((!openLogin.contains(e.target) && !openImg.contains(e.target)) || user.contains(e.target)) {
        user.classList.add('d-none');
        user.classList.remove("animate__animated")
        user.classList.remove("animate__fadeIn")
    }
});

openLogin.addEventListener("click", function(e) {
    e.preventDefault();
    user.classList.toggle("d-none");
    user.classList.toggle("animate__animated")
    user.classList.toggle("animate__fadeIn")
});

openImg.addEventListener('click', function(e) {
    e.preventDefault();
    user.classList.toggle('d-none');
    user.classList.toggle("animate__animated")
    user.classList.toggle("animate__fadeIn")
});

user.addEventListener('click', function(e) {
    e.stopPropagation();
});
