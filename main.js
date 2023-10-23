import './style.css'

let sortButtons = document.querySelectorAll('button');
let sortSelect = document.querySelector('#mobile');

let activeButton = null;

sortButtons.forEach(button => {
    button.addEventListener('click', () => {
        let selectedValue = button.getAttribute('data-value');
        sortSelect.value = selectedValue;
        console.log(selectedValue);

        sortButtons.forEach(button => {
            button.classList.remove('active');
        });

        button.classList.add('active');
        activeButton = button;

    });

    button.addEventListener('mouseover', () => {
        if (button !== activeButton) {
            button.classList.add('hover');
        }
    });

    button.addEventListener('mouseout', () => {
        if (button !== activeButton) {
            button.classList.remove('hover');
        }
    });
});

sortSelect.addEventListener('change', () => {
    let selectedValue = sortSelect.value;
    let goodButton = document.querySelector(`[data-value='${selectedValue}']`);
    if (goodButton) {
        sortButtons.forEach(button => {
            button.classList.remove('active');
            button.classList.remove('hover');
        });

        goodButton.classList.add('active');
        activeButton = goodButton;
    }
});