const emailInput = document.getElementById('email');
const tick = document.querySelector('#tick');

const ValidateEmail = (mail) => {
    if (/^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/.test(mail))
        return true
    return false
}

emailInput.addEventListener('keyup', (e) => {
    const value = emailInput.value;
    if (ValidateEmail(value)) {
        emailInput.style.border = '2px solid #2acc99'
        tick.classList.add('valid')
    }
    else {
        emailInput.style.border = '2px solid red'
        tick.classList.remove('valid')
    }
})