const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

function updateItems() {
    items.forEach(item => {
        item.classList.remove('current-item');
    });

    items[currentItem].scrollIntoView({
        inline: 'center',
        behavior: 'smooth'
    });

    items[currentItem].classList.add('current-item');
}

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

            pdateItems();
    });
});

function autoScroll() {
    currentItem += 1;

    if (currentItem >= maxItems) {
        currentItem = 0;
    }

    updateItems();
}

setInterval(autoScroll, 10000);
     
updateItems();