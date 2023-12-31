const pw1 = document.querySelector('#pwd');
const pw2 = document.querySelector('#pwd-confirmation');

pw1.addEventListener('input', checkPwd);
pw2.addEventListener('input', checkPwd);

function checkPwd(e){
    if (pw1.value !== e.target.value){
        pw1.classList.add('error');
        pw2.classList.add('error');
    }
    else {
        pw1.classList.replace('error', 'pass');
        pw2.classList.replace('error', 'pass');
    }
    console.log(e.target.value);
}