const submitBtn = document.querySelector('.sub-btn');
const dismissBtn = document.querySelector('.dismiss-btn');

submitBtn.addEventListener('click', (e) => {
    // validate emial here
    const inputBtn = document.querySelector('.input-textbox');
    
    if (!inputBtn.validity.patternMismatch && !inputBtn.validity.valueMissing && !inputBtn.validity.typeMismatch) {
        const successSection = document.querySelector('.hide');
        const cardSection = document.querySelector('.card');
        successSection.classList.remove('hide');
        cardSection.classList.add('hide');
    }
    
});

dismissBtn.addEventListener('click', (e) => {
    const successSection = document.querySelector('.success-card-con');
    const cardSection = document.querySelector('.card');

    successSection.classList.add('hide');
    cardSection.classList.remove('hide');
})