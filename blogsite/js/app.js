const scrollButton = document.querySelector('#scrollToTop');
scrollButton.addEventListener("click", smoothScroll);
function smoothScroll(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}