//event listener style copy mousemove and wheel

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('This should not be copied');
});
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
     console.log(e);
    box.textContent = `x axis - ${e.offsetX} y- axis - ${e.offsetY} `;
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})