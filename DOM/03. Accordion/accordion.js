function toggle() {
    let btnRef = document.querySelector('.button');
    let hiddenInfo = document.getElementById('extra');

    btnRef.addEventListener('click', clickHandler);

    function clickHandler(event) {
        let btnText = (event.currentTarget.textContent === 'Less') ? 'More' : 'Less';
        event.currentTarget.textContent = btnText;

        hiddenInfo.style.display = (hiddenInfo.style.display === 'block') ? 'none' : 'block';

        // //     // if (btnRef.textContent === 'Less') {
        // //     //     btnRef.textContent = 'More';
        // //     //     hiddenInfo.style.display = 'none';
        // //     // } else {
        // //     //     btnRef.textContent = 'Less';   
        // //     //     hiddenInfo.style.display = 'block';
        // //     // }
        // }
    }
}