const submitBtn = document.querySelector('.sub-btn');
const dismissBtn = document.querySelector('.dismiss-btn');
const inputBtn = document.querySelector('.input-textbox'); 
const emailError = document.getElementById('email-error');


submitBtn.addEventListener('click', (e) => {
    // validate emial here
    const inputBtn = document.querySelector('.input-textbox');
    
    if (!inputBtn.validity.patternMismatch && !inputBtn.validity.valueMissing && !inputBtn.validity.typeMismatch) {
        const successSection = document.querySelector('.hide');
        const cardSection = document.querySelector('.card');
        const emailResult = document.querySelector('.email-result');

        console.log(inputBtn.textContent);
        emailResult.textContent = `${inputBtn.value}`
        successSection.classList.remove('hide');
        cardSection.classList.add('hide');
    } else {
        emailError.textContent = 'Valid email required';
    }

    
    
});

inputBtn.addEventListener("input", (e) => {

    if (inputBtn.validity.valid) {
        emailError.textContent = ''; 
    }
})

dismissBtn.addEventListener('click', (e) => {
    const successSection = document.querySelector('.success-card-con');
    const cardSection = document.querySelector('.card');

    successSection.classList.add('hide');
    cardSection.classList.remove('hide');
})