document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggle');

    toggleCheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log('Toggle is ON');
        } else {
            console.log('Toggle is OFF');
        }
    });
});
