const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Initialize the first page as active
pages[currentPage].classList.add('active');

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.add('active');
    }
});

