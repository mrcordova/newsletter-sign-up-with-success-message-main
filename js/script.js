const submitBtn = document.querySelector('.sub-btn');
const dismissBtn = document.querySelector('.dismiss-btn');

submitBtn.addEventListener('click', (e) => {
    // validate emial here
    const successSection = document.querySelector('.hide');
    const cardSection = document.querySelector('.card');
    const inputBtn = document.querySelector('.input-textbox');
    console.log(inputBtn.validity);

    
    successSection.classList.remove('hide');
    cardSection.classList.add('hide');
});

dismissBtn.addEventListener('click', (e) => {
    const successSection = document.querySelector('.success-card-con');
    const cardSection = document.querySelector('.card');

    successSection.classList.add('hide');
    cardSection.classList.remove('hide');
})