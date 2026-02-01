const noBtn = document.querySelector('#noBtn');
const yesBtn = document.querySelector('#yesBtn');

function move() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); move(); });
noBtn.addEventListener('mouseover', move);

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = '<h1 style="text-align:center; margin-top:20%;">YAY! 💖</h1>';
});
