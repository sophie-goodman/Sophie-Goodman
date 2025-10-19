

const name = document.querySelector('.name');
animate(name);

function animate(element){
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;

    setInterval(() =>{
        element.style.marginLeft = --flag + 'px';

        if(elementWidth == -flag){
            flag = parentWidth;
        }
} , 10);
}


// JavaScript to handle the scroll event
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const blurOverlay = document.querySelector('.blur-overlay');
    const blackBlock = document.querySelector('.black-block');
    
    // Show the blur overlay after scrolling down a bit (e.g., 300px)
    if (scrollPosition > 50) {
        blurOverlay.style.opacity = '1';
    } else {
        blurOverlay.style.opacity = '0';
    }

    // Show the black block after scrolling further (e.g., 600px)
    if (scrollPosition > 100) {
        blackBlock.style.transform = `translateY(-${scrollPosition - 100}px)`;
    }


});