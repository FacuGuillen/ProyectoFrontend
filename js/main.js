const openLogin = document.getElementById('open-login')
const user = document.getElementById('user')
const openImg = document.getElementById('login-img')

document.addEventListener ('click', function(e){
    if(!openLogin.contains(e.target) && !openImg.contains(e.target)){
        user.classList.add('d-none');
    }
})

openLogin.addEventListener ("click" , function(e){
    e.preventDefault();
    user.classList.toggle("d-none");
})

openImg.addEventListener ('click', function(e){
    e.preventDefault();
    user.classList.toggle('d-none');
})