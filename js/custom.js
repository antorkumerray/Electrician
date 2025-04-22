// let sticky = document.getElementById('header-warpper');
// let menu = document.getElementById('menubtn');
// let navber = document.getElementById('mobile-menu');

// menu.onclick = () => {
//     navber.classList.toggle('bbbbb');
//     sticky.classList.toggle('ss')
// }

// window.onscroll = () => {
//     sticky.classList.toggle('ss');
// }


let menu = document.getElementById('menu');
let menubtn = document.getElementById('menubtn');
menubtn.onclick = () => {
    menu.classList.toggle('acc')
}