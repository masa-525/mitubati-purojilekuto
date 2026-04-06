document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        // ボタンの「三本線」⇔「×」を切り替え
        menuToggle.classList.toggle('active');
        // メニューの「表示」⇔「非表示」を切り替え
        navMenu.classList.toggle('active');
    });
});
