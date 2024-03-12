const createAccount = document.getElementById("create-account")
const openPopup = document.getElementById("open-sign-up")
const password = document.getElementById("password-sing-up")
const repeatPassword = document.getElementById("repeat-password-sing-up")
const asd = document.getElementById("asd")

// function error(){
//     if(asd = false){
//         alert("Error wachem")
//     }
// }

createAccount.addEventListener('click', function(e){
    e.preventDefault();
    openPopup.classList.toggle("d-none")
    openPopup.classList.toggle("animate__animated")
    openPopup.classList.toggle("animate__fadeIn")
})

// createAccount.addEventListener('click', function(e){
//     e.preventDefault();

//     switch (asd.value){
//         case "":
//             alert("Completar todos los datos");
//             break;
//         default:
//             if(password.value === repeatPassword.value){
//                     openPopup.classList.toggle("d-none")
//                 } else {
//                     Swal.fire("Las contraseñas no coinciden");
//                 } 
//             break;
//     }
// }

// )