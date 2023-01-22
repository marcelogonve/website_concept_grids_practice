(function() {
    const sliders = [...document.querySelectorAll('.testimony-body')];
    const buttonAfter = document.querySelector('#after');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonAfter.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony-body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony-body--show');
        
        if(value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimony-body--show');
    }

})();